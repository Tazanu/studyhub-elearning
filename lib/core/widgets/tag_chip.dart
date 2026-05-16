import 'package:flutter/material.dart';
import '../constants/app_colors.dart';

class TagChip extends StatelessWidget {
  final String label;
  final Color bg;
  final Color textColor;

  const TagChip({
    super.key,
    required this.label,
    this.bg = AppColors.tagBlue,
    this.textColor = AppColors.tagBlueDark,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(4),
      ),
      child: Text(
        '#$label',
        style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: textColor),
      ),
    );
  }
}
