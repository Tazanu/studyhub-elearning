import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../../core/network/firestore_service.dart';
import '../../../auth/presentation/providers/auth_provider.dart';

// ── Category filter ───────────────────────────────────────────────────────────
final notesCategoryProvider = StateProvider<String?>((ref) => null);

// ── Stream: verified notes ────────────────────────────────────────────────────
final notesProvider = StreamProvider<List<Map<String, dynamic>>>((ref) {
  final category = ref.watch(notesCategoryProvider);
  return FirestoreService.streamNotes(category: category).map((snap) => snap.docs
      .map((d) => {'id': d.id, ...d.data() as Map<String, dynamic>})
      .toList());
});

// ── Upload note ───────────────────────────────────────────────────────────────
final uploadNoteProvider =
    FutureProvider.family<void, Map<String, dynamic>>((ref, data) async {
  final user = ref.read(currentUserProvider).value;
  if (user == null) return;
  await FirestoreService.uploadNote({
    ...data,
    'sellerId': user.uid,
    'sellerName': user.displayName ?? 'Anonymous',
    'sellerPhoto': user.photoURL ?? '',
  });
});
