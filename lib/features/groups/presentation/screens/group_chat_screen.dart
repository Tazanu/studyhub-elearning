import 'dart:io';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:timeago/timeago.dart' as timeago;
import 'package:file_picker/file_picker.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../../../core/constants/app_colors.dart';
import '../providers/groups_provider.dart';
import '../../../auth/presentation/providers/auth_provider.dart';

class GroupChatScreen extends ConsumerStatefulWidget {
  final String groupId;
  final String groupName;

  const GroupChatScreen({
    super.key,
    required this.groupId,
    required this.groupName,
  });

  @override
  ConsumerState<GroupChatScreen> createState() => _GroupChatScreenState();
}

class _GroupChatScreenState extends ConsumerState<GroupChatScreen> {
  final ScrollController _scrollController = ScrollController();
  final TextEditingController _messageController = TextEditingController();
  bool _isUploading = false;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _scrollToBottom();
    });
  }

  @override
  void dispose() {
    _scrollController.dispose();
    _messageController.dispose();
    super.dispose();
  }

  void _scrollToBottom() {
    if (_scrollController.hasClients) {
      _scrollController.animateTo(
        0,
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeOut,
      );
    }
  }

  void _sendMessage() {
    final message = _messageController.text.trim();
    if (message.isEmpty) return;

    ref.read(sendMessageProvider({
      'groupId': widget.groupId,
      'text': message,
      'type': 'text',
      'createdAt': DateTime.now().toIso8601String(),
    }).future);

    _messageController.clear();
    _scrollToBottom();
  }

  Future<void> _uploadFile() async {
    FilePickerResult? result = await FilePicker.platform.pickFiles(
      type: FileType.custom,
      allowedExtensions: ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'txt', 'md', 'jpg', 'jpeg', 'png', 'gif'],
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
          path: 'groups/${widget.groupId}/chat_files',
          fileName: fileName,
        ),
      ).future);

      // Send message with file link
      await ref.read(sendMessageProvider({
        'groupId': widget.groupId,
        'text': '📎 Shared file: $fileName',
        'type': 'file',
        'fileUrl': downloadUrl,
        'fileName': fileName,
        'fileSize': fileSize,
        'createdAt': DateTime.now().toIso8601String(),
      }).future);

      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('File shared successfully!'), backgroundColor: AppColors.accent),
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

  Future<void> _downloadFile(String fileUrl, String fileName) async {
    try {
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

  String _getFileExtension(String fileName) {
    if (fileName.endsWith('.pdf')) return 'pdf';
    if (fileName.endsWith('.doc') || fileName.endsWith('.docx')) return 'doc';
    if (fileName.endsWith('.ppt') || fileName.endsWith('.pptx')) return 'ppt';
    if (fileName.endsWith('.txt')) return 'txt';
    if (fileName.endsWith('.md')) return 'md';
    if (fileName.endsWith('.jpg') || fileName.endsWith('.jpeg')) return 'image';
    if (fileName.endsWith('.png')) return 'image';
    if (fileName.endsWith('.gif')) return 'image';
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
      case 'image':
        return Icons.image;
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
      case 'image':
        return const Color(0xFF10B981);
      default:
        return AppColors.neutral;
    }
  }

  String _formatFileSize(int bytes) {
    if (bytes < 1024) return '$bytes B';
    if (bytes < 1024 * 1024) return '${(bytes / 1024).toStringAsFixed(1)} KB';
    return '${(bytes / (1024 * 1024)).toStringAsFixed(1)} MB';
  }

  @override
  Widget build(BuildContext context) {
    final messages = ref.watch(groupMessagesProvider(widget.groupId));
    final currentUser = ref.watch(currentUserProvider).value;

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
              child: const Icon(Icons.groups, color: Colors.white, size: 18),
            ),
            const SizedBox(width: 8),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(widget.groupName, style: const TextStyle(fontWeight: FontWeight.w600)),
                const Text('Group Chat', style: TextStyle(fontSize: 11, color: AppColors.textTertiary)),
              ],
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
          IconButton(
            icon: const Icon(Icons.info_outline, color: AppColors.neutral),
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Group info coming soon')),
              );
            },
          ),
        ],
      ),
      body: Column(
        children: [
          // Messages list
          Expanded(
            child: messages.when(
              data: (messageList) {
                if (messageList.isEmpty) {
                  return _buildEmptyState();
                }
                return ListView.builder(
                  controller: _scrollController,
                  reverse: true,
                  padding: const EdgeInsets.all(16),
                  itemCount: messageList.length,
                  itemBuilder: (context, index) {
                    final msg = messageList[index];
                    final isMe = msg['senderId'] == currentUser?.uid;
                    return _buildMessageBubble(msg, isMe);
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
                    Text('Error loading messages: $error'),
                  ],
                ),
              ),
            ),
          ),
          // Message input
          _buildMessageInput(),
        ],
      ),
    );
  }

  Widget _buildEmptyState() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.chat_bubble_outline, size: 64, color: AppColors.textTertiary.withOpacity(0.5)),
          const SizedBox(height: 16),
          Text(
            'No messages yet',
            style: TextStyle(fontSize: 16, color: AppColors.textTertiary),
          ),
          const SizedBox(height: 8),
          Text(
            'Start the conversation or share a file!',
            style: TextStyle(fontSize: 14, color: AppColors.textTertiary),
          ),
        ],
      ),
    );
  }

  Widget _buildMessageBubble(Map<String, dynamic> msg, bool isMe) {
    final isFile = msg['type'] == 'file';
    final fileUrl = msg['fileUrl'];
    final fileName = msg['fileName'];

    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Row(
        mainAxisAlignment: isMe ? MainAxisAlignment.end : MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          if (!isMe) ...[
            CircleAvatar(
              radius: 16,
              backgroundColor: AppColors.primary.withOpacity(0.15),
              child: Text(
                (msg['senderName'] ?? '?').substring(0, 1).toUpperCase(),
                style: const TextStyle(color: AppColors.primary, fontWeight: FontWeight.w700, fontSize: 12),
              ),
            ),
            const SizedBox(width: 8),
          ],
          Flexible(
            child: InkWell(
              onTap: isFile && fileUrl != null
                  ? () => _downloadFile(fileUrl, fileName ?? 'file')
                  : null,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                decoration: BoxDecoration(
                  color: isMe ? AppColors.primary : AppColors.backgroundGray,
                  borderRadius: BorderRadius.only(
                    topLeft: const Radius.circular(12),
                    topRight: const Radius.circular(12),
                    bottomLeft: Radius.circular(isMe ? 12 : 4),
                    bottomRight: Radius.circular(isMe ? 4 : 12),
                  ),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    if (!isMe)
                      Text(
                        msg['senderName'] ?? 'Unknown',
                        style: const TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w600,
                          color: AppColors.primary,
                        ),
                      ),
                    if (isFile && fileName != null) ...[
                      Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(
                            _getFileIcon(_getFileExtension(fileName)),
                            color: isMe ? Colors.white70 : _getFileColor(_getFileExtension(fileName)),
                            size: 20,
                          ),
                          const SizedBox(width: 8),
                          Flexible(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  fileName,
                                  style: TextStyle(
                                    fontSize: 13,
                                    fontWeight: FontWeight.w500,
                                    color: isMe ? Colors.white : AppColors.textPrimary,
                                  ),
                                  overflow: TextOverflow.ellipsis,
                                ),
                                if (msg['fileSize'] != null)
                                  Text(
                                    _formatFileSize(msg['fileSize']),
                                    style: TextStyle(
                                      fontSize: 11,
                                      color: isMe ? Colors.white60 : AppColors.textTertiary,
                                    ),
                                  ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ] else ...[
                      Text(
                        msg['text'] ?? '',
                        style: TextStyle(
                          fontSize: 14,
                          color: isMe ? Colors.white : AppColors.textPrimary,
                        ),
                      ),
                    ],
                    const SizedBox(height: 4),
                    Text(
                      timeago.format(DateTime.parse(msg['createdAt'])),
                      style: TextStyle(
                        fontSize: 10,
                        color: isMe ? Colors.white70 : AppColors.textTertiary,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
          if (isMe) const SizedBox(width: 8),
        ],
      ),
    );
  }

  Widget _buildMessageInput() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      decoration: BoxDecoration(
        color: AppColors.surface,
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 10,
            offset: const Offset(0, -2),
          ),
        ],
      ),
      child: Row(
        children: [
          IconButton(
            icon: const Icon(Icons.attach_file, color: AppColors.textSecondary),
            onPressed: _isUploading ? null : _uploadFile,
            tooltip: 'Attach file',
          ),
          Expanded(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              decoration: BoxDecoration(
                color: AppColors.backgroundGray,
                borderRadius: BorderRadius.circular(24),
              ),
              child: TextField(
                controller: _messageController,
                decoration: const InputDecoration(
                  hintText: 'Type a message...',
                  border: InputBorder.none,
                ),
                maxLines: 4,
                textInputAction: TextInputAction.send,
                onSubmitted: (_) => _sendMessage(),
              ),
            ),
          ),
          const SizedBox(width: 8),
          Container(
            decoration: const BoxDecoration(
              color: AppColors.primary,
              shape: BoxShape.circle,
            ),
            child: IconButton(
              icon: const Icon(Icons.send, color: Colors.white, size: 20),
              onPressed: _sendMessage,
            ),
          ),
        ],
      ),
    );
  }
}