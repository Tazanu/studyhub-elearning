import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../../core/network/firestore_service.dart';
import '../../../auth/presentation/providers/auth_provider.dart';

// ── Active tag filter ─────────────────────────────────────────────────────────
final forumTagFilterProvider = StateProvider<String?>((ref) => null);

// ── Stream: questions ─────────────────────────────────────────────────────────
final questionsProvider = StreamProvider<List<Map<String, dynamic>>>((ref) {
  final tag = ref.watch(forumTagFilterProvider);
  return FirestoreService.streamQuestions(tag: tag).map((snap) => snap.docs
      .map((d) => {'id': d.id, ...d.data() as Map<String, dynamic>})
      .toList());
});

// ── Ask question ──────────────────────────────────────────────────────────────
final askQuestionProvider =
    FutureProvider.family<void, Map<String, dynamic>>((ref, data) async {
  final user = ref.read(currentUserProvider).value;
  if (user == null) return;
  await FirestoreService.createQuestion({
    ...data,
    'authorId': user.uid,
    'authorName': user.displayName ?? 'Anonymous',
    'authorPhoto': user.photoURL ?? '',
    'isSolved': false,
    'answers': 0,
  });
});

// ── Vote / mark solved ────────────────────────────────────────────────────────
class QuestionVoteNotifier extends Notifier<void> {
  @override
  void build() {}

  Future<void> vote(String questionId, bool upvote) async {
    final user = ref.read(currentUserProvider).value;
    if (user == null) return;
    await FirestoreService.voteQuestion(questionId, user.uid, upvote);
  }

  Future<void> markSolved(String questionId) async {
    await FirestoreService.markSolved(questionId);
  }
}

final questionVoteProvider =
    NotifierProvider<QuestionVoteNotifier, void>(QuestionVoteNotifier.new);
