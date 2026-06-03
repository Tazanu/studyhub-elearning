import 'package:flutter/material.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/constants/app_text_styles.dart';

class _NoteData {
  final String title, author, university;
  final double rating, price;
  final int reviews;
  final List<Color> gradientColors;
  const _NoteData({
    required this.title, required this.author, required this.university,
    required this.rating, required this.reviews, required this.price,
    required this.gradientColors,
  });
}

class _TagData {
  final String name;
  final Color bg, fg;
  const _TagData(this.name, this.bg, this.fg);
}

class PremiumNotesScreen extends StatelessWidget {
  const PremiumNotesScreen({super.key});

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
            Expanded(
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const _FilterSidebar(),
                  Expanded(child: _NotesGrid()),
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
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
      color: Colors.white.withOpacity(0.9),
      child: Row(
        children: [
          Container(
            width: 32, height: 32,
            decoration: BoxDecoration(color: AppColors.primary, borderRadius: BorderRadius.circular(8)),
            child: const Icon(Icons.menu_book, color: Colors.white, size: 18),
          ),
          const SizedBox(width: 8),
          const Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Premium Notes', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: AppColors.textPrimary)),
              Text('Verified Quality Study Notes', style: TextStyle(fontSize: 10, color: AppColors.textTertiary)),
            ],
          ),
          const SizedBox(width: 32),
          const _NavLink(label: 'Explore'),
          const _NavLink(label: 'Universities'),
          const _NavLink(label: 'My Library'),
          const Spacer(),
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              backgroundColor: AppColors.primary,
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            ),
            child: const Text('Sell Notes', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600, fontSize: 13)),
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
      child: Text(label, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w500, color: AppColors.textSecondary)),
    );
  }
}

class _FilterSidebar extends StatelessWidget {
  const _FilterSidebar();
  @override
  Widget build(BuildContext context) {
    final isMobile = MediaQuery.of(context).size.width < 768;
    return Container(
      width: isMobile ? 220 : 260,
      margin: const EdgeInsets.all(16),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [BoxShadow(color: AppColors.shadowLight, blurRadius: 8, offset: const Offset(0, 2))],
      ),
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Law Notes Catalog', style: AppTextStyles.heading3),
            const SizedBox(height: 4),
            const Text('Showing 1,245 verified study materials', style: TextStyle(fontSize: 12, color: AppColors.textTertiary)),
            const SizedBox(height: 16),
            const Text('CATEGORIES', style: AppTextStyles.overline),
            const SizedBox(height: 8),
            ...['Constitutional Law', 'Criminal Law', 'Contract Law', 'Tort Law', 'Property Law']
                .map((c) => _FilterCheckbox(label: c, checked: c == 'Constitutional Law')),
            const SizedBox(height: 16),
            const Text('PRICE RANGE', style: AppTextStyles.overline),
            const SizedBox(height: 8),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Expanded(child: Text('\$0', style: const TextStyle(fontSize: 12, color: AppColors.textSecondary))),
                Expanded(child: Text('\$300+', style: const TextStyle(fontSize: 12, color: AppColors.textSecondary))),
              ],
            ),
            SliderTheme(
              data: SliderTheme.of(context).copyWith(activeTrackColor: AppColors.primary, thumbColor: AppColors.primary),
              child: Slider(value: 0.6, onChanged: (_) {}),
            ),
            const SizedBox(height: 16),
            const Text('RATINGS', style: AppTextStyles.overline),
            const SizedBox(height: 8),
            ...List.generate(5, (i) => _RatingRow(stars: 5 - i, count: [234, 187, 98, 45, 12][i])),
            const SizedBox(height: 16),
            const Text('FILE FORMAT', style: AppTextStyles.overline),
            const SizedBox(height: 8),
            const _FilterCheckbox(label: 'PDF', checked: true),
            const _FilterCheckbox(label: 'Word', checked: false),
            const _FilterCheckbox(label: 'PowerPoint', checked: false),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              child: OutlinedButton(
                onPressed: () {},
                style: OutlinedButton.styleFrom(
                  side: const BorderSide(color: AppColors.primary),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                ),
                child: const Text('Reset Filters', style: TextStyle(color: AppColors.primary, fontWeight: FontWeight.w600, fontSize: 13)),
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
          SizedBox(width: 18, height: 18,
            child: Checkbox(value: checked, onChanged: (_) {}, activeColor: AppColors.primary)),
          const SizedBox(width: 8),
          Expanded(
            child: Text(label, style: TextStyle(fontSize: isMobile ? 11 : 13, color: AppColors.textSecondary)),
          ),
        ],
      ),
    );
  }
}

class _RatingRow extends StatelessWidget {
  final int stars, count;
  const _RatingRow({required this.stars, required this.count});
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 4),
      child: Row(
        children: [
          SizedBox(width: 18, height: 18,
            child: Checkbox(value: stars >= 4, onChanged: (_) {}, activeColor: AppColors.primary)),
          const SizedBox(width: 6),
          ...List.generate(5, (i) => Icon(i < stars ? Icons.star : Icons.star_border, size: 12, color: const Color(0xFFF59E0B))),
          const SizedBox(width: 6),
          Text('($count)', style: const TextStyle(fontSize: 11, color: AppColors.textTertiary)),
        ],
      ),
    );
  }
}

