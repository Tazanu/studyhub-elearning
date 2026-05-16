import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../auth/presentation/providers/auth_provider.dart';
import '../../../../core/network/firestore_service.dart';

// ── Stream: groups the current user belongs to ────────────────────────────────
final myGroupsProvider = StreamProvider<List<Map<String, dynamic>>>((ref) {
  final user = ref.watch(currentUserProvider).value;
  if (user == null) return const Stream.empty();

  return FirestoreService.streamGroups(user.uid).map((snap) => snap.docs
      .map((d) => {'id': d.id, ...d.data() as Map<String, dynamic>})
      .toList());
});

// ── Stream: posts for a given group ──────────────────────────────────────────
final groupPostsProvider =
    StreamProvider.family<List<Map<String, dynamic>>, String>((ref, groupId) {
  return FirestoreService.streamPosts(groupId).map((snap) => snap.docs
      .map((d) => {'id': d.id, ...d.data() as Map<String, dynamic>})
      .toList());
});

// ── Selected group id ─────────────────────────────────────────────────────────
final selectedGroupIdProvider = StateProvider<String?>((ref) => null);

// ── Create group ──────────────────────────────────────────────────────────────
final createGroupProvider =
    FutureProvider.family<void, Map<String, dynamic>>((ref, data) async {
  final user = ref.read(currentUserProvider).value;
  if (user == null) return;
  await FirestoreService.createGroup({
    ...data,
    'memberIds': [user.uid],
    'adminId': user.uid,
  });
});

// ── Create post ───────────────────────────────────────────────────────────────
final createPostProvider =
    FutureProvider.family<void, Map<String, dynamic>>((ref, data) async {
  final user = ref.read(currentUserProvider).value;
  if (user == null) return;
  await FirestoreService.createPost({
    ...data,
    'authorId': user.uid,
    'authorName': user.displayName ?? 'Anonymous',
    'authorPhoto': user.photoURL ?? '',
    'likes': [],
  });
});

// ── Like / unlike post ────────────────────────────────────────────────────────
class PostLikeNotifier extends Notifier<void> {
  @override
  void build() {}

  Future<void> toggle(String postId, List<dynamic> currentLikes) async {
    final user = ref.read(currentUserProvider).value;
    if (user == null) return;
    final liked = currentLikes.contains(user.uid);
    if (liked) {
      await FirestoreService.unlikePost(postId, user.uid);
    } else {
      await FirestoreService.likePost(postId, user.uid);
    }
  }
}

final postLikeProvider = NotifierProvider<PostLikeNotifier, void>(PostLikeNotifier.new);
