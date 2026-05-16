import 'package:flutter/material.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/constants/app_text_styles.dart';

class _TagData {
  final String name;
  final Color bg, fg;
  const _TagData(this.name, this.bg, this.fg);
}

class _ContributorData {
  final String rank, name, points;
  const _ContributorData(this.rank, this.name, this.points);
}

class DevForumScreen extends StatelessWidget {
  const DevForumScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.backgroundGray,
      body: Row(
        children: [
          const _LeftSidebar(),
          Expanded(child: _MainContent()),
          const _RightSidebar(),
        ],
      ),
    );
  }
}

class _LeftSidebar extends StatelessWidget {
  const _LeftSidebar();
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 240,
      color: AppColors.backgroundWhite,
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 8),
          Row(
            children: [
              Container(
                width: 32, height: 32,
                decoration: BoxDecoration(color: AppColors.textPrimary, borderRadius: BorderRadius.circular(8)),
                child: const Icon(Icons.code, color: Colors.white, size: 18),
              ),
              const SizedBox(width: 8),
              const Text('DevForum', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: AppColors.textPrimary)),
            ],
          ),
          const SizedBox(height: 24),
          const _SideNavItem(icon: Icons.help_outline, label: 'All Questions', isActive: true),
          const _SideNavItem(icon: Icons.label_outline, label: 'Tags', isActive: false),
          const _SideNavItem(icon: Icons.people_outline, label: 'Users', isActive: false),
          const _SideNavItem(icon: Icons.bookmark_outline, label: 'Bookmarks', isActive: false),
          const SizedBox(height: 24),
          const Text('FILTER BY STATUS', style: AppTextStyles.overline),
          const SizedBox(height: 10),
          const _CheckItem(label: 'Unanswered'),
          const _CheckItem(label: 'Solved'),
          const _CheckItem(label: 'Trending'),
          const SizedBox(height: 24),
          const Text('COMMUNITY STATS', style: AppTextStyles.overline),
          const SizedBox(height: 10),
          const _StatRow(label: 'Questions', value: '12,847'),
          const _StatRow(label: 'Members', value: '4,231'),
          const _StatRow(label: 'Solved', value: '9,102'),
        ],
      ),
    );
  }
}

class _SideNavItem extends StatelessWidget {
  final IconData icon;
  final String label;
  final bool isActive;
  const _SideNavItem({required this.icon, required this.label, required this.isActive});
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 2),
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
      decoration: BoxDecoration(
        color: isActive ? AppColors.primary.withOpacity(0.1) : Colors.transparent,
        borderRadius: BorderRadius.circular(8),
      ),
      child: Row(
        children: [
          Icon(icon, size: 18, color: isActive ? AppColors.primary : AppColors.textSecondary),
          const SizedBox(width: 10),
          Text(label, style: TextStyle(fontSize: 13, fontWeight: isActive ? FontWeight.w600 : FontWeight.w400, color: isActive ? AppColors.primary : AppColors.textSecondary)),
        ],
      ),
    );
  }
}

class _CheckItem extends StatelessWidget {
  final String label;
  const _CheckItem({required this.label});
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 6),
      child: Row(
        children: [
          SizedBox(width: 18, height: 18, child: Checkbox(value: false, onChanged: (_) {}, activeColor: AppColors.primary)),
          const SizedBox(width: 8),
          Text(label, style: const TextStyle(fontSize: 13, color: AppColors.textSecondary)),
        ],
      ),
    );
  }
}

class _StatRow extends StatelessWidget {
  final String label, value;
  const _StatRow({required this.label, required this.value});
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 6),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: const TextStyle(fontSize: 12, color: AppColors.textSecondary)),
          Text(value, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppColors.textPrimary)),
        ],
      ),
    );
  }
}

