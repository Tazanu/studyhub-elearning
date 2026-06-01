import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/constants/app_text_styles.dart';
import '../providers/groups_provider.dart';
import '../widgets/create_group_dialog.dart';

class StudySphereScreen extends ConsumerWidget {
  const StudySphereScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final myGroups = ref.watch(myGroupsProvider);
    final selectedGroupId = ref.watch(selectedGroupIdProvider);
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth < 768;
    final isTablet = screenWidth >= 768 && screenWidth < 1024;

    return Scaffold(
      backgroundColor: AppColors.backgroundGray,
      body: Column(
        children: [
          _Header(isMobile: isMobile),
          Expanded(
            child: isMobile
                ? _buildMobileLayout(context, ref, myGroups, selectedGroupId)
                : _buildDesktopLayout(context, ref, myGroups, selectedGroupId, isTablet),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {
          showDialog(
            context: context,
            builder: (context) => const CreateGroupDialog(),
          );
        },
        icon: const Icon(Icons.add),
        label: const Text('Create Group'),
        backgroundColor: AppColors.primary,
      ),
    );
  }

  Widget _buildMobileLayout(BuildContext context, WidgetRef ref, myGroups, selectedGroupId) {
    if (selectedGroupId == null) {
      return const _EmptyState();
    }
    return _FeedColumn(selectedGroupId: selectedGroupId);
  }

  Widget _buildDesktopLayout(BuildContext context, WidgetRef ref, myGroups, selectedGroupId, isTablet) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _LeftSidebar(myGroups: myGroups, selectedGroupId: selectedGroupId, ref: ref, isTablet: isTablet),
        Expanded(child: _FeedColumn(selectedGroupId: selectedGroupId)),
        _RightSidebar(selectedGroupId: selectedGroupId),
      ],
    );
  }
}

class _Header extends StatelessWidget {
  final bool isMobile;

  const _Header({required this.isMobile});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 64,
      padding: EdgeInsets.symmetric(horizontal: isMobile ? 16 : 24),
      color: AppColors.backgroundWhite,
      child: Row(
        children: [
          Container(
            width: 32, height: 32,
            decoration: BoxDecoration(color: AppColors.primary, borderRadius: BorderRadius.circular(8)),
            child: const Icon(Icons.school, color: Colors.white, size: 18),
          ),
          const SizedBox(width: 8),
          const Text('StudySphere', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: AppColors.textPrimary)),
          const SizedBox(width: 24),
          if (!isMobile)
            Expanded(
              child: Container(
                height: 38,
                decoration: BoxDecoration(
                  color: AppColors.backgroundGray,
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: AppColors.borderGray),
                ),
                child: const Row(
                  children: [
                    SizedBox(width: 12),
                    Icon(Icons.search, size: 18, color: AppColors.textTertiary),
                    SizedBox(width: 8),
                    Text('Search groups, posts...', style: TextStyle(fontSize: 13, color: AppColors.textTertiary)),
                  ],
                ),
              ),
            ),
          const SizedBox(width: 16),
          IconButton(
            icon: const Icon(Icons.notifications_outlined, color: AppColors.neutralLight), 
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('No new notifications')),
              );
            }
          ),
          GestureDetector(
            onTap: () {
              showDialog(
                context: context,
                builder: (context) => AlertDialog(
                  title: const Text('User Menu'),
                  content: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      ListTile(
                        leading: const Icon(Icons.person),
                        title: const Text('Profile'),
                        onTap: () {
                          Navigator.pop(context);
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(content: Text('Profile feature coming soon')),
                          );
                        },
                      ),
                      ListTile(
                        leading: const Icon(Icons.settings),
                        title: const Text('Settings'),
                        onTap: () {
                          Navigator.pop(context);
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(content: Text('Settings feature coming soon')),
                          );
                        },
                      ),
                    ],
                  ),
                ),
              );
            },
            child: const CircleAvatar(radius: 16, backgroundColor: AppColors.primary,
              child: Text('A', style: TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w700))),
          ),
        ],
      ),
    );
  }
}

