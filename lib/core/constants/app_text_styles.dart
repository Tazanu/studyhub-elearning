import 'package:flutter/material.dart';
import 'app_colors.dart';

class AppTextStyles {
  static const TextStyle heading1 = TextStyle(
    fontSize: 24, fontWeight: FontWeight.w700, color: AppColors.textPrimary, height: 1.3,
  );
  static const TextStyle heading2 = TextStyle(
    fontSize: 20, fontWeight: FontWeight.w700, color: AppColors.textPrimary, height: 1.4,
  );
  static const TextStyle heading3 = TextStyle(
    fontSize: 18, fontWeight: FontWeight.w600, color: AppColors.textPrimary, height: 1.4,
  );
  static const TextStyle heading4 = TextStyle(
    fontSize: 16, fontWeight: FontWeight.w600, color: AppColors.textPrimary, height: 1.5,
  );
  static const TextStyle bodyLarge = TextStyle(
    fontSize: 16, fontWeight: FontWeight.w400, color: AppColors.textSecondary, height: 1.6,
  );
  static const TextStyle bodyMedium = TextStyle(
    fontSize: 14, fontWeight: FontWeight.w400, color: AppColors.textSecondary, height: 1.5,
  );
  static const TextStyle bodySmall = TextStyle(
    fontSize: 12, fontWeight: FontWeight.w400, color: AppColors.textTertiary, height: 1.5,
  );
  static const TextStyle buttonMedium = TextStyle(
    fontSize: 14, fontWeight: FontWeight.w600, color: AppColors.textWhite, height: 1.5,
  );
  static const TextStyle label = TextStyle(
    fontSize: 12, fontWeight: FontWeight.w600, color: AppColors.textPrimary,
    letterSpacing: 0.5,
  );
  static const TextStyle overline = TextStyle(
    fontSize: 11, fontWeight: FontWeight.w700, color: AppColors.textTertiary,
    letterSpacing: 1.0,
  );
}
