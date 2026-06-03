import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:intl/intl.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/constants/app_text_styles.dart';
import '../../../../core/widgets/app_button.dart';
import '../../../../core/utils/responsive_helper.dart';
import '../../../auth/presentation/providers/auth_provider.dart';
import '../../../forum/presentation/screens/question_detail_screen.dart';
import '../providers/study_hub_provider.dart';

class StudyHubScreen extends ConsumerWidget {
  const StudyHubScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final isMobile = ResponsiveHelper.isMobile(context);
    final user = ref.watch(currentUserProvider).value;
    final name = user?.displayName ?? 'Alex';
    final hour = DateTime.now().hour;
    final greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

    return Scaffold(
      backgroundColor: AppColors.backgroundGray,
      body: isMobile
          ? _MobileLayout(
              greeting: '$greeting, $name! 👋',
              ref: ref,
            )
          : _DesktopLayout(
              greeting: '$greeting, $name! 👋',
              ref: ref,
            ),
      floatingActionButton: isMobile
          ? null
          : FloatingActionButton.extended(
              onPressed: () {
                showDialog(
                  context: context,
                  builder: (context) => AlertDialog(
                    title: const Text('Create Post'),
                    content: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const TextField(
                          decoration: InputDecoration(
                            labelText: 'Post Title',
                            border: OutlineInputBorder(),
                          ),
                        ),
                        const SizedBox(height: 16),
                        const TextField(
                          decoration: InputDecoration(
                            labelText: 'Post Content',
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
              backgroundColor: AppColors.primary,
              icon: const Icon(Icons.add, color: Colors.white),
              label: const Text('Create Post',
                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600)),
            ),
    );
  }
}

// ── Mobile Layout ─────────────────────────────────────────────────────────────
class _MobileLayout extends ConsumerWidget {
  final String greeting;
  final WidgetRef ref;
  const _MobileLayout({required this.greeting, required this.ref});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Column(
      children: [
        _MobileTopBar(greeting: greeting),
        Expanded(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _MobileFeaturedSection(ref: ref),
                const SizedBox(height: 16),
                _MobileTabRow(),
                const SizedBox(height: 16),
                const Text('Recent Questions', style: AppTextStyles.heading3),
                const SizedBox(height: 12),
                _MobileQuestionsList(ref: ref),
                const SizedBox(height: 16),
                _MobileActivitySection(),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

class _MobileTopBar extends StatelessWidget {
  final String greeting;
  const _MobileTopBar({required this.greeting});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.backgroundWhite,
        border: Border(bottom: BorderSide(color: AppColors.borderGray)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(greeting, style: AppTextStyles.heading3),
          const SizedBox(height: 4),
          Text('You have 3 study sessions today',
              style: const TextStyle(fontSize: 13, color: AppColors.textSecondary)),
        ],
      ),
    );
  }
}

class _MobileFeaturedSection extends ConsumerWidget {
  final WidgetRef ref;
  const _MobileFeaturedSection({required this.ref});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final featuredAsync = ref.watch(featuredGroupProvider);

    return featuredAsync.when(
      data: (group) => group != null
          ? _MobileFeaturedCard(group: group)
          : const _MobileFeaturedCard(group: {'name': 'Calculus II Midterm Prep', 'memberIds': [1,2,3], 'description': 'Intensive prep session'}),
      loading: () => const _MobileFeaturedCard(group: {'name': 'Loading...', 'memberIds': [], 'description': ''}),
      error: (_, __) => const _MobileFeaturedCard(group: {'name': 'Calculus II Midterm Prep', 'memberIds': [1,2,3], 'description': 'Intensive prep session'}),
    );
  }
}

class _MobileFeaturedCard extends StatelessWidget {
  final Map<String, dynamic> group;
  const _MobileFeaturedCard({required this.group});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: AppColors.backgroundWhite,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppColors.borderGray),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            height: 120,
            decoration: const BoxDecoration(
              color: Color(0xFFFEF3C7),
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(12), topRight: Radius.circular(12),
              ),
            ),
            child: const Center(child: Text('📚', style: TextStyle(fontSize: 48))),
          ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFEE2E2),
                    borderRadius: BorderRadius.circular(4),
                  ),
                  child: const Text('HOT 🔥', style: TextStyle(
                    fontSize: 11, fontWeight: FontWeight.w700, color: Color(0xFFDC2626),
                  )),
                ),
                const SizedBox(height: 8),
                Text(group['name'] ?? 'Study Group', style: const TextStyle(
                  fontSize: 16, fontWeight: FontWeight.w700, color: AppColors.textPrimary,
                )),
                const SizedBox(height: 4),
                Text(
                  '${(group['memberIds'] as List?)?.length ?? 0} members',
                  style: const TextStyle(fontSize: 12, color: AppColors.textSecondary),
                ),
                const SizedBox(height: 8),
                Text(
                  group['description'] ?? 'Join this study group to collaborate.',
                  style: const TextStyle(fontSize: 12, color: AppColors.textSecondary),
                  maxLines: 2, overflow: TextOverflow.ellipsis,
                ),
                const SizedBox(height: 12),
                AppButton(label: 'Join Now', isSmall: true, onPressed: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(content: Text('Joined ${group['name'] ?? 'study group'}!')),
                  );
                }),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _MobileTabRow extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        _MobileTab(label: 'All', isActive: false, onTap: () {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Showing all content')),
          );
        }),
        const SizedBox(width: 8),
        _MobileTab(label: 'Groups', isActive: true, onTap: () => context.go('/groups')),
        const SizedBox(width: 8),
        _MobileTab(label: 'Notes', isActive: false, onTap: () => context.go('/marketplace')),
        const SizedBox(width: 8),
        _MobileTab(label: 'Forum', isActive: false, onTap: () => context.go('/forum')),
        const SizedBox(width: 8),
        _MobileTab(label: 'Tutors', isActive: false, onTap: () => context.go('/tutors')),
      ],
    );
  }
}

