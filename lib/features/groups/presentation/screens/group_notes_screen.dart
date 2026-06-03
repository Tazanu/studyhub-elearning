import 'dart:io';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';
import 'package:file_picker/file_picker.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:timeago/timeago.dart' as timeago;
import 'package:path_provider/path_provider.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/network/firestore_service.dart';
import '../providers/groups_provider.dart';
import '../../../auth/presentation/providers/auth_provider.dart';

class GroupNotesScreen extends ConsumerStatefulWidget {
  final String groupId;
  final String groupName;

  const GroupNotesScreen({
    super.key,
    required this.groupId,
    required this.groupName,
  });

  @override
  ConsumerState<GroupNotesScreen> createState() => _GroupNotesScreenState();
}

class _GroupNotesScreenState extends ConsumerState<GroupNotesScreen> {
  bool _isUploading = false;

  Future<void> _uploadFile() async {
    // Pick a file
    FilePickerResult? result = await FilePicker.platform.pickFiles(
      type: FileType.custom,
      allowedExtensions: ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'txt', 'md'],
    );

    if (result == null) return;

    final file = File(result.files.single.path!);
    final fileName = result.files.single.name;
    final fileSize = result.files.single.size;

    setState(() => _isUploading = true);

    try {
      // Upload file to Firebase Storage
      final downloadUrl = await ref.read(uploadFileProvider(
        UploadFileParams(
          file: file,
          path: 'groups/${widget.groupId}/notes',
          fileName: fileName,
        ),
      ).future);

      // Save note metadata to Firestore
      await ref.read(uploadGroupNoteProvider({
        'groupId': widget.groupId,
        'fileName': fileName,
        'fileSize': fileSize,
        'fileUrl': downloadUrl,
        'fileType': _getFileExtension(fileName),
        'uploadedBy': ref.read(currentUserProvider).value?.uid ?? '',
        'uploaderName': ref.read(currentUserProvider).value?.displayName ?? 'Anonymous',
        'createdAt': DateTime.now().toIso8601String(),
      }).future);

      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('File uploaded successfully!'), backgroundColor: AppColors.accent),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Upload failed: $e'), backgroundColor: AppColors.error),
        );
      }
    } finally {
      setState(() => _isUploading = false);
    }
  }

  String _getFileExtension(String fileName) {
    if (fileName.endsWith('.pdf')) return 'pdf';
    if (fileName.endsWith('.doc') || fileName.endsWith('.docx')) return 'doc';
    if (fileName.endsWith('.ppt') || fileName.endsWith('.pptx')) return 'ppt';
    if (fileName.endsWith('.txt')) return 'txt';
    if (fileName.endsWith('.md')) return 'md';
    return 'other';
  }

  IconData _getFileIcon(String fileType) {
    switch (fileType) {
      case 'pdf':
        return Icons.picture_as_pdf;
      case 'doc':
        return Icons.description;
      case 'ppt':
        return Icons.slideshow;
      default:
        return Icons.insert_drive_file;
    }
  }

  Color _getFileColor(String fileType) {
    switch (fileType) {
      case 'pdf':
        return const Color(0xFFEF4444);
      case 'doc':
        return const Color(0xFF3B82F6);
      case 'ppt':
        return const Color(0xFFF59E0B);
      default:
        return AppColors.neutral;
    }
  }

  Future<void> _downloadFile(String fileUrl, String fileName) async {
    try {
      // On web, we can only open the URL
      // On mobile/desktop, we would need to implement actual download
      final uri = Uri.parse(fileUrl);
      if (await canLaunchUrl(uri)) {
        await launchUrl(uri, mode: LaunchMode.externalApplication);
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Opening file...'), backgroundColor: AppColors.info),
          );
        }
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Failed to open file: $e'), backgroundColor: AppColors.error),
        );
      }
    }
  }

  Future<void> _deleteNote(String noteId) async {
    final confirmed = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Delete Note'),
        content: const Text('Are you sure you want to delete this note?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () => Navigator.pop(context, true),
            style: ElevatedButton.styleFrom(backgroundColor: AppColors.error),
            child: const Text('Delete', style: TextStyle(color: Colors.white)),
          ),
        ],
      ),
    );

    if (confirmed == true) {
      // Delete from Firestore directly
      await FirestoreService.deleteGroupNote(noteId);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Note deleted'), backgroundColor: AppColors.accent),
        );
      }
    }
  }

  String _formatFileSize(int bytes) {
    if (bytes < 1024) return '$bytes B';
    if (bytes < 1024 * 1024) return '${(bytes / 1024).toStringAsFixed(1)} KB';
    return '${(bytes / (1024 * 1024)).toStringAsFixed(1)} MB';
  }

  @override
  Widget build(BuildContext context) {
    final notes = ref.watch(groupNotesProvider(widget.groupId));
    final currentUserId = ref.watch(currentUserProvider).value?.uid;
    final isMobile = MediaQuery.of(context).size.width < 768;

    return Scaffold(
      appBar: AppBar(
        title: Row(
          children: [
            Container(
              width: 36,
              height: 36,
              decoration: BoxDecoration(
                color: AppColors.primary,
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Icon(Icons.library_books, color: Colors.white, size: 18),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(widget.groupName, style: const TextStyle(fontWeight: FontWeight.w600), overflow: TextOverflow.ellipsis),
                  const Text('Shared Notes', style: TextStyle(fontSize: 11, color: AppColors.textTertiary)),
                ],
              ),
            ),
          ],
        ),
        backgroundColor: AppColors.surface,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: AppColors.neutral),
          onPressed: () => Navigator.pop(context),
        ),
        actions: [
          if (_isUploading)
            const Padding(
              padding: EdgeInsets.all(12),
              child: SizedBox(
                width: 20,
                height: 20,
                child: CircularProgressIndicator(strokeWidth: 2),
              ),
            ),
        ],
      ),
      body: Column(
        children: [
          // Upload button
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: AppColors.surface,
              border: Border(bottom: BorderSide(color: AppColors.borderGray)),
            ),
            child: Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        'Share study materials',
                        style: TextStyle(fontSize: 14, fontWeight: FontWeight.w600),
                      ),
                      Text(
                        'PDF, DOC, PPT up to 25MB',
                        style: TextStyle(fontSize: 12, color: AppColors.textTertiary),
                      ),
                    ],
                  ),
                ),
                ElevatedButton.icon(
                  onPressed: _isUploading ? null : _uploadFile,
                  icon: const Icon(Icons.upload_file, size: 18),
                  label: const Text('Upload'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppColors.primary,
                    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                  ),
                ),
              ],
            ),
          ),
          // Notes list
          Expanded(
            child: notes.when(
              data: (noteList) {
                if (noteList.isEmpty) {
                  return _buildEmptyState();
                }
                return ListView.builder(
                  padding: const EdgeInsets.all(16),
                  itemCount: noteList.length,
                  itemBuilder: (context, index) {
                    final note = noteList[index];
                    return _buildNoteCard(note, currentUserId);
                  },
                );
              },
              loading: () => const Center(child: CircularProgressIndicator()),
              error: (error, stack) => Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Icon(Icons.error_outline, size: 48, color: AppColors.error),
                    const SizedBox(height: 16),
                    Text('Error loading notes: $error'),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildEmptyState() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.library_books_outlined, size: 64, color: AppColors.textTertiary.withOpacity(0.5)),
          const SizedBox(height: 16),
          Text(
            'No notes shared yet',
            style: TextStyle(fontSize: 16, color: AppColors.textTertiary),
          ),
          const SizedBox(height: 8),
          Text(
            'Be the first to share study materials!',
            style: TextStyle(fontSize: 14, color: AppColors.textTertiary),
          ),
        ],
      ),
    );
  }

  Widget _buildNoteCard(Map<String, dynamic> note, String? currentUserId) {
    final fileType = note['fileType'] ?? 'other';
    final fileSize = note['fileSize'] ?? 0;
    final isOwner = note['uploadedBy'] == currentUserId;
    final isMobile = MediaQuery.of(context).size.width < 768;

    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      child: InkWell(
        onTap: () => _downloadFile(note['fileUrl'], note['fileName']),
        child: Padding(
          padding: const EdgeInsets.all(12),
          child: Row(
            children: [
              Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                  color: _getFileColor(fileType).withOpacity(0.1),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Icon(
                  _getFileIcon(fileType),
                  color: _getFileColor(fileType),
                  size: 24,
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      note['fileName'] ?? 'Unknown file',
                      style: const TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.w600,
                      ),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                    const SizedBox(height: 4),
                    Row(
                      children: [
                        Expanded(
                          child: Text(
                            _formatFileSize(fileSize),
                            style: TextStyle(
                              fontSize: 12,
                              color: AppColors.textTertiary,
                            ),
                          ),
                        ),
                        const Text(' • ', style: TextStyle(fontSize: 12, color: AppColors.textTertiary)),
                        Expanded(
                          child: Text(
                            note['uploaderName'] ?? 'Unknown',
                            style: TextStyle(
                              fontSize: 12,
                              color: AppColors.textTertiary,
                            ),
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                        const Text(' • ', style: TextStyle(fontSize: 12, color: AppColors.textTertiary)),
                        Text(
                          timeago.format(DateTime.parse(note['createdAt'])),
                          style: TextStyle(
                            fontSize: 12,
                            color: AppColors.textTertiary,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              PopupMenuButton<String>(
                onSelected: (value) {
                  if (value == 'download') {
                    _downloadFile(note['fileUrl'], note['fileName']);
                  } else if (value == 'delete' && isOwner) {
                    _deleteNote(note['id']);
                  }
                },
                itemBuilder: (context) => [
                  const PopupMenuItem(
                    value: 'download',
                    child: Row(
                      children: [
                        Icon(Icons.download, size: 18),
                        SizedBox(width: 8),
                        Text('Download'),
                      ],
                    ),
                  ),
                  if (isOwner)
                    const PopupMenuItem(
                      value: 'delete',
                      child: Row(
                        children: [
                          Icon(Icons.delete, size: 18, color: AppColors.error),
                          SizedBox(width: 8),
                          Text('Delete', style: TextStyle(color: AppColors.error)),
                        ],
                      ),
                    ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}