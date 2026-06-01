import 'package:go_router/go_router.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../features/auth/presentation/providers/auth_provider.dart';
import '../../features/auth/presentation/screens/login_screen.dart';
import '../../features/auth/presentation/screens/register_screen.dart';
import '../../features/study_hub/presentation/screens/study_hub_screen.dart';
import '../../features/groups/presentation/screens/study_sphere_screen.dart';
import '../../features/groups/presentation/screens/group_management_screen.dart';
import '../../features/groups/presentation/screens/group_chat_screen.dart';
import '../../features/groups/presentation/screens/group_notes_screen.dart';
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
      // Group management routes (outside shell for full-screen experience)
      GoRoute(
        path: '/group/:groupId/manage',
        builder: (context, state) {
          final groupId = state.pathParameters['groupId']!;
          return GroupManagementScreen(groupId: groupId);
        },
      ),
      GoRoute(
        path: '/group/:groupId/chat',
        builder: (context, state) {
          final groupId = state.pathParameters['groupId']!;
          final groupName = state.uri.queryParameters['name'] ?? 'Group';
          return GroupChatScreen(groupId: groupId, groupName: groupName);
        },
      ),
      GoRoute(
        path: '/group/:groupId/notes',
        builder: (context, state) {
          final groupId = state.pathParameters['groupId']!;
          final groupName = state.uri.queryParameters['name'] ?? 'Group';
          return GroupNotesScreen(groupId: groupId, groupName: groupName);
        },
      ),
    ],
  );
});