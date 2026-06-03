import 'package:flutter/material.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/constants/app_text_styles.dart';

class _TutorData {
  final String name, subject, description, rating, reviews, responseTime;
  final int sessions;
  final double price;
  final List<Color> gradientColors;
  final bool isVerified, isInstant;

  const _TutorData({
    required this.name,
    required this.subject,
    required this.description,
    required this.rating,
    required this.reviews,
    required this.sessions,
    required this.responseTime,
    required this.price,
    required this.gradientColors,
    required this.isVerified,
    required this.isInstant,
  });
}

class TutorFinderScreen extends StatelessWidget {
  const TutorFinderScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: AppColors.gradientPrimary,
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: Column(
          children: [
            const _Header(),
            const _SearchRow(),
            Expanded(
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const _FilterSidebar(),
                  Expanded(child: _TutorGrid()),
                ],
              ),
            ),
            const _Footer(),
          ],
        ),
      ),
    );
  }
}

class _Header extends StatelessWidget {
  const _Header();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
      color: Colors.white.withOpacity(0.9),
      child: Row(
        children: [
          Container(
            width: 32, height: 32,
            decoration: BoxDecoration(
                color: AppColors.primary,
                borderRadius: BorderRadius.circular(8)),
            child: const Icon(Icons.person_search, color: Colors.white, size: 18),
          ),
          const SizedBox(width: 8),
          const Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('TutorFinder',
                  style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w800,
                      color: AppColors.textPrimary)),
              Text('Find your perfect tutor',
                  style: TextStyle(fontSize: 10, color: AppColors.textTertiary)),
            ],
          ),
          const SizedBox(width: 32),
          const _NavLink(label: 'Find Tutors'),
          const _NavLink(label: 'How it Works'),
          const _NavLink(label: 'Become a Tutor'),
          const Spacer(),
          OutlinedButton(
            onPressed: () {},
            style: OutlinedButton.styleFrom(
              side: const BorderSide(color: AppColors.primary),
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            ),
            child: const Text('Log In',
                style: TextStyle(
                    color: AppColors.primary,
                    fontWeight: FontWeight.w600,
                    fontSize: 13)),
          ),
          const SizedBox(width: 8),
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              backgroundColor: AppColors.accent,
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            ),
            child: const Text('Sign Up',
                style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w600,
                    fontSize: 13)),
          ),
        ],
      ),
    );
  }
}

class _NavLink extends StatelessWidget {
  final String label;
  const _NavLink({required this.label});

  @override
  Widget build(BuildContext context) {
    final isMobile = MediaQuery.of(context).size.width < 768;
    return Padding(
      padding: isMobile ? const EdgeInsets.symmetric(horizontal: 8) : const EdgeInsets.symmetric(horizontal: 12),
      child: Text(label,
          style: const TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.w500,
              color: AppColors.textSecondary)),
    );
  }
}