class _LeftSidebar extends StatelessWidget {
  final AsyncValue<List<Map<String, dynamic>>> myGroups;
  final String? selectedGroupId;
  final WidgetRef ref;
  final bool isTablet;

  const _LeftSidebar({required this.myGroups, required this.selectedGroupId, required this.ref, this.isTablet = false});

  @override
  Widget build(BuildContext context) {
    final width = isTablet ? 220.0 : 260.0;
    
    return Container(
      width: width,
      color: AppColors.backgroundWhite,
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text('MY GROUPS', style: AppTextStyles.overline),
              TextButton(
                onPressed: () {
                  showDialog(
                    context: context,
                    builder: (context) => AlertDialog(
                      title: const Text('All Groups'),
                      content: const Text('Browse all available study groups'),
                      actions: [
                        TextButton(
                          onPressed: () => Navigator.pop(context),
                          child: const Text('Close'),
                        ),
                      ],
                    ),
                  );
                }, 
                child: const Text('See all', style: TextStyle(fontSize: 12, color: AppColors.primary))
              ),
            ],
          ),
          const SizedBox(height: 8),
          myGroups.when(
            data: (groups) {
              if (groups.isEmpty) {
                return Padding(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('No groups yet', style: TextStyle(fontSize: 13, color: AppColors.textTertiary)),
                      const SizedBox(height: 4),
                      Text('Create or join a study group to get started', style: TextStyle(fontSize: 11, color: AppColors.textTertiary)),
                    ],
                  ),
                );
              }
              return Column(
                children: groups.map((group) {
                  final isSelected = group['id'] == selectedGroupId;
                  return _GroupTile(
                    groupId: group['id'],
                    name: group['name'] ?? 'Unknown',
                    members: '${(group['memberIds'] as List?)?.length ?? 0} members',
                    isSelected: isSelected,
                    onTap: () {
                      ref.read(selectedGroupIdProvider.notifier).state = group['id'];
                    },
                  );
                }).toList(),
              );
            },
            loading: () => const Center(child: CircularProgressIndicator()),
            error: (error, stack) => Text('Error: $error', style: const TextStyle(color: AppColors.error, fontSize: 12)),
          ),
          const SizedBox(height: 20),
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: AppColors.primary,
              borderRadius: BorderRadius.circular(12),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Upcoming Session', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13)),
                const SizedBox(height: 4),
                const Text('Calculus II Study Call', style: TextStyle(color: Colors.white70, fontSize: 12)),
                const SizedBox(height: 4),
                const Text('Today at 3:00 PM', style: TextStyle(color: Colors.white70, fontSize: 11)),
                const SizedBox(height: 10),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: () {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Joining study call...')),
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(vertical: 8),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(6)),
                    ),
                    child: const Text('Join Call', style: TextStyle(color: AppColors.primary, fontWeight: FontWeight.w700, fontSize: 12)),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _GroupTile extends StatelessWidget {
  final String groupId;
  final String name, members;
  final bool isSelected;
  final VoidCallback onTap;

  const _GroupTile({
    required this.groupId,
    required this.name,
    required this.members,
    required this.isSelected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final colors = [Colors.purple, Colors.orange, Colors.blue, Colors.green, Colors.red, Colors.teal];
    final colorIndex = groupId.hashCode.abs() % colors.length;
    final color = colors[colorIndex];

    return GestureDetector(
      onTap: onTap,
      child: Container(
        margin: const EdgeInsets.only(bottom: 4),
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
        decoration: BoxDecoration(
          color: isSelected ? AppColors.primary.withOpacity(0.08) : Colors.transparent,
          borderRadius: BorderRadius.circular(8),
        ),
        child: Row(
          children: [
            CircleAvatar(
              radius: 16, backgroundColor: color.withOpacity(0.2),
              child: Text(name.substring(0, 1).toUpperCase(), style: TextStyle(color: color, fontWeight: FontWeight.w700, fontSize: 13)),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(name, style: TextStyle(
                    fontSize: 13, fontWeight: isSelected ? FontWeight.w600 : FontWeight.w400,
                    color: isSelected ? AppColors.primary : AppColors.textPrimary,
                  ), overflow: TextOverflow.ellipsis),
                  Text(members, style: const TextStyle(fontSize: 11, color: AppColors.textTertiary)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _FeedColumn extends StatelessWidget {
  final String? selectedGroupId;

  const _FeedColumn({required this.selectedGroupId});

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth < 768;

    return SingleChildScrollView(
      padding: EdgeInsets.all(isMobile ? 12 : 20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _PostComposer(),
          const SizedBox(height: 16),
          _FilterTabs(),
          const SizedBox(height: 16),
          if (selectedGroupId == null)
            const _EmptyState()
          else
            _GroupContent(groupId: selectedGroupId!),
        ],
      ),
    );
  }
}

class _EmptyState extends StatelessWidget {
  const _EmptyState();
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(40),
      decoration: BoxDecoration(
        color: AppColors.backgroundWhite,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppColors.borderGray),
      ),
      child: Column(
        children: [
          Icon(Icons.groups_outlined, size: 64, color: AppColors.textTertiary.withOpacity(0.5)),
          const SizedBox(height: 16),
          const Text(
            'Select a group to view content',
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600, color: AppColors.textPrimary),
          ),
          const SizedBox(height: 8),
          Text(
            'Choose a group from the sidebar or create a new one',
            style: TextStyle(fontSize: 14, color: AppColors.textTertiary),
          ),
        ],
      ),
    );
  }
}

class _GroupContent extends StatelessWidget {
  final String groupId;

  const _GroupContent({required this.groupId});

  @override
  Widget build(BuildContext context) {
    final posts = [];

    return Column(
      children: [
        _PostCard(
          author: 'Dr. Emily Chen',
          time: '2 hours ago',
          group: 'Calculus II',
          title: 'Integration by Parts - Practice Problems',
          content: 'Here are some practice problems for our upcoming midterm. Focus on problems 3-7 as they cover the most common exam patterns.',
          hasFile: true,
          fileName: 'Integration_Practice.pdf',
          fileSize: '1.2 MB',
          likes: 24,
          comments: 8,
        ),
        const SizedBox(height: 12),
        _PostCard(
          author: 'Marcus Johnson',
          time: '5 hours ago',
          group: 'Calculus II',
          title: 'Question about Taylor Series convergence',
          content: 'Can someone explain when a Taylor series converges? I\'m confused about the radius of convergence concept.',
          hasFile: false,
          fileName: '',
          fileSize: '',
          likes: 12,
          comments: 15,
        ),
      ],
    );
  }
}

class _PostComposer extends StatefulWidget {
  @override
  State<_PostComposer> createState() => _PostComposerState();
}

class _PostComposerState extends State<_PostComposer> {
  void _showCreatePostDialog({String? initialContent, String? attachmentName}) {
    final contentController = TextEditingController(text: initialContent ?? '');
    final formKey = GlobalKey<FormState>();

    showDialog(
      context: context,
      builder: (dialogContext) => AlertDialog(
        title: const Text('Create Post', style: TextStyle(fontWeight: FontWeight.w700)),
        content: Form(
          key: formKey,
          child: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                TextFormField(
                  controller: contentController,
                  decoration: const InputDecoration(
                    labelText: 'What\'s on your mind?',
                    hintText: 'Share something with your group...',
                    border: OutlineInputBorder(),
                  ),
                  maxLines: 5,
                  validator: (value) {
                    if (value == null || value.trim().isEmpty) {
                      return 'Please enter some content';
                    }
                    return null;
                  },
                ),
                if (attachmentName != null) ...[
                  const SizedBox(height: 12),
                  Container(
                    padding: const EdgeInsets.all(8),
                    decoration: BoxDecoration(
                      color: AppColors.backgroundGray,
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Row(
                      children: [
                        const Icon(Icons.attach_file, size: 16, color: AppColors.primary),
                        const SizedBox(width: 8),
                        Expanded(
                          child: Text(
                            attachmentName,
                            style: const TextStyle(fontSize: 12, color: AppColors.textPrimary),
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                        IconButton(
                          icon: const Icon(Icons.close, size: 16),
                          onPressed: () {
                            // Remove attachment - would need state management for this
                          },
                        ),
                      ],
                    ),
                  ),
                ],
              ],
            ),
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(dialogContext),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () async {
              if (formKey.currentState!.validate()) {
                Navigator.pop(dialogContext);
                // Show loading indicator
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(content: Text('Creating post...'), backgroundColor: AppColors.info),
                );
                
                // Simulate post creation delay
                await Future.delayed(const Duration(seconds: 1));
                
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(content: Text('Post created successfully!'), backgroundColor: AppColors.accent),
                );
              }
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: AppColors.primary,
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
            ),
            child: const Text('Post', style: TextStyle(color: Colors.white)),
          ),
        ],
      ),
    );
  }

  Future<void> _pickFile() async {
    // This would use file_picker to select a file
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Select a file to attach...'), backgroundColor: AppColors.info),
    );
    // In a real implementation:
    // FilePickerResult? result = await FilePicker.platform.pickFiles();
    // if (result != null) {
    //   _showCreatePostDialog(attachmentName: result.files.single.name);
    // }
  }

  Future<void> _pickImage() async {
    // This would use image_picker to select an image
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Select an image to share...'), backgroundColor: AppColors.info),
    );
    // In a real implementation:
    // final ImagePicker picker = ImagePicker();
    // final XFile? image = await picker.pickImage(source: ImageSource.gallery);
    // if (image != null) {
    //   _showCreatePostDialog(attachmentName: image.name);
    // }
  }

  Future<void> _createEvent() async {
    final titleController = TextEditingController();
    final descController = TextEditingController();
    DateTime selectedDate = DateTime.now();
    TimeOfDay selectedTime = TimeOfDay.now();

    showDialog(
      context: context,
      builder: (dialogContext) => StatefulBuilder(
        builder: (builderContext, setDialogState) => AlertDialog(
          title: const Text('Create Event', style: TextStyle(fontWeight: FontWeight.w700)),
          content: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                TextField(
                  controller: titleController,
                  decoration: const InputDecoration(
                    labelText: 'Event Title *',
                    hintText: 'e.g., Study Session',
                    border: OutlineInputBorder(),
                  ),
                ),
                const SizedBox(height: 16),
                TextField(
                  controller: descController,
                  decoration: const InputDecoration(
                    labelText: 'Description',
                    hintText: 'What is this event about?',
                    border: OutlineInputBorder(),
                  ),
                  maxLines: 3,
                ),
                const SizedBox(height: 16),
                ListTile(
                  leading: const Icon(Icons.calendar_today),
                  title: const Text('Date'),
                  subtitle: Text('${selectedDate.day}/${selectedDate.month}/${selectedDate.year}'),
                  onTap: () async {
                    final picked = await showDatePicker(
                      context: dialogContext,
                      initialDate: selectedDate,
                      firstDate: DateTime.now(),
                      lastDate: DateTime.now().add(const Duration(days: 365)),
                    );
                    if (picked != null) {
                      setDialogState(() => selectedDate = picked);
                    }
                  },
                ),
                ListTile(
                  leading: const Icon(Icons.access_time),
                  title: const Text('Time'),
                  subtitle: Text(selectedTime.format(builderContext)),
                  onTap: () async {
                    final picked = await showTimePicker(
                      context: dialogContext,
                      initialTime: selectedTime,
                    );
                    if (picked != null) {
                      setDialogState(() => selectedTime = picked);
                    }
                  },
                ),
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(dialogContext),
              child: const Text('Cancel'),
            ),
            ElevatedButton(
              onPressed: () {
                if (titleController.text.trim().isNotEmpty) {
                  Navigator.pop(dialogContext);
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Event created successfully!'),
                      backgroundColor: AppColors.accent,
                    ),
                  );
                }
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: AppColors.primary,
                padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
              ),
              child: const Text('Create Event', style: TextStyle(color: Colors.white)),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.backgroundWhite,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppColors.borderGray),
      ),
      child: Column(
        children: [
          Row(
            children: [
              const CircleAvatar(radius: 18, backgroundColor: AppColors.primary,
                child: Text('A', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700))),
              const SizedBox(width: 12),
              Expanded(
                child: GestureDetector(
                  onTap: () => _showCreatePostDialog(),
                  child: Container(
                    height: 40,
                    padding: const EdgeInsets.symmetric(horizontal: 14),
                    decoration: BoxDecoration(
                      color: AppColors.backgroundGray,
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: AppColors.borderGray),
                    ),
                    alignment: Alignment.centerLeft,
                    child: const Text('Share something with your group...', style: TextStyle(fontSize: 13, color: AppColors.textTertiary)),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              IconButton(
                icon: const Icon(Icons.attach_file, size: 16, color: AppColors.textSecondary),
                onPressed: _pickFile,
                tooltip: 'Attach File',
              ),
              const SizedBox(width: 4),
              Text('File', style: TextStyle(fontSize: 12, color: AppColors.textSecondary)),
              const SizedBox(width: 12),
              IconButton(
                icon: const Icon(Icons.image_outlined, size: 16, color: AppColors.textSecondary),
                onPressed: _pickImage,
                tooltip: 'Share Image',
              ),
              const SizedBox(width: 4),
              Text('Image', style: TextStyle(fontSize: 12, color: AppColors.textSecondary)),
              const SizedBox(width: 12),
              IconButton(
                icon: const Icon(Icons.calendar_today_outlined, size: 16, color: AppColors.textSecondary),
                onPressed: _createEvent,
                tooltip: 'Create Event',
              ),
              const SizedBox(width: 4),
              Text('Event', style: TextStyle(fontSize: 12, color: AppColors.textSecondary)),
              const Spacer(),
              ElevatedButton(
                onPressed: () => _showCreatePostDialog(),
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primary,
                  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 8),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(6)),
                ),
                child: const Text('Post', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600, fontSize: 13)),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _ComposerAction extends StatelessWidget {
  final IconData icon;
  final String label;
  const _ComposerAction({required this.icon, required this.label});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Icon(icon, size: 16, color: AppColors.textSecondary),
        const SizedBox(width: 4),
        Text(label, style: const TextStyle(fontSize: 12, color: AppColors.textSecondary)),
      ],
    );
  }
}