class _MobileTab extends StatelessWidget {
  final String label;
  final bool isActive;
  final VoidCallback? onTap;
  const _MobileTab({required this.label, required this.isActive, this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
        decoration: BoxDecoration(
          color: isActive ? AppColors.primary : Colors.transparent,
          borderRadius: BorderRadius.circular(20),
          border: isActive ? null : Border.all(color: AppColors.borderGray),
        ),
        child: Text(label, style: TextStyle(
          fontSize: 12, fontWeight: FontWeight.w600,
          color: isActive ? Colors.white : AppColors.textSecondary,
        )),
      ),
    );
  }
}

class _MobileQuestionsList extends ConsumerWidget {
  final WidgetRef ref;
  const _MobileQuestionsList({required this.ref});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final questionsAsync = ref.watch(dashboardQuestionsProvider);

    return questionsAsync.when(
      data: (questions) => questions.isEmpty
          ? _staticMobileQuestions()
          : Column(
              children: questions
                  .map((q) => Padding(
                        padding: const EdgeInsets.only(bottom: 12),
                        child: _QuestionCard(
                          votes: (q['votes'] ?? 0) as int,
                          title: q['title'] ?? '',
                          preview: q['preview'] ?? q['content'] ?? '',
                          replies: (q['answers'] ?? 0) as int,
                          views: (q['views'] ?? 0) as int,
                          author: q['authorName'] ?? 'Anonymous',
                          time: _timeAgo(q['createdAt']),
                          tags: List<String>.from(q['tags'] ?? []),
                        ),
                      ))
                  .toList(),
            ),
      loading: () => _staticMobileQuestions(),
      error: (_, __) => _staticMobileQuestions(),
    );
  }

  Widget _staticMobileQuestions() {
    return Column(
      children: const [
        _QuestionCard(
          votes: 42,
          title: 'How do I solve differential equations?',
          preview: 'I\'m struggling with the inverse Laplace transform...',
          replies: 8, views: 234, author: 'Sarah M.', time: '2h ago',
          tags: ['calculus', 'math'],
        ),
        SizedBox(height: 12),
        _QuestionCard(
          votes: 28,
          title: 'Best resources for learning React?',
          preview: 'Looking for up-to-date tutorials...',
          replies: 15, views: 512, author: 'James K.', time: '4h ago',
          tags: ['reactjs', 'javascript'],
        ),
        SizedBox(height: 12),
        _QuestionCard(
          votes: 19,
          title: 'Understanding Big O notation?',
          preview: 'Can someone explain O(n log n) vs O(n²)?',
          replies: 6, views: 189, author: 'Priya S.', time: '6h ago',
          tags: ['algorithms', 'cs'],
        ),
      ],
    );
  }

  String _timeAgo(dynamic createdAt) {
    if (createdAt == null) return '';
    try {
      final dt = createdAt is String
          ? DateTime.parse(createdAt)
          : (createdAt as dynamic).toDate();
      final diff = DateTime.now().difference(dt);
      if (diff.inMinutes < 60) return '${diff.inMinutes}m ago';
      if (diff.inHours < 24) return '${diff.inHours}h ago';
      return '${diff.inDays}d ago';
    } catch (_) {
      return '';
    }
  }
}