class _SearchRow extends StatelessWidget {
  const _SearchRow();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
      color: Colors.white.withOpacity(0.6),
      child: Container(
        height: 48,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(10),
          border: Border.all(color: AppColors.borderGray),
          boxShadow: [BoxShadow(color: AppColors.shadowLight, blurRadius: 8)],
        ),
        child: Row(
          children: [
            const SizedBox(width: 16),
            const Icon(Icons.search, size: 20, color: AppColors.textTertiary),
            const SizedBox(width: 10),
            Expanded(
              child: Text(
                "Try 'Python' or 'Algebra'",
                style: const TextStyle(fontSize: 14, color: AppColors.textTertiary),
                overflow: TextOverflow.ellipsis,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _FilterSidebar extends StatelessWidget {
  const _FilterSidebar();

  @override
  Widget build(BuildContext context) {
    final subjects = [
      'Mathematics',
      'Chemistry',
      'Physics',
      'Biology',
      'English Literature'
    ];

    final isMobile = MediaQuery.of(context).size.width < 768;

    return Container(
      width: isMobile ? 240 : 280,
      margin: const EdgeInsets.all(16),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [
          BoxShadow(
              color: AppColors.shadowLight,
              blurRadius: 8,
              offset: const Offset(0, 2))
        ],
      ),
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Find your perfect tutor', style: AppTextStyles.heading3),
            const SizedBox(height: 4),
            const Text('4,342 qualified tutors available',
                style: TextStyle(fontSize: 12, color: AppColors.textTertiary)),
            const SizedBox(height: 16),
            const Text('SUBJECTS', style: AppTextStyles.overline),
            const SizedBox(height: 8),
            ...subjects.map(
                (s) => _FilterCheckbox(label: s, checked: s == 'Mathematics')),
            const SizedBox(height: 16),
            const Text('PRICE RANGE', style: AppTextStyles.overline),
            const SizedBox(height: 4),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Expanded(
                  child: Text('\$15/hr',
                      style: const TextStyle(
                          fontSize: 12, color: AppColors.textSecondary)),
                ),
                Expanded(
                  child: Text('\$85/hr',
                      style: const TextStyle(
                          fontSize: 12, color: AppColors.textSecondary)),
                ),
              ],
            ),
            SliderTheme(
              data: SliderTheme.of(context).copyWith(
                  activeTrackColor: AppColors.primary,
                  thumbColor: AppColors.primary),
              child: Slider(value: 0.5, onChanged: (_) {}),
            ),
            const SizedBox(height: 16),
            const Text('AVAILABILITY', style: AppTextStyles.overline),
            const SizedBox(height: 8),
            Wrap(
              spacing: 6,
              runSpacing: 6,
              children: ['Morning', 'Afternoon', 'Evening', 'Weekend']
                  .map((a) => Container(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 10, vertical: 5),
                        decoration: BoxDecoration(
                          color: a == 'Morning'
                              ? AppColors.primary.withOpacity(0.1)
                              : AppColors.backgroundGray,
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(
                              color: a == 'Morning'
                                  ? AppColors.primary
                                  : AppColors.borderGray),
                        ),
                        child: Text(a,
                            style: TextStyle(
                              fontSize: 11,
                              fontWeight: FontWeight.w600,
                              color: a == 'Morning'
                                  ? AppColors.primary
                                  : AppColors.textSecondary,
                            )),
                      ))
                  .toList(),
            ),
            const SizedBox(height: 16),
            const Text('NATIVE LANGUAGE', style: AppTextStyles.overline),
            const SizedBox(height: 8),
            Container(
              height: 38,
              padding: const EdgeInsets.symmetric(horizontal: 12),
              decoration: BoxDecoration(
                border: Border.all(color: AppColors.borderGray),
                borderRadius: BorderRadius.circular(8),
              ),
              child: Row(
                children: [
                  const Expanded(
                    child: Text('Select language',
                        style: TextStyle(
                            fontSize: 13, color: AppColors.textTertiary)),
                  ),
                  const Icon(Icons.keyboard_arrow_down,
                      size: 18, color: AppColors.textTertiary),
                ],
              ),
            ),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primary,
                  padding: const EdgeInsets.symmetric(vertical: 12),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8)),
                ),
                child: const Text('Apply Filters',
                    style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w600,
                        fontSize: 14)),
              ),
            ),
            const SizedBox(height: 16),
          ],
        ),
      ),
    );
  }
}

class _FilterCheckbox extends StatelessWidget {
  final String label;
  final bool checked;
  const _FilterCheckbox({required this.label, required this.checked});

  @override
  Widget build(BuildContext context) {
    final isMobile = MediaQuery.of(context).size.width < 768;
    return Padding(
      padding: const EdgeInsets.only(bottom: 4),
      child: Row(
        children: [
          SizedBox(
            width: 18,
            height: 18,
            child: Checkbox(
                value: checked,
                onChanged: (_) {},
                activeColor: AppColors.primary),
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Text(label,
                style: TextStyle(
                    fontSize: isMobile ? 11 : 13, color: AppColors.textSecondary)),
          ),
        ],
      ),
    );
  }
}

