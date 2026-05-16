import 'package:flutter/material.dart';

class AppColors {
  // Core 4-Color Professional Palette
  static const Color primary = Color(0xFF2563EB);        // Professional Blue
  static const Color accent = Color(0xFF059669);         // Success Green
  static const Color neutral = Color(0xFF374151);        // Charcoal Gray
  static const Color surface = Color(0xFFFFFFFF);        // Pure White
  
  // Variations of core colors
  static const Color primaryLight = Color(0xFF3B82F6);
  static const Color primaryDark = Color(0xFF1D4ED8);
  static const Color accentLight = Color(0xFF10B981);
  static const Color accentDark = Color(0xFF047857);
  static const Color neutralLight = Color(0xFF6B7280);
  static const Color neutralDark = Color(0xFF1F2937);
  static const Color surfaceGray = Color(0xFFF9FAFB);
  
  // Text colors using core palette
  static const Color textPrimary = neutral;
  static const Color textSecondary = neutralLight;
  static const Color textTertiary = Color(0xFF9CA3AF);
  static const Color textWhite = surface;
  
  // Background colors
  static const Color backgroundGray = surfaceGray;
  static const Color backgroundWhite = surface;
  
  // Border colors
  static const Color borderGray = Color(0xFFE5E7EB);
  static const Color borderLight = Color(0xFFF3F4F6);
  
  // Status colors using core palette
  static const Color success = accent;
  static const Color successLight = Color(0xFFD1FAE5);
  static const Color error = Color(0xFFDC2626);
  static const Color warning = primary;
  static const Color info = primaryLight;
  
  // Tag colors using core palette variations
  static const Color tagPrimary = Color(0xFFDBEAFE);
  static const Color tagPrimaryDark = primaryDark;
  static const Color tagAccent = Color(0xFFD1FAE5);
  static const Color tagAccentDark = accentDark;
  static const Color tagNeutral = Color(0xFFF3F4F6);
  static const Color tagNeutralDark = neutral;
  
  // Gradients using core colors
  static const List<Color> gradientPrimary = [
    Color(0xFFEBF4FF),
    Color(0xFFDBEAFE),
  ];
  
  static const List<Color> gradientAccent = [
    Color(0xFFECFDF5),
    Color(0xFFD1FAE5),
  ];
  
  // Shadows
  static const Color shadowLight = Color(0x0F000000);
  static const Color shadowMedium = Color(0x1A000000);
}
