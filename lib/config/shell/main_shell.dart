import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../core/constants/app_colors.dart';
import '../../core/utils/responsive_helper.dart';

class MainShell extends StatelessWidget {
  final Widget child;
  const MainShell({super.key, required this.child});

  int _selectedIndex(BuildContext context) {
    final location = GoRouterState.of(context).matchedLocation;
    if (location.startsWith('/dashboard')) return 0;
    if (location.startsWith('/groups')) return 1;
    if (location.startsWith('/forum')) return 2;
    if (location.startsWith('/marketplace')) return 3;
    if (location.startsWith('/tutors')) return 4;
    return 0;
  }

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveHelper.isMobile(context);

    return Scaffold(
      body: child,
      bottomNavigationBar: NavigationBar(
        selectedIndex: _selectedIndex(context),
        onDestinationSelected: (i) {
          final routes = ['/dashboard', '/groups', '/forum', '/marketplace', '/tutors'];
          context.go(routes[i]);
        },
        destinations: const [
          NavigationDestination(
            icon: Icon(Icons.home_outlined), 
            selectedIcon: Icon(Icons.home, color: AppColors.primary), 
            label: 'Hub'
          ),
          NavigationDestination(
            icon: Icon(Icons.groups_outlined), 
            selectedIcon: Icon(Icons.groups, color: AppColors.primary), 
            label: 'Groups'
          ),
          NavigationDestination(
            icon: Icon(Icons.forum_outlined), 
            selectedIcon: Icon(Icons.forum, color: AppColors.primary), 
            label: 'Forum'
          ),
          NavigationDestination(
            icon: Icon(Icons.library_books_outlined), 
            selectedIcon: Icon(Icons.library_books, color: AppColors.primary), 
            label: 'Notes'
          ),
          NavigationDestination(
            icon: Icon(Icons.school_outlined), 
            selectedIcon: Icon(Icons.school, color: AppColors.primary), 
            label: 'Tutors'
          ),
        ],
      ),
    );
  }
}
