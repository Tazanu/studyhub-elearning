import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../../core/network/firestore_service.dart';
import '../../../auth/presentation/providers/auth_provider.dart';

// ── Subject filter ────────────────────────────────────────────────────────────
final tutorSubjectFilterProvider = StateProvider<String?>((ref) => null);

// ── Stream: verified tutors ───────────────────────────────────────────────────
final tutorsProvider = StreamProvider<List<Map<String, dynamic>>>((ref) {
  final subject = ref.watch(tutorSubjectFilterProvider);
  return FirestoreService.streamTutors(subject: subject).map((snap) => snap.docs
      .map((d) => {'id': d.id, ...d.data() as Map<String, dynamic>})
      .toList());
});

// ── Book tutor ────────────────────────────────────────────────────────────────
class TutorBookingNotifier extends Notifier<AsyncValue<void>> {
  @override
  AsyncValue<void> build() => const AsyncValue.data(null);

  Future<void> book(String tutorId, Map<String, dynamic> bookingData) async {
    state = const AsyncValue.loading();
    final user = ref.read(currentUserProvider).value;
    if (user == null) {
      state = AsyncValue.error('Not logged in', StackTrace.current);
      return;
    }
    state = await AsyncValue.guard(() => FirestoreService.bookTutor(tutorId, {
          ...bookingData,
          'studentId': user.uid,
          'studentName': user.displayName ?? 'Anonymous',
        }));
  }
}

final tutorBookingProvider =
    NotifierProvider<TutorBookingNotifier, AsyncValue<void>>(
        TutorBookingNotifier.new);