class _MainContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
          color: AppColors.backgroundWhite,
          child: Row(
            children: [
              const Text('Top Questions', style: AppTextStyles.heading2),
              const Spacer(),
              ElevatedButton.icon(
                onPressed: () {},
                icon: const Icon(Icons.add, size: 16, color: Colors.white),
                label: const Text('Ask Question', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600, fontSize: 13)),
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primary,
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                ),
              ),
            ],
          ),
        ),
        Expanded(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(20),
            child: Column(
              children: [
                const _SearchBar(),
                const SizedBox(height: 16),
                const _SortTabs(),
                const SizedBox(height: 16),
                _QuestionCard(
                  votes: 127, answers: 8, views: 2341,
                  title: 'How to properly use useEffect cleanup in React?',
                  preview: 'I\'m having trouble understanding when and how to return a cleanup function from useEffect. My component has memory leaks...',
                  tags: const [
                    _TagData('javascript', AppColors.tagPrimary, AppColors.tagPrimaryDark),
                    _TagData('reactJS', AppColors.tagAccent, AppColors.tagAccentDark),
                  ],
                  author: 'Alex Chen', time: '2 hours ago', isSolved: true,
                ),
                const SizedBox(height: 12),
                _QuestionCard(
                  votes: 89, answers: 5, views: 1876,
                  title: 'Understanding async/await vs Promise chains in JavaScript',
                  preview: 'What are the practical differences between using async/await and .then() chains? When should I prefer one over the other?',
                  tags: const [
                    _TagData('javascript', AppColors.tagPrimary, AppColors.tagPrimaryDark),
                    _TagData('async', AppColors.tagNeutral, AppColors.tagNeutralDark),
                  ],
                  author: 'Sarah M.', time: '5 hours ago', isSolved: false,
                ),
                const SizedBox(height: 12),
                _QuestionCard(
                  votes: 64, answers: 12, views: 3102,
                  title: 'Best practices for Flutter state management in 2024',
                  preview: 'With so many options (Riverpod, Bloc, Provider, GetX), what\'s the recommended approach for a medium-sized Flutter app?',
                  tags: const [
                    _TagData('flutter', AppColors.tagAccent, AppColors.tagAccentDark),
                    _TagData('dart', AppColors.tagPrimary, AppColors.tagPrimaryDark),
                  ],
                  author: 'James K.', time: '1 day ago', isSolved: true,
                ),
                const SizedBox(height: 20),
                const _Pagination(),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

class _SearchBar extends StatelessWidget {
  const _SearchBar();
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 44,
      decoration: BoxDecoration(color: AppColors.backgroundWhite, borderRadius: BorderRadius.circular(8), border: Border.all(color: AppColors.borderGray)),
      child: const Row(
        children: [
          SizedBox(width: 14),
          Icon(Icons.search, size: 18, color: AppColors.textTertiary),
          SizedBox(width: 8),
          Text('Search questions...', style: TextStyle(fontSize: 13, color: AppColors.textTertiary)),
        ],
      ),
    );
  }
}

class _SortTabs extends StatelessWidget {
  const _SortTabs();
  @override
  Widget build(BuildContext context) {
    return Row(
      children: ['Newest', 'Active', 'Most Voted'].map((t) {
        final isActive = t == 'Newest';
        return Container(
          margin: const EdgeInsets.only(right: 8),
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
          decoration: BoxDecoration(
            color: isActive ? AppColors.textPrimary : Colors.transparent,
            borderRadius: BorderRadius.circular(6),
            border: isActive ? null : Border.all(color: AppColors.borderGray),
          ),
          child: Text(t, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: isActive ? Colors.white : AppColors.textSecondary)),
        );
      }).toList(),
    );
  }
}

class _QuestionCard extends StatelessWidget {
  final int votes, answers, views;
  final String title, preview, author, time;
  final List<_TagData> tags;
  final bool isSolved;

  const _QuestionCard({
    required this.votes, required this.answers, required this.views,
    required this.title, required this.preview, required this.tags,
    required this.author, required this.time, required this.isSolved,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: AppColors.backgroundWhite, borderRadius: BorderRadius.circular(10), border: Border.all(color: AppColors.borderGray)),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Column(
            children: [
              _MetricBox(value: '$votes', label: 'votes'),
              const SizedBox(height: 8),
              _MetricBox(value: '$answers', label: 'answers', highlight: isSolved),
              const SizedBox(height: 8),
              _MetricBox(value: '$views', label: 'views'),
            ],
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Expanded(child: Text(title, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppColors.primary))),
                    if (isSolved)
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                        decoration: BoxDecoration(color: AppColors.successLight, borderRadius: BorderRadius.circular(4)),
                        child: const Text('SOLVED', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: AppColors.success)),
                      ),
                  ],
                ),
                const SizedBox(height: 6),
                Text(preview, style: const TextStyle(fontSize: 13, color: AppColors.textSecondary, height: 1.4), maxLines: 2, overflow: TextOverflow.ellipsis),
                const SizedBox(height: 10),
                Wrap(
                  spacing: 6,
                  children: tags.map((t) => Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                    decoration: BoxDecoration(color: t.bg, borderRadius: BorderRadius.circular(4)),
                    child: Text('#${t.name}', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: t.fg)),
                  )).toList(),
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    const CircleAvatar(radius: 10, backgroundColor: AppColors.primary,
                      child: Text('A', style: TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w700))),
                    const SizedBox(width: 6),
                    Text(author, style: const TextStyle(fontSize: 12, color: AppColors.textSecondary)),
                    const Spacer(),
                    Text(time, style: const TextStyle(fontSize: 11, color: AppColors.textTertiary)),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _MetricBox extends StatelessWidget {
  final String value, label;
  final bool highlight;
  const _MetricBox({required this.value, required this.label, this.highlight = false});
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 56,
      padding: const EdgeInsets.symmetric(vertical: 4),
      decoration: BoxDecoration(
        color: highlight ? AppColors.successLight : Colors.transparent,
        borderRadius: BorderRadius.circular(4),
        border: highlight ? Border.all(color: AppColors.success) : null,
      ),
      child: Column(
        children: [
          Text(value, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: highlight ? AppColors.success : AppColors.textPrimary)),
          Text(label, style: const TextStyle(fontSize: 10, color: AppColors.textTertiary)),
        ],
      ),
    );
  }
}

