import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_sign_in/google_sign_in.dart';
import '../../../../core/network/firestore_service.dart';

final authProvider = StateNotifierProvider<AuthNotifier, AsyncValue<User?>>(
  (ref) => AuthNotifier(),
);

final currentUserProvider = StreamProvider<User?>(
  (ref) => FirebaseAuth.instance.authStateChanges(),
);

class AuthNotifier extends StateNotifier<AsyncValue<User?>> {
  AuthNotifier() : super(const AsyncValue.loading()) {
    FirebaseAuth.instance.authStateChanges().listen((user) {
      state = AsyncValue.data(user);
    });
  }

  Future<void> signInWithEmail(String email, String password) async {
    state = const AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      final cred = await FirebaseAuth.instance.signInWithEmailAndPassword(
        email: email, password: password,
      );
      return cred.user;
    });
  }

  Future<void> registerWithEmail(
      String email, String password, String name) async {
    state = const AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      final cred = await FirebaseAuth.instance.createUserWithEmailAndPassword(
        email: email, password: password,
      );
      await cred.user?.updateDisplayName(name);
      // Save profile to Firestore
      if (cred.user != null) {
        await FirestoreService.createUser(cred.user!.uid, {
          'uid': cred.user!.uid,
          'name': name,
          'email': email,
          'photoURL': '',
          'major': '',
          'bio': '',
          'createdAt': DateTime.now().toIso8601String(),
        });
      }
      return cred.user;
    });
  }

  Future<void> signInWithGoogle() async {
    state = const AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      final googleUser = await GoogleSignIn().signIn();
      if (googleUser == null) throw Exception('Google sign-in cancelled');
      final googleAuth = await googleUser.authentication;
      final credential = GoogleAuthProvider.credential(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      );
      final cred =
          await FirebaseAuth.instance.signInWithCredential(credential);
      // Upsert profile (merge: true so existing data is preserved)
      if (cred.user != null) {
        await FirestoreService.createUser(cred.user!.uid, {
          'uid': cred.user!.uid,
          'name': cred.user!.displayName ?? '',
          'email': cred.user!.email ?? '',
          'photoURL': cred.user!.photoURL ?? '',
          'createdAt': DateTime.now().toIso8601String(),
        });
      }
      return cred.user;
    });
  }

  Future<void> signOut() async {
    await FirebaseAuth.instance.signOut();
    await GoogleSignIn().signOut();
  }

  Future<void> resetPassword(String email) async {
    await FirebaseAuth.instance.sendPasswordResetEmail(email: email);
  }
}