class _MobileActivitySection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text('Live Activity', style: AppTextStyles.heading4),
        const SizedBox(height: 12),
        const _ActivityItem(emoji: '📝', text: 'Sarah posted new notes', time: '2m ago'),
        const _ActivityItem(emoji: '🎯', text: 'New quiz in Calculus group', time: '15m ago'),
        const _ActivityItem(emoji: '💬', text: 'James answered your question', time: '1h ago'),
        const _ActivityItem(emoji: '🏆', text: 'You earned a badge!', time: '2h ago'),
      ],
    );
  }
}

// ── Desktop Layout ──────────────────────────────────────────────────────────────
class _DesktopLayout extends StatelessWidget {
  final String greeting;
  final WidgetRef ref;
  const _DesktopLayout({required this.greeting, required this.ref});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        _LeftSidebar(ref: ref),
        Expanded(
          child: Column(
            children: [
              _TopBar(greeting: greeting),
              Expanded(
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(child: _MainContent()),
                    _RightSidebar(),
                  ],
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

// ── Left Sidebar ──────────────────────────────────────────────────────────────
class _LeftSidebar extends StatelessWidget {
  final WidgetRef ref;
  const _LeftSidebar({required this.ref});

  @override
  Widget build(BuildContext context) {
    final navItems = [
      (Icons.dashboard_outlined, 'Dashboard', true, '/dashboard'),
      (Icons.class_outlined, 'Classes', false, '/dashboard'),
      (Icons.group_outlined, 'Study Groups', false, '/groups'),
      (Icons.calendar_today_outlined, 'Calendar', false, '/dashboard'),
      (Icons.note_outlined, 'My Notes', false, '/marketplace'),
    ];

    return Container(
      width: 240,
      color: AppColors.backgroundWhite,
      child: Column(
        children: [
          const SizedBox(height: 20),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Row(
              children: [
                Container(
                  width: 36, height: 36,
                  decoration: BoxDecoration(
                    color: AppColors.primary,
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: const Icon(Icons.school, color: Colors.white, size: 20),
                ),
                const SizedBox(width: 10),
                const Text('StudyHub', style: TextStyle(
                  fontSize: 18, fontWeight: FontWeight.w800, color: AppColors.textPrimary,
                )),
              ],
            ),
          ),
          const SizedBox(height: 32),
          _NavItem(icon: Icons.home_outlined, label: 'Dashboard', isActive: true, route: '/dashboard'),
          _NavItem(icon: Icons.class_outlined, label: 'Classes', isActive: false, route: '/groups'),
          _NavItem(icon: Icons.groups_outlined, label: 'Study Groups', isActive: false, route: '/groups'),
          _NavItem(icon: Icons.calendar_month_outlined, label: 'Calendar', isActive: false, route: '/forum'),
          _NavItem(icon: Icons.library_books_outlined, label: 'My Notes', isActive: false, route: '/marketplace'),
          const Spacer(),
          _UserCard(ref: ref),
          const SizedBox(height: 16),
        ],
      ),
    );
  }
}

class _NavItem extends StatelessWidget {
  final IconData icon;
  final String label;
  final bool isActive;
  final String route;
  const _NavItem({required this.icon, required this.label, required this.isActive, required this.route});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 12, vertical: 2),
      decoration: BoxDecoration(
        color: isActive ? AppColors.primary.withOpacity(0.1) : Colors.transparent,
        borderRadius: BorderRadius.circular(8),
      ),
      child: ListTile(
        dense: true,
        leading: Icon(icon, size: 20,
            color: isActive ? AppColors.primary : AppColors.textSecondary),
        title: Text(label, style: TextStyle(
          fontSize: 14,
          fontWeight: isActive ? FontWeight.w600 : FontWeight.w400,
          color: isActive ? AppColors.primary : AppColors.textSecondary,
        )),
        onTap: () => context.go(route),
      ),
    );
  }
}

class _UserCard extends StatelessWidget {
  final WidgetRef ref;
  const _UserCard({required this.ref});