class _FilterTabs extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: ['All Posts', 'Questions', 'Resources', 'Pinned'].map((t) {
        final isActive = t == 'All Posts';
        return Container(
          margin: const EdgeInsets.only(right: 8),
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
          decoration: BoxDecoration(
            color: isActive ? AppColors.textPrimary : Colors.transparent,
            borderRadius: BorderRadius.circular(20),
            border: isActive ? null : Border.all(color: AppColors.borderGray),
          ),
          child: Text(t, style: TextStyle(
            fontSize: 12, fontWeight: FontWeight.w600,
            color: isActive ? Colors.white : AppColors.textSecondary,
          )),
        );
      }).toList(),
    );
  }
}

class _PostCard extends StatelessWidget {
  final String author, time, group, title, content, fileName, fileSize;
  final bool hasFile;
  final int likes, comments;

  const _PostCard({
    required this.author, required this.time, required this.group,
    required this.title, required this.content, required this.hasFile,
    required this.fileName, required this.fileSize,
    required this.likes, required this.comments,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.backgroundWhite,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppColors.borderGray),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              CircleAvatar(
                radius: 18, backgroundColor: AppColors.primary.withOpacity(0.15),
                child: Text(author[0], style: const TextStyle(color: AppColors.primary, fontWeight: FontWeight.w700)),
              ),
              const SizedBox(width: 10),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(author, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppColors.textPrimary)),
                  Text('$time • $group', style: const TextStyle(fontSize: 11, color: AppColors.textTertiary)),
                ],
              ),
              const Spacer(),
              const Icon(Icons.more_horiz, color: AppColors.textTertiary),
            ],
          ),
          const SizedBox(height: 12),
          Text(title, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppColors.textPrimary)),
          const SizedBox(height: 6),
          Text(content, style: const TextStyle(fontSize: 13, color: AppColors.textSecondary, height: 1.5)),
          if (hasFile) ...[
            const SizedBox(height: 12),
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: AppColors.backgroundGray,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: AppColors.borderGray),
              ),
              child: Row(
                children: [
                  const Icon(Icons.picture_as_pdf, color: Color(0xFFEF4444), size: 20),
                  const SizedBox(width: 8),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(fileName, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: AppColors.textPrimary)),
                      Text(fileSize, style: const TextStyle(fontSize: 11, color: AppColors.textTertiary)),
                    ],
                  ),
                  const Spacer(),
                  const Icon(Icons.download_outlined, size: 16, color: AppColors.textTertiary),
                ],
              ),
            ),
          ],
          const SizedBox(height: 12),
          Row(
            children: [
              _EngageBtn(icon: Icons.favorite_border, label: '$likes', color: AppColors.textSecondary),
              const SizedBox(width: 16),
              _EngageBtn(icon: Icons.chat_bubble_outline, label: '$comments', color: AppColors.textSecondary),
              const SizedBox(width: 16),
              _EngageBtn(icon: Icons.share_outlined, label: 'Share', color: AppColors.textSecondary),
            ],
          ),
        ],
      ),
    );
  }
}

