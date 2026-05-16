import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../features/auth/presentation/providers/auth_provider.dart';
import '../../features/auth/presentation/screens/login_screen.dart';
import '../../features/auth/presentation/screens/register_screen.dart';
import '../../features/study_hub/presentation/screens/study_hub_screen.dart';
import '../../features/groups/presentation/screens/study_sphere_screen.dart';
import '../../features/forum/presentation/screens/dev_forum_screen.dart';
import '../../features/marketplace/presentation/screens/premium_notes_screen.dart';
import '../../features/tutors/presentation/screens/tutor_finder_screen.dart';
import '../shell/main_shell.dart';

final routerProvider = Provider<GoRouter>((ref) {
  final authState = ref.watch(currentUserProvider);

  return GoRouter(
    initialLocation: '/dashboard',
    redirect: (context, state) {
      final isLoggedIn = authState.value != null;
      final isAuthRoute = state.matchedLocation == '/login' || state.matchedLocation == '/register';

      if (!isLoggedIn && !isAuthRoute) return '/login';
      if (isLoggedIn && isAuthRoute) return '/dashboard';
      return null;
    },
    routes: [
      GoRoute(path: '/login', builder: (_, __) => const LoginScreen()),
      GoRoute(path: '/register', builder: (_, __) => const RegisterScreen()),
      ShellRoute(
        builder: (context, state, child) => MainShell(child: child),
        routes: [
          GoRoute(path: '/dashboard', builder: (_, __) => const StudyHubScreen()),
          GoRoute(path: '/groups', builder: (_, __) => const StudySphereScreen()),
          GoRoute(path: '/forum', builder: (_, __) => const DevForumScreen()),
          GoRoute(path: '/marketplace', builder: (_, __) => const PremiumNotesScreen()),
          GoRoute(path: '/tutors', builder: (_, __) => const TutorFinderScreen()),
        ],
      ),
    ],
  );
});
