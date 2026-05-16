import 'package:flutter/material.dart';
import '../constants/app_colors.dart';

class AppButton extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final bool isOutlined;
  final bool isSmall;
  final IconData? icon;
  final Color? color;

  const AppButton({
    super.key,
    required this.label,
    this.onPressed,
    this.isOutlined = false,
    this.isSmall = false,
    this.icon,
    this.color,
  });

  @override
  Widget build(BuildContext context) {
    final bg = color ?? AppColors.primary;
    final padding = isSmall
        ? const EdgeInsets.symmetric(horizontal: 12, vertical: 6)
        : const EdgeInsets.symmetric(horizontal: 20, vertical: 10);

    if (isOutlined) {
      return OutlinedButton.icon(
        onPressed: onPressed,
        icon: icon != null ? Icon(icon, size: 16, color: bg) : const SizedBox.shrink(),
        label: Text(label, style: TextStyle(color: bg, fontWeight: FontWeight.w600, fontSize: isSmall ? 12 : 14)),
        style: OutlinedButton.styleFrom(
          padding: padding,
          side: BorderSide(color: bg),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        ),
      );
    }

    return ElevatedButton.icon(
      onPressed: onPressed,
      icon: icon != null ? Icon(icon, size: 16, color: Colors.white) : const SizedBox.shrink(),
      label: Text(label, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600, fontSize: isSmall ? 12 : 14)),
      style: ElevatedButton.styleFrom(
        backgroundColor: bg,
        padding: padding,
        elevation: 0,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
      ),
    );
  }
}