class _EngageBtn extends StatelessWidget {
  final IconData icon;
  final String label;
  final Color color;
  const _EngageBtn({required this.icon, required this.label, required this.color});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Icon(icon, size: 16, color: color),
        const SizedBox(width: 4),
        Text(label, style: TextStyle(fontSize: 12, color: color)),
      ],
    );
  }
}

class _RightSidebar extends StatelessWidget {
  final String? selectedGroupId;

  const _RightSidebar({required this.selectedGroupId});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 280,
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Quick Actions', style: AppTextStyles.heading4),
          const SizedBox(height: 10),
          _QuickAction(
            icon: Icons.add_circle_outline,
            label: 'Create Group',
            onTap: () {
              showDialog(
                context: context,
                builder: (context) => const CreateGroupDialog(),
              );
            },
          ),
          _QuickAction(
            icon: Icons.search,
            label: 'Find Groups',
            onTap: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Browse all groups feature coming soon')),
              );
            },
          ),
          if (selectedGroupId != null) ...[
            const SizedBox(height: 20),
            Text('Group Actions', style: AppTextStyles.heading4),
            const SizedBox(height: 10),
            _QuickAction(
              icon: Icons.chat,
              label: 'Open Chat',
              onTap: () {
                context.go('/group/$selectedGroupId/manage');
              },
            ),
            _QuickAction(
              icon: Icons.library_books,
              label: 'View Notes',
              onTap: () {
                context.go('/group/$selectedGroupId/notes?name=Group');
              },
            ),
            _QuickAction(
              icon: Icons.people,
              label: 'Manage Members',
              onTap: () {
                context.go('/group/$selectedGroupId/manage');
              },
            ),
          ],
          const SizedBox(height: 20),
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                colors: [AppColors.primary, AppColors.accent],
                begin: Alignment.topLeft, end: Alignment.bottomRight,
              ),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Row(
                  children: [
                    Icon(Icons.star, color: Colors.amber, size: 16),
                    SizedBox(width: 6),
                    Text('Upgrade to Pro', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13)),
                  ],
                ),
                const SizedBox(height: 6),
                const Text('Unlimited groups, HD video calls, and more.', style: TextStyle(color: Colors.white70, fontSize: 11, height: 1.4)),
                const SizedBox(height: 10),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: () {},
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(vertical: 8),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(6)),
                    ),
                    child: const Text('Get Pro', style: TextStyle(color: AppColors.primary, fontWeight: FontWeight.w700, fontSize: 12)),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _QuickAction extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onTap;

  const _QuickAction({required this.icon, required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Icon(icon, size: 18, color: AppColors.textSecondary),
      title: Text(label, style: const TextStyle(fontSize: 13, color: AppColors.textPrimary)),
      onTap: onTap,
      contentPadding: EdgeInsets.zero,
      dense: true,
    );
  }
}