class _NotesGrid extends StatelessWidget {
  final List<_NoteData> _notes = [
    _NoteData(title: 'Constitutional Law Complete Notes', author: 'Dr. Sarah Johnson', university: 'Harvard Law', rating: 4.9, reviews: 234, price: 49.99, gradientColors: const [Color(0xFF4F46E5), Color(0xFF7C3AED)]),
    _NoteData(title: 'Criminal Law Case Studies', author: 'Prof. Michael Chen', university: 'Yale Law', rating: 4.8, reviews: 189, price: 39.99, gradientColors: const [Color(0xFFF97316), Color(0xFFEF4444)]),
    _NoteData(title: 'Contract Law Essentials', author: 'Emma Williams', university: 'Stanford Law', rating: 4.7, reviews: 156, price: 34.99, gradientColors: const [Color(0xFF10B981), Color(0xFF059669)]),
    _NoteData(title: 'Tort Law Comprehensive Guide', author: 'James Parker', university: 'Columbia Law', rating: 4.9, reviews: 312, price: 54.99, gradientColors: const [Color(0xFF8B5CF6), Color(0xFFEC4899)]),
    _NoteData(title: 'Property Law Notes 2024', author: 'Dr. Lisa Brown', university: 'NYU Law', rating: 4.6, reviews: 98, price: 29.99, gradientColors: const [Color(0xFF3B82F6), Color(0xFF06B6D4)]),
    _NoteData(title: 'Administrative Law Overview', author: 'Prof. David Kim', university: 'Georgetown', rating: 4.8, reviews: 145, price: 44.99, gradientColors: const [Color(0xFFF59E0B), Color(0xFFF97316)]),
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
                child: Container(
                  height: 44,
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(8), border: Border.all(color: AppColors.borderGray)),
                  child: const Row(children: [
                    SizedBox(width: 14),
                    Icon(Icons.search, size: 18, color: AppColors.textTertiary),
                    SizedBox(width: 8),
                    Text('Search law notes...', style: TextStyle(fontSize: 13, color: AppColors.textTertiary)),
                  ]),
                ),
              ),
              const SizedBox(width: 12),
              Container(
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(8), border: Border.all(color: AppColors.borderGray)),
                child: const Icon(Icons.grid_view, size: 18, color: AppColors.textSecondary),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            decoration: BoxDecoration(color: AppColors.primary.withOpacity(0.1), borderRadius: BorderRadius.circular(6)),
            child: const Text('Category: Law • Verified Sellers', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: AppColors.primary)),
          ),
          const SizedBox(height: 16),
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 3, crossAxisSpacing: 12, mainAxisSpacing: 12, childAspectRatio: 0.72,
            ),
            itemCount: _notes.length,
            itemBuilder: (_, i) => _NoteCard(note: _notes[i]),
          ),
        ],
      ),
    );
  }
}

class _NoteCard extends StatelessWidget {
  final _NoteData note;
  const _NoteCard({required this.note});
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [BoxShadow(color: AppColors.shadowLight, blurRadius: 8, offset: const Offset(0, 2))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            height: 100,
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: note.gradientColors, begin: Alignment.topLeft, end: Alignment.bottomRight),
              borderRadius: const BorderRadius.only(topLeft: Radius.circular(12), topRight: Radius.circular(12)),
            ),
            child: Stack(
              children: [
                const Center(child: Text('📄', style: TextStyle(fontSize: 36))),
                Positioned(
                  top: 8, left: 8,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                    decoration: BoxDecoration(color: AppColors.primary, borderRadius: BorderRadius.circular(4)),
                    child: const Text('LAW NOTES', style: TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w700)),
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(note.title, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppColors.textPrimary), maxLines: 2, overflow: TextOverflow.ellipsis),
                const SizedBox(height: 6),
                Row(
                  children: [
                    CircleAvatar(radius: 10, backgroundColor: AppColors.primary.withOpacity(0.15),
                      child: Text(note.author[0], style: const TextStyle(color: AppColors.primary, fontSize: 9, fontWeight: FontWeight.w700))),
                    const SizedBox(width: 5),
                    Expanded(child: Text(note.author, style: const TextStyle(fontSize: 11, color: AppColors.textSecondary), overflow: TextOverflow.ellipsis)),
                  ],
                ),
                const SizedBox(height: 2),
                Text(note.university, style: const TextStyle(fontSize: 10, color: AppColors.textTertiary)),
                const SizedBox(height: 6),
                Row(
                  children: [
                    const Icon(Icons.star, size: 12, color: Color(0xFFF59E0B)),
                    const SizedBox(width: 3),
                    Text('${note.rating}', style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: AppColors.textPrimary)),
                    Text(' (${note.reviews})', style: const TextStyle(fontSize: 10, color: AppColors.textTertiary)),
                    const Spacer(),
                    Text('\$${note.price}', style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: AppColors.primary)),
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
          Expanded(child: _FooterCol(title: 'Premium Notes', items: const ['About Us', 'Careers', 'Blog'])),
          Expanded(child: _FooterCol(title: 'Resources', items: const ['Browse Notes', 'Universities', 'Subjects'])),
          Expanded(child: _FooterCol(title: 'Support', items: const ['Help Center', 'Contact Us', 'Privacy Policy'])),
          Expanded(child: _FooterCol(title: 'Sellers', items: const ['Sell Notes', 'Seller Guide', 'Earnings'])),
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
        Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13)),
        const SizedBox(height: 8),
        ...items.map((i) => Padding(padding: const EdgeInsets.only(bottom: 4), child: Text(i, style: const TextStyle(color: Colors.white60, fontSize: 12)))),
      ],
    );
  }
}
