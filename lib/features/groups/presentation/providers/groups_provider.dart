import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'dart:io';
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

// ── Stream: messages for a given group ───────────────────────────────────────
final groupMessagesProvider =
    StreamProvider.family<List<Map<String, dynamic>>, String>((ref, groupId) {
  return FirestoreService.streamMessages(groupId).map((snap) => snap.docs
      .map((d) => {'id': d.id, ...d.data() as Map<String, dynamic>})
      .toList());
});

// ── Stream: notes for a given group ──────────────────────────────────────────
final groupNotesProvider =
    StreamProvider.family<List<Map<String, dynamic>>, String>((ref, groupId) {
  return FirestoreService.streamGroupNotes(groupId).map((snap) => snap.docs
      .map((d) => {'id': d.id, ...d.data() as Map<String, dynamic>})
      .toList());
});

// ── Selected group id ─────────────────────────────────────────────────────────
final selectedGroupIdProvider = StateProvider<String?>((ref) => null);

// ── Selected group data ───────────────────────────────────────────────────────
final selectedGroupProvider = FutureProvider.family<Map<String, dynamic>?, String>((ref, groupId) async {
  final doc = await FirestoreService.getGroup(groupId);
  if (!doc.exists) return null;
  return {'id': doc.id, ...doc.data() as Map<String, dynamic>};
});

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

// ── Update group ──────────────────────────────────────────────────────────────
final updateGroupProvider =
    FutureProvider.family<void, Map<String, dynamic>>((ref, data) async {
  final groupId = data['id'] as String;
  await FirestoreService.updateGroup(groupId, data);
});

// ── Delete group ──────────────────────────────────────────────────────────────
final deleteGroupProvider = FutureProvider.family<void, String>((ref, groupId) async {
  await FirestoreService.deleteGroup(groupId);
});

// ── Join group ────────────────────────────────────────────────────────────────
final joinGroupProvider = FutureProvider.family<void, String>((ref, groupId) async {
  final user = ref.read(currentUserProvider).value;
  if (user == null) return;
  await FirestoreService.joinGroup(groupId, user.uid);
});

// ── Leave group ───────────────────────────────────────────────────────────────
final leaveGroupProvider = FutureProvider.family<void, String>((ref, groupId) async {
  final user = ref.read(currentUserProvider).value;
  if (user == null) return;
  await FirestoreService.leaveGroup(groupId, user.uid);
});

// ── Remove member ─────────────────────────────────────────────────────────────
final removeMemberProvider = FutureProvider.family<void, Map<String, String>>((ref, data) async {
  final groupId = data['groupId']!;
  final memberId = data['memberId']!;
  await FirestoreService.removeMember(groupId, memberId);
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

// ── Send message ──────────────────────────────────────────────────────────────
final sendMessageProvider =
    FutureProvider.family<void, Map<String, dynamic>>((ref, data) async {
  final user = ref.read(currentUserProvider).value;
  if (user == null) return;
  await FirestoreService.sendMessage({
    ...data,
    'senderId': user.uid,
    'senderName': user.displayName ?? 'Anonymous',
    'senderPhoto': user.photoURL ?? '',
  });
});

// ── Upload group note ─────────────────────────────────────────────────────────
final uploadGroupNoteProvider =
    FutureProvider.family<void, Map<String, dynamic>>((ref, data) async {
  final user = ref.read(currentUserProvider).value;
  if (user == null) return;
  await FirestoreService.uploadGroupNote({
    ...data,
    'uploadedBy': user.uid,
    'uploaderName': user.displayName ?? 'Anonymous',
  });
});

// ── Upload file to Firebase Storage ───────────────────────────────────────────
final uploadFileProvider = FutureProvider.family<String, UploadFileParams>((ref, params) async {
  final file = params.file;
  final path = params.path;
  final fileName = params.fileName;
  
  final storageRef = FirebaseStorage.instance.ref().child(path).child(fileName);
  
  UploadTask uploadTask;
  if (file is File) {
    uploadTask = storageRef.putFile(file);
  } else {
    throw Exception('Unsupported file type');
  }
  
  final snapshot = await uploadTask;
  final downloadUrl = await snapshot.ref.getDownloadURL();
  return downloadUrl;
});

class UploadFileParams {
  final dynamic file;
  final String path;
  final String fileName;
  
  UploadFileParams({
    required this.file,
    required this.path,
    required this.fileName,
  });
}

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

// ── Chat input text state ────────────────────────────────────────────────────
final chatInputProvider = StateProvider<String>((ref) => '');

// ── Create group form state ───────────────────────────────────────────────────
class CreateGroupFormState {
  final String name;
  final String description;
  final String subject;
  final bool isPrivate;

  CreateGroupFormState({
    this.name = '',
    this.description = '',
    this.subject = '',
    this.isPrivate = false,
  });

  CreateGroupFormState copyWith({
    String? name,
    String? description,
    String? subject,
    bool? isPrivate,
  }) {
    return CreateGroupFormState(
      name: name ?? this.name,
      description: description ?? this.description,
      subject: subject ?? this.subject,
      isPrivate: isPrivate ?? this.isPrivate,
    );
  }

  bool get isValid => name.trim().isNotEmpty && subject.trim().isNotEmpty;
}

class CreateGroupFormNotifier extends StateNotifier<CreateGroupFormState> {
  CreateGroupFormNotifier() : super(CreateGroupFormState());

  void updateName(String name) => state = state.copyWith(name: name);
  void updateDescription(String description) => state = state.copyWith(description: description);
  void updateSubject(String subject) => state = state.copyWith(subject: subject);
  void toggleIsPrivate(bool isPrivate) => state = state.copyWith(isPrivate: isPrivate);
  void reset() => state = CreateGroupFormState();
}

final createGroupFormProvider = StateNotifierProvider<CreateGroupFormNotifier, CreateGroupFormState>((ref) {
  return CreateGroupFormNotifier();
});