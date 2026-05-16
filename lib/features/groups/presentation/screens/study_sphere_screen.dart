import 'package:flutter/material.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/constants/app_text_styles.dart';

class StudySphereScreen extends StatelessWidget {
  const StudySphereScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.backgroundGray,
      body: Column(
        children: [
          _Header(),
          Expanded(
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _LeftSidebar(),
                Expanded(child: _FeedColumn()),
                _RightSidebar(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _Header extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 64,
      padding: const EdgeInsets.symmetric(horizontal: 24),
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
  @override
  Widget build(BuildContext context) {
    final groups = [
      (Colors.purple, 'B', 'Biology 101', '18 members', false),
      (Colors.orange, 'C', 'Calculus II', '24 members', true),
      (Colors.blue, 'W', 'World History', '31 members', false),
    ];

    return Container(
      width: 260,
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
          ...groups.map((g) => _GroupTile(color: g.$1, initial: g.$2, name: g.$3, members: g.$4, isSelected: g.$5)),
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
  final Color color;
  final String initial, name, members;
  final bool isSelected;
  const _GroupTile({required this.color, required this.initial, required this.name, required this.members, required this.isSelected});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Switched to $name group')),
        );
      },
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
              child: Text(initial, style: TextStyle(color: color, fontWeight: FontWeight.w700, fontSize: 13)),
            ),
            const SizedBox(width: 10),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, style: TextStyle(
                  fontSize: 13, fontWeight: isSelected ? FontWeight.w600 : FontWeight.w400,
                  color: isSelected ? AppColors.primary : AppColors.textPrimary,
                )),
                Text(members, style: const TextStyle(fontSize: 11, color: AppColors.textTertiary)),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _FeedColumn extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _PostComposer(),
          const SizedBox(height: 16),
          _FilterTabs(),
          const SizedBox(height: 16),
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
      ),
    );
  }
}

class _PostComposer extends StatelessWidget {
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
                  onTap: () {
                    showDialog(
                      context: context,
                      builder: (context) => AlertDialog(
                        title: const Text('Create Post'),
                        content: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            const TextField(
                              decoration: InputDecoration(
                                labelText: 'What\'s on your mind?',
                                border: OutlineInputBorder(),
                              ),
                              maxLines: 3,
                            ),
                          ],
                        ),
                        actions: [
                          TextButton(
                            onPressed: () => Navigator.pop(context),
                            child: const Text('Cancel'),
                          ),
                          ElevatedButton(
                            onPressed: () {
                              Navigator.pop(context);
                              ScaffoldMessenger.of(context).showSnackBar(
                                const SnackBar(content: Text('Post created successfully!')),
                              );
                            },
                            child: const Text('Post'),
                          ),
                        ],
                      ),
                    );
                  },
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
              _ComposerAction(icon: Icons.attach_file, label: 'File'),
              const SizedBox(width: 8),
              _ComposerAction(icon: Icons.image_outlined, label: 'Image'),
              const SizedBox(width: 8),
              _ComposerAction(icon: Icons.calendar_today_outlined, label: 'Event'),
              const Spacer(),
              ElevatedButton(
                onPressed: () {},
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
  @override
  Widget build(BuildContext context) {
    final members = [
      ('Dr. Emily Chen', true),
      ('Marcus Johnson', false),
      ('Sarah Williams', false),
      ('James Park', false),
    ];

    return Container(
      width: 280,
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Members (12)', style: AppTextStyles.heading4),
          const SizedBox(height: 10),
          ...members.map((m) => Padding(
            padding: const EdgeInsets.only(bottom: 8),
            child: Row(
              children: [
                CircleAvatar(
                  radius: 16, backgroundColor: AppColors.primary.withOpacity(0.15),
                  child: Text(m.$1[0], style: const TextStyle(color: AppColors.primary, fontWeight: FontWeight.w700, fontSize: 12)),
                ),
                const SizedBox(width: 8),
                Expanded(child: Text(m.$1, style: const TextStyle(fontSize: 12, color: AppColors.textPrimary))),
                if (m.$2)
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                    decoration: BoxDecoration(color: AppColors.primary.withOpacity(0.1), borderRadius: BorderRadius.circular(4)),
                    child: const Text('ADMIN', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: AppColors.primary)),
                  ),
              ],
            ),
          )),
          const SizedBox(height: 20),
          Text('Shared Files', style: AppTextStyles.heading4),
          const SizedBox(height: 10),
          _FileItem(icon: Icons.picture_as_pdf, color: const Color(0xFFEF4444), name: 'Midterm_Guide.pdf', size: '3.2 MB'),
          const SizedBox(height: 6),
          _FileItem(icon: Icons.description, color: const Color(0xFF3B82F6), name: 'Formula_Sheet.docx', size: '0.8 MB'),
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

class _FileItem extends StatelessWidget {
  final IconData icon;
  final Color color;
  final String name, size;
  const _FileItem({required this.icon, required this.color, required this.name, required this.size});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Icon(icon, color: color, size: 18),
        const SizedBox(width: 8),
        Expanded(child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(name, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w500, color: AppColors.textPrimary), overflow: TextOverflow.ellipsis),
            Text(size, style: const TextStyle(fontSize: 11, color: AppColors.textTertiary)),
          ],
        )),
      ],
    );
  }
}
