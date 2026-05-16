import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../../core/network/firestore_service.dart';
import '../../../auth/presentation/providers/auth_provider.dart';

// ── Stream: recent questions for dashboard ────────────────────────────────────
final dashboardQuestionsProvider =
    StreamProvider<List<Map<String, dynamic>>>((ref) {
  return FirestoreService.streamQuestions().map((snap) =>
      snap.docs
          .take(5)
          .map((d) => {'id': d.id, ...d.data() as Map<String, dynamic>})
          .toList());
});

// ── Stream: recent notes for dashboard sidebar ────────────────────────────────
final dashboardNotesProvider =
    StreamProvider<List<Map<String, dynamic>>>((ref) {
  return FirestoreService.streamNotes().map((snap) =>
      snap.docs
          .take(3)
          .map((d) => {'id': d.id, ...d.data() as Map<String, dynamic>})
          .toList());
});

// ── Stream: featured group session ───────────────────────────────────────────
final featuredGroupProvider =
    StreamProvider<Map<String, dynamic>?>((ref) {
  final user = ref.watch(currentUserProvider).value;
  if (user == null) return Stream.value(null);
  return FirestoreService.streamGroups(user.uid).map((snap) {
    if (snap.docs.isEmpty) return null;
    final d = snap.docs.first;
    return {'id': d.id, ...d.data() as Map<String, dynamic>};
  });
});