  @override
  Widget build(BuildContext context) {
    final user = ref.watch(currentUserProvider).value;
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 12),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: AppColors.backgroundGray,
        borderRadius: BorderRadius.circular(10),
      ),
      child: Row(
        children: [
          CircleAvatar(
            radius: 18,
            backgroundColor: AppColors.primary,
            backgroundImage:
                user?.photoURL != null && user!.photoURL!.isNotEmpty
                    ? NetworkImage(user.photoURL!)
                    : null,
            child: (user?.photoURL == null || user!.photoURL!.isEmpty)
                ? Text(
                    (user?.displayName ?? 'A')[0].toUpperCase(),
                    style: const TextStyle(
                        color: Colors.white, fontWeight: FontWeight.w700),
                  )
                : null,
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(user?.displayName ?? 'Alex', style: const TextStyle(
                  fontSize: 13, fontWeight: FontWeight.w600,
                  color: AppColors.textPrimary,
                )),
                const Text('Computer Science',
                    style: TextStyle(fontSize: 11, color: AppColors.textTertiary)),
              ],
            ),
          ),
          IconButton(
            icon: const Icon(Icons.logout, size: 16, color: AppColors.textTertiary),
            onPressed: () => ref.read(authProvider.notifier).signOut(),
          ),
        ],
      ),
    );
  }
}

// ── Top Bar ───────────────────────────────────────────────────────────────────
class _TopBar extends StatelessWidget {
  final String greeting;
  const _TopBar({required this.greeting});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 64,
      padding: const EdgeInsets.symmetric(horizontal: 24),
      decoration: const BoxDecoration(
        color: AppColors.backgroundWhite,
        border: Border(bottom: BorderSide(color: AppColors.borderGray)),
      ),
      child: Row(
        children: [
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(greeting, style: AppTextStyles.heading3),
              const Text('You have 3 study sessions today',
                  style: TextStyle(fontSize: 13, color: AppColors.textSecondary)),
            ],
          ),
          const Spacer(),
          IconButton(
            icon: const Icon(Icons.notifications_outlined, color: AppColors.neutralLight), 
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('No new notifications')),
              );
            }
          ),
          const SizedBox(width: 8),
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
            child: const CircleAvatar(
              radius: 18,
              backgroundColor: AppColors.primary,
              child: Text('A',
                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
            ),
          ),
        ],
      ),
    );
  }
}

// ── Main Content ──────────────────────────────────────────────────────────────
class _MainContent extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final questionsAsync = ref.watch(dashboardQuestionsProvider);
    final featuredAsync = ref.watch(featuredGroupProvider);

    return SingleChildScrollView(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _TabRow(),
          const SizedBox(height: 20),
          // Featured session — live from Firestore or fallback card
          featuredAsync.when(
            data: (group) => group != null
                ? _LiveFeaturedCard(group: group)
                : _FeaturedSessionCard(),
            loading: () => const _FeaturedSessionCard(),
            error: (_, __) => const _FeaturedSessionCard(),
          ),
          const SizedBox(height: 24),
          const Text('Recent Questions', style: AppTextStyles.heading3),
          const SizedBox(height: 12),
          questionsAsync.when(
            data: (questions) => questions.isEmpty
                ? _staticQuestions()
                : Column(
                    children: questions
                        .map((q) => Padding(
                              padding: const EdgeInsets.only(bottom: 12),
                              child: _QuestionCard(
                                votes: (q['votes'] ?? 0) as int,
                                title: q['title'] ?? '',
                                preview: q['preview'] ?? q['content'] ?? '',
                                replies: (q['answers'] ?? 0) as int,
                                views: (q['views'] ?? 0) as int,
                                author: q['authorName'] ?? 'Anonymous',
                                time: _timeAgo(q['createdAt']),
                                tags: List<String>.from(q['tags'] ?? []),
                              ),
                            ))
                        .toList(),
                  ),
            loading: () => _staticQuestions(),
            error: (_, __) => _staticQuestions(),
          ),
        ],
      ),
    );
  }

  Widget _staticQuestions() {
    return Column(
      children: const [
        _QuestionCard(
          votes: 42,
          title: 'How do I solve differential equations using Laplace transforms?',
          preview: 'I\'m struggling with the inverse Laplace transform step...',
          replies: 8, views: 234, author: 'Sarah M.', time: '2h ago',
          tags: ['calculus', 'math'],
        ),
        SizedBox(height: 12),
        _QuestionCard(
          votes: 28,
          title: 'Best resources for learning React hooks in 2024?',
          preview: 'Looking for up-to-date tutorials and documentation...',
          replies: 15, views: 512, author: 'James K.', time: '4h ago',
          tags: ['reactjs', 'javascript'],
        ),
        SizedBox(height: 12),
        _QuestionCard(
          votes: 19,
          title: 'Understanding Big O notation for algorithm analysis',
          preview: 'Can someone explain the difference between O(n log n) and O(n²)?',
          replies: 6, views: 189, author: 'Priya S.', time: '6h ago',
          tags: ['algorithms', 'cs'],
        ),
      ],
    );
  }

  String _timeAgo(dynamic createdAt) {
    if (createdAt == null) return '';
    try {
      final dt = createdAt is String
          ? DateTime.parse(createdAt)
          : (createdAt as dynamic).toDate();
      final diff = DateTime.now().difference(dt);
      if (diff.inMinutes < 60) return '${diff.inMinutes}m ago';
      if (diff.inHours < 24) return '${diff.inHours}h ago';
      return '${diff.inDays}d ago';
    } catch (_) {
      return '';
    }
  }
}