class _TutorGrid extends StatelessWidget {
  final List<_TutorData> _tutors = [
    _TutorData(
      name: 'Dr. Elena Vance 🎓',
      subject: 'Mathematics',
      description: 'Specializing in Calculus, Linear Algebra, and Statistics for university students.',
      rating: '4.9', reviews: '1.4k', sessions: 142,
      responseTime: '< 1hr', price: 85.0,
      gradientColors: const [Color(0xFF4F46E5), Color(0xFF7C3AED)],
      isVerified: true, isInstant: true,
    ),
    _TutorData(
      name: 'Prof. James Kim',
      subject: 'Physics',
      description: 'PhD in Theoretical Physics. Expert in quantum mechanics and classical dynamics.',
      rating: '4.8', reviews: '987', sessions: 98,
      responseTime: '< 2hr', price: 75.0,
      gradientColors: const [Color(0xFF0EA5E9), Color(0xFF06B6D4)],
      isVerified: true, isInstant: false,
    ),
    _TutorData(
      name: 'Sarah Chen 🌟',
      subject: 'Chemistry',
      description: 'Organic chemistry specialist with 8 years of tutoring experience.',
      rating: '4.9', reviews: '2.1k', sessions: 203,
      responseTime: '< 30m', price: 70.0,
      gradientColors: const [Color(0xFF10B981), Color(0xFF059669)],
      isVerified: true, isInstant: true,
    ),
    _TutorData(
      name: 'Dr. Marcus Brown',
      subject: 'Biology',
      description: 'Cell biology and genetics expert. Makes complex topics easy to understand.',
      rating: '4.7', reviews: '654', sessions: 87,
      responseTime: '< 1hr', price: 65.0,
      gradientColors: const [Color(0xFFF97316), Color(0xFFEF4444)],
      isVerified: false, isInstant: false,
    ),
    _TutorData(
      name: 'Emma Wilson',
      subject: 'English Lit',
      description: 'Published author and literature professor. Essay writing and analysis.',
      rating: '4.8', reviews: '1.2k', sessions: 156,
      responseTime: '< 2hr', price: 60.0,
      gradientColors: const [Color(0xFFEC4899), Color(0xFF8B5CF6)],
      isVerified: true, isInstant: false,
    ),
    _TutorData(
      name: 'Alex Rodriguez',
      subject: 'Mathematics',
      description: 'SAT/ACT prep specialist. 99th percentile scorer and certified tutor.',
      rating: '4.9', reviews: '876', sessions: 134,
      responseTime: '< 1hr', price: 55.0,
      gradientColors: const [Color(0xFFF59E0B), Color(0xFFF97316)],
      isVerified: true, isInstant: true,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text('Showing 24 of 4,342 tutors',
                    style: const TextStyle(
                        fontSize: 13, color: AppColors.textSecondary))),
              const SizedBox(width: 8),
              Container(
                padding:
                    const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(color: AppColors.borderGray),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Text('Highest Rated',
                        style: TextStyle(
                            fontSize: 12, color: AppColors.textSecondary)),
                    const SizedBox(width: 4),
                    const Icon(Icons.keyboard_arrow_down,
                        size: 16, color: AppColors.textTertiary),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 3,
              crossAxisSpacing: 12,
              mainAxisSpacing: 12,
              childAspectRatio: 0.68,
            ),
            itemCount: _tutors.length,
            itemBuilder: (_, i) {
              final t = _tutors[i];
              return _TutorCard(tutor: t);
            },
          ),
          const SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [1, 2, 3, 4, 5]
                .map((p) => Container(
                      margin: const EdgeInsets.symmetric(horizontal: 3),
                      width: 32,
                      height: 32,
                      decoration: BoxDecoration(
                        color: p == 1 ? AppColors.primary : Colors.white,
                        borderRadius: BorderRadius.circular(6),
                        border: Border.all(
                            color: p == 1
                                ? AppColors.primary
                                : AppColors.borderGray),
                      ),
                      alignment: Alignment.center,
                      child: Text('$p',
                          style: TextStyle(
                            fontSize: 13,
                            fontWeight: FontWeight.w600,
                            color: p == 1
                                ? Colors.white
                                : AppColors.textSecondary,
                          )),
                    ))
                .toList(),
          ),
        ],
      ),
    );
  }
}