class _Pagination extends StatelessWidget {
  const _Pagination();
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const _PageBtn(label: '←', isActive: false),
        const _PageBtn(label: '1', isActive: true),
        const _PageBtn(label: '2', isActive: false),
        const _PageBtn(label: '3', isActive: false),
        const Text('...', style: TextStyle(color: AppColors.textTertiary, fontSize: 14)),
        const _PageBtn(label: '12', isActive: false),
        const _PageBtn(label: '→', isActive: false),
      ],
    );
  }
}

class _PageBtn extends StatelessWidget {
  final String label;
  final bool isActive;
  const _PageBtn({required this.label, required this.isActive});
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 3),
      width: 32, height: 32,
      decoration: BoxDecoration(
        color: isActive ? AppColors.primary : AppColors.backgroundWhite,
        borderRadius: BorderRadius.circular(6),
        border: Border.all(color: isActive ? AppColors.primary : AppColors.borderGray),
      ),
      alignment: Alignment.center,
      child: Text(label, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: isActive ? Colors.white : AppColors.textSecondary)),
    );
  }
}

class _RightSidebar extends StatelessWidget {
  const _RightSidebar();

  @override
  Widget build(BuildContext context) {
    const tags = [
      _TagData('javascript', AppColors.tagPrimary, AppColors.tagPrimaryDark),
      _TagData('reactJS', AppColors.tagAccent, AppColors.tagAccentDark),
      _TagData('flutter', AppColors.tagAccent, AppColors.tagAccentDark),
      _TagData('python', AppColors.tagNeutral, AppColors.tagNeutralDark),
      _TagData('dart', AppColors.tagPrimary, AppColors.tagPrimaryDark),
    ];

    const contributors = [
      _ContributorData('1', 'Alex Chen', '2,847 pts'),
      _ContributorData('2', 'Sarah M.', '2,341 pts'),
      _ContributorData('3', 'James K.', '1,987 pts'),
      _ContributorData('4', 'Priya S.', '1,654 pts'),
    ];

    return Container(
      width: 260,
      padding: const EdgeInsets.all(16),
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Row(children: [
              Text('🔥', style: TextStyle(fontSize: 16)),
              SizedBox(width: 6),
              Text('Trending Tags', style: AppTextStyles.heading4),
            ]),
            const SizedBox(height: 10),
            Wrap(
              spacing: 6, runSpacing: 6,
              children: tags.map((t) => Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(color: t.bg, borderRadius: BorderRadius.circular(4)),
                child: Text('#${t.name}', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: t.fg)),
              )).toList(),
            ),
            const SizedBox(height: 20),
            const Text('Top Contributors', style: AppTextStyles.heading4),
            const SizedBox(height: 10),
            ...contributors.map((c) => Padding(
              padding: const EdgeInsets.only(bottom: 8),
              child: Row(
                children: [
                  Text(c.rank, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppColors.textTertiary)),
                  const SizedBox(width: 8),
                  CircleAvatar(radius: 14, backgroundColor: AppColors.primary.withOpacity(0.15),
                    child: Text(c.name[0], style: const TextStyle(color: AppColors.primary, fontWeight: FontWeight.w700, fontSize: 11))),
                  const SizedBox(width: 8),
                  Expanded(child: Text(c.name, style: const TextStyle(fontSize: 12, color: AppColors.textPrimary))),
                  Text(c.points, style: const TextStyle(fontSize: 11, color: AppColors.textTertiary)),
                ],
              ),
            )),
            const SizedBox(height: 20),
            Container(
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                gradient: const LinearGradient(colors: [AppColors.primary, AppColors.accent], begin: Alignment.topLeft, end: Alignment.bottomRight),
                borderRadius: BorderRadius.circular(12),
              ),
              child: const Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('🏆 Weekly Challenge', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13)),
                  SizedBox(height: 6),
                  Text('Answer 5 questions this week and earn the "Helper" badge!', style: TextStyle(color: Colors.white70, fontSize: 11, height: 1.4)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