class _TabRow extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        _Tab(label: 'All', isActive: false, onTap: () {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Showing all content')),
          );
        }),
        const SizedBox(width: 8),
        _Tab(label: 'Groups', isActive: true, onTap: () => context.go('/groups')),
        const SizedBox(width: 8),
        _Tab(label: 'Notes', isActive: false, onTap: () => context.go('/marketplace')),
        const SizedBox(width: 8),
        _Tab(label: 'Forum', isActive: false, onTap: () => context.go('/forum')),
        const SizedBox(width: 8),
        _Tab(label: 'Tutors', isActive: false, onTap: () => context.go('/tutors')),
      ],
    );
  }
}

class _Tab extends StatelessWidget {
  final String label;
  final bool isActive;
  final VoidCallback? onTap;
  const _Tab({required this.label, required this.isActive, this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        decoration: BoxDecoration(
          color: isActive ? AppColors.primary : Colors.transparent,
          borderRadius: BorderRadius.circular(20),
          border: isActive ? null : Border.all(color: AppColors.borderGray),
        ),
        child: Text(label, style: TextStyle(
          fontSize: 13, fontWeight: FontWeight.w600,
          color: isActive ? Colors.white : AppColors.textSecondary,
        )),
      ),
    );
  }
}

// Live featured card from Firestore
class _LiveFeaturedCard extends StatelessWidget {
  final Map<String, dynamic> group;
  const _LiveFeaturedCard({required this.group});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: AppColors.backgroundWhite,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppColors.borderGray),
      ),
      child: Row(
        children: [
          Container(
            width: 160, height: 160,
            decoration: const BoxDecoration(
              color: Color(0xFFFEF3C7),
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(12), bottomLeft: Radius.circular(12),
              ),
            ),
            child: const Center(child: Text('📚', style: TextStyle(fontSize: 64))),
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                    decoration: BoxDecoration(
                      color: const Color(0xFFFEE2E2),
                      borderRadius: BorderRadius.circular(4),
                    ),
                    child: const Text('HOT 🔥', style: TextStyle(
                      fontSize: 11, fontWeight: FontWeight.w700, color: Color(0xFFDC2626),
                    )),
                  ),
                  const SizedBox(height: 8),
                  Text(group['name'] ?? 'Study Group', style: const TextStyle(
                    fontSize: 18, fontWeight: FontWeight.w700, color: AppColors.textPrimary,
                  )),
                  const SizedBox(height: 4),
                  Text(
                    '${(group['memberIds'] as List?)?.length ?? 0} members',
                    style: const TextStyle(fontSize: 13, color: AppColors.textSecondary),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    group['description'] ?? 'Join this study group to collaborate.',
                    style: const TextStyle(fontSize: 13, color: AppColors.textSecondary),
                    maxLines: 2, overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(height: 12),
                  AppButton(label: 'Join Now', isSmall: true, onPressed: () {
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(content: Text('Joined ${group['name'] ?? 'study group'}!')),
                    );
                  }),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

// Static fallback featured card
class _FeaturedSessionCard extends StatelessWidget {
  const _FeaturedSessionCard();

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: AppColors.backgroundWhite,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppColors.borderGray),
      ),
      child: Row(
        children: [
          Container(
            width: 160, height: 160,
            decoration: const BoxDecoration(
              color: Color(0xFFFEF3C7),
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(12), bottomLeft: Radius.circular(12),
              ),
            ),
            child: const Center(child: Text('📚', style: TextStyle(fontSize: 64))),
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                    decoration: BoxDecoration(
                      color: const Color(0xFFFEE2E2),
                      borderRadius: BorderRadius.circular(4),
                    ),
                    child: const Text('HOT 🔥', style: TextStyle(
                      fontSize: 11, fontWeight: FontWeight.w700, color: Color(0xFFDC2626),
                    )),
                  ),
                  const SizedBox(height: 8),
                  const Text('Calculus II Midterm Prep Session', style: TextStyle(
                    fontSize: 18, fontWeight: FontWeight.w700, color: AppColors.textPrimary,
                  )),
                  const SizedBox(height: 4),
                  const Text('MATH 201 • 24 members',
                      style: TextStyle(fontSize: 13, color: AppColors.textSecondary)),
                  const SizedBox(height: 8),
                  const Text(
                    'Intensive prep session covering integration techniques, series, and polar coordinates.',
                    style: TextStyle(fontSize: 13, color: AppColors.textSecondary),
                    maxLines: 2, overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(height: 12),
                  Row(
                    children: [
                      AppButton(label: 'Join Now', isSmall: true, onPressed: () {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Joined study group!')),
                      );
                    }),
                      const SizedBox(width: 12),
                      const Text('+9 members',
                          style: TextStyle(fontSize: 12, color: AppColors.textTertiary)),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _QuestionCard extends StatelessWidget {
  final int votes;
  final String title, preview, author, time;
  final int replies, views;
  final List<String> tags;

  const _QuestionCard({
    required this.votes, required this.title, required this.preview,
    required this.replies, required this.views, required this.author,
    required this.time, required this.tags,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => QuestionDetailScreen(
            questionId: '',
            questionTitle: title,
            questionContent: preview,
            author: author,
            time: time,
            tags: tags,
          ),
        ),
      ),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: AppColors.backgroundWhite,
          borderRadius: BorderRadius.circular(10),
          border: Border.all(color: AppColors.borderGray),
        ),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Column(
              children: [
                Text('$votes', style: const TextStyle(
                  fontSize: 22, fontWeight: FontWeight.w700, color: AppColors.primary,
                )),
                const Text('votes',
                    style: TextStyle(fontSize: 11, color: AppColors.textTertiary)),
              ],
            ),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(title, style: const TextStyle(
                    fontSize: 15, fontWeight: FontWeight.w600, color: AppColors.textPrimary,
                  )),
                  const SizedBox(height: 4),
                  Text(preview,
                      style: const TextStyle(fontSize: 13, color: AppColors.textSecondary),
                      maxLines: 2, overflow: TextOverflow.ellipsis),
                  const SizedBox(height: 8),
                  Wrap(
                    spacing: 6,
                    children: tags
                        .map((t) => GestureDetector(
                              onTap: () => context.go('/forum'),
                              child: Container(
                                padding: const EdgeInsets.symmetric(
                                    horizontal: 8, vertical: 2),
                                decoration: BoxDecoration(
                                  color: AppColors.tagPrimary,
                                  borderRadius: BorderRadius.circular(4),
                                ),
                                child: Text('#$t', style: const TextStyle(
                                  fontSize: 11, fontWeight: FontWeight.w600,
                                  color: AppColors.tagPrimaryDark,
                                )),
                              ),
                            ))
                        .toList(),
                  ),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      const Icon(Icons.chat_bubble_outline,
                          size: 13, color: AppColors.textTertiary),
                      const SizedBox(width: 4),
                      Text('$replies',
                          style: const TextStyle(
                              fontSize: 12, color: AppColors.textTertiary)),
                      const SizedBox(width: 12),
                      const Icon(Icons.visibility_outlined,
                          size: 13, color: AppColors.textTertiary),
                      const SizedBox(width: 4),
                      Text('$views',
                          style: const TextStyle(
                              fontSize: 12, color: AppColors.textTertiary)),
                      const Spacer(),
                      Text('$author • $time',
                          style: const TextStyle(
                              fontSize: 12, color: AppColors.textTertiary)),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// ── Right Sidebar ─────────────────────────────────────────────────────────────
class _RightSidebar extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final notesAsync = ref.watch(dashboardNotesProvider);

    return Container(
      width: 300,
      padding: const EdgeInsets.all(16),
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Recent Notes', style: AppTextStyles.heading4),
            const SizedBox(height: 12),
            notesAsync.when(
              data: (notes) => notes.isEmpty
                  ? _staticNotes()
                  : Column(
                      children: notes
                          .map((n) => Padding(
                                padding: const EdgeInsets.only(bottom: 8),
                                child: _NoteItem(
                                  icon: Icons.picture_as_pdf,
                                  color: AppColors.error,
                                  name: n['title'] ?? 'Note',
                                  size: n['fileSize'] ?? '',
                                ),
                              ))
                          .toList(),
                    ),
              loading: () => _staticNotes(),
              error: (_, __) => _staticNotes(),
            ),
            const SizedBox(height: 20),
            const Text('Live Activity', style: AppTextStyles.heading4),
            const SizedBox(height: 12),
            const _ActivityItem(emoji: '📝', text: 'Sarah posted new notes', time: '2m ago'),
            const _ActivityItem(emoji: '🎯', text: 'New quiz in Calculus group', time: '15m ago'),
            const _ActivityItem(emoji: '💬', text: 'James answered your question', time: '1h ago'),
            const _ActivityItem(emoji: '🏆', text: 'You earned a badge!', time: '2h ago'),
            const SizedBox(height: 20),
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [AppColors.primary, AppColors.accent],
                  begin: Alignment.topLeft, end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.circular(12),
              ),
              child: const Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('💡 Study Tip', style: TextStyle(
                    color: Colors.white, fontWeight: FontWeight.w700, fontSize: 14,
                  )),
                  SizedBox(height: 6),
                  Text(
                    'Use the Pomodoro technique: 25 min focused study, 5 min break. Repeat 4 times then take a longer break.',
                    style: TextStyle(color: Colors.white70, fontSize: 12, height: 1.5),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _staticNotes() {
    return Column(
      children: const [
        _NoteItem(icon: Icons.picture_as_pdf, color: Color(0xFFEF4444), name: 'Calculus_Notes.pdf', size: '2.4 MB'),
        SizedBox(height: 8),
        _NoteItem(icon: Icons.description, color: Color(0xFF3B82F6), name: 'History_Essay.docx', size: '1.1 MB'),
        SizedBox(height: 8),
        _NoteItem(icon: Icons.slideshow, color: Color(0xFFF97316), name: 'Physics_Slides.pptx', size: '5.8 MB'),
      ],
    );
  }
}

class _NoteItem extends StatelessWidget {
  final IconData icon;
  final Color color;
  final String name, size;
  const _NoteItem({required this.icon, required this.color, required this.name, required this.size});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => context.go('/marketplace'),
      child: Container(
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: AppColors.backgroundWhite,
          borderRadius: BorderRadius.circular(8),
          border: Border.all(color: AppColors.borderGray),
        ),
        child: Row(
          children: [
            Icon(icon, color: color, size: 20),
            const SizedBox(width: 10),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(name, style: const TextStyle(
                    fontSize: 12, fontWeight: FontWeight.w600, color: AppColors.textPrimary,
                  ), overflow: TextOverflow.ellipsis),
                  Text(size, style: const TextStyle(fontSize: 11, color: AppColors.textTertiary)),
                ],
              ),
            ),
            GestureDetector(
              onTap: () {
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(content: Text('Downloading file...')),
                );
              },
              child: const Icon(Icons.download_outlined, size: 16, color: AppColors.textTertiary),
            ),
          ],
        ),
      ),
    );
  }
}

class _ActivityItem extends StatelessWidget {
  final String emoji, text, time;
  const _ActivityItem({required this.emoji, required this.text, required this.time});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Row(
        children: [
          Text(emoji, style: const TextStyle(fontSize: 16)),
          const SizedBox(width: 8),
          Expanded(child: Text(text,
              style: const TextStyle(fontSize: 12, color: AppColors.textSecondary))),
          Text(time, style: const TextStyle(fontSize: 11, color: AppColors.textTertiary)),
        ],
      ),
    );
  }
}