class _TutorCard extends StatelessWidget {
  final _TutorData tutor;
  const _TutorCard({required this.tutor});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [
          BoxShadow(
              color: AppColors.shadowLight,
              blurRadius: 8,
              offset: const Offset(0, 2))
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            height: 80,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                  colors: tutor.gradientColors,
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight),
              borderRadius: const BorderRadius.only(
                  topLeft: Radius.circular(12),
                  topRight: Radius.circular(12)),
            ),
            child: Center(
              child: CircleAvatar(
                radius: 28,
                backgroundColor: Colors.white.withOpacity(0.3),
                child: Text(tutor.name[0],
                    style: const TextStyle(
                        color: Colors.white,
                        fontSize: 22,
                        fontWeight: FontWeight.w800)),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(tutor.name,
                    style: const TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.w700,
                        color: AppColors.textPrimary),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis),
                Text(tutor.subject,
                    style: const TextStyle(
                        fontSize: 11,
                        color: AppColors.primary,
                        fontWeight: FontWeight.w600)),
                const SizedBox(height: 4),
                Text(tutor.description,
                    style: const TextStyle(
                        fontSize: 11,
                        color: AppColors.textSecondary,
                        height: 1.4),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis),
                const SizedBox(height: 6),
                Wrap(
                  spacing: 4,
                  runSpacing: 4,
                  children: [
                    if (tutor.isVerified)
                      _Badge(
                          label: 'VERIFIED',
                          color: AppColors.successLight,
                          textColor: AppColors.success),
                    _Badge(
                        label: 'Top 1%',
                        color: AppColors.tagAccent,
                        textColor: AppColors.tagAccentDark),
                    if (tutor.isInstant)
                      _Badge(
                          label: 'Instant',
                          color: AppColors.tagPrimary,
                          textColor: AppColors.tagPrimaryDark),
                  ],
                ),
                const SizedBox(height: 6),
                Row(
                  children: [
                    const Icon(Icons.star,
                        size: 12, color: Color(0xFFF59E0B)),
                    const SizedBox(width: 3),
                    Text('${tutor.rating} (${tutor.reviews})',
                        style: const TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.w600,
                            color: AppColors.textPrimary)),
                  ],
                ),
                const SizedBox(height: 4),
                Row(
                  children: [
                    const Icon(Icons.play_circle_outline,
                        size: 12, color: AppColors.textTertiary),
                    const SizedBox(width: 3),
                    Text('${tutor.sessions} sessions',
                        style: const TextStyle(
                            fontSize: 10, color: AppColors.textTertiary)),
                    const SizedBox(width: 8),
                    const Icon(Icons.access_time,
                        size: 12, color: AppColors.textTertiary),
                    const SizedBox(width: 3),
                    Text(tutor.responseTime,
                        style: const TextStyle(
                            fontSize: 10, color: AppColors.textTertiary)),
                  ],
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Text('\$${tutor.price}/hr',
                        style: const TextStyle(
                            fontSize: 15,
                            fontWeight: FontWeight.w800,
                            color: AppColors.textPrimary)),
                    const Spacer(),
                    ElevatedButton(
                      onPressed: () {},
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppColors.primary,
                        padding: const EdgeInsets.symmetric(
                            horizontal: 10, vertical: 6),
                        minimumSize: Size.zero,
                        shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(6)),
                      ),
                      child: const Text('Book Now',
                          style: TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.w600,
                              fontSize: 11)),
                    ),
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

class _Badge extends StatelessWidget {
  final String label;
  final Color color, textColor;
  const _Badge(
      {required this.label, required this.color, required this.textColor});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
      decoration:
          BoxDecoration(color: color, borderRadius: BorderRadius.circular(3)),
      child: Text(label,
          style: TextStyle(
              fontSize: 9, fontWeight: FontWeight.w700, color: textColor)),
    );
  }
}

class _Footer extends StatelessWidget {
  const _Footer();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 20),
      color: AppColors.textPrimary,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(child: _FooterCol(title: 'TutorFinder', items: const ['About Us', 'Careers', 'Blog'])),
          Expanded(child: _FooterCol(title: 'For Students', items: const ['Find Tutors', 'How it Works', 'Pricing'])),
          Expanded(child: _FooterCol(title: 'For Tutors', items: const ['Become a Tutor', 'Tutor Guide', 'Earnings'])),
          Expanded(child: _FooterCol(title: 'Support', items: const ['Help Center', 'Contact Us', 'Privacy Policy'])),
        ],
      ),
    );
  }
}

class _FooterCol extends StatelessWidget {
  final String title;
  final List<String> items;
  const _FooterCol({required this.title, required this.items});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(title,
            style: const TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.w700,
                fontSize: 13)),
        const SizedBox(height: 8),
        ...items.map((i) => Padding(
              padding: const EdgeInsets.only(bottom: 4),
              child: Text(i,
                  style: const TextStyle(color: Colors.white60, fontSize: 12)),
            )),
      ],
    );
  }
}
