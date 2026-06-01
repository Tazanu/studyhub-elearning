import 'package:cloud_firestore/cloud_firestore.dart';

class FirestoreService {
  static final _db = FirebaseFirestore.instance;

  // ── Collections ──────────────────────────────────────────
  static CollectionReference get users => _db.collection('users');
  static CollectionReference get groups => _db.collection('groups');
  static CollectionReference get posts => _db.collection('posts');
  static CollectionReference get questions => _db.collection('questions');
  static CollectionReference get notes => _db.collection('notes');
  static CollectionReference get tutors => _db.collection('tutors');
  static CollectionReference get messages => _db.collection('messages');
  static CollectionReference get groupNotes => _db.collection('groupNotes');

  // ── User ─────────────────────────────────────────────────
  static Future<void> createUser(String uid, Map<String, dynamic> data) =>
      users.doc(uid).set(data, SetOptions(merge: true));

  static Future<DocumentSnapshot> getUser(String uid) =>
      users.doc(uid).get();

  static Future<void> updateUser(String uid, Map<String, dynamic> data) =>
      users.doc(uid).update(data);

  // ── Groups ────────────────────────────────────────────────
  static Stream<QuerySnapshot> streamGroups(String uid) => groups
      .where('memberIds', arrayContains: uid)
      .orderBy('updatedAt', descending: true)
      .snapshots();

  static Future<DocumentReference> createGroup(Map<String, dynamic> data) =>
      groups.add({...data, 'memberIds': data['memberIds'] ?? [], 'adminId': data['adminId'], 'createdAt': FieldValue.serverTimestamp(), 'updatedAt': FieldValue.serverTimestamp()});

  static Future<void> joinGroup(String groupId, String uid) =>
      groups.doc(groupId).update({'memberIds': FieldValue.arrayUnion([uid])});

  static Future<void> leaveGroup(String groupId, String uid) =>
      groups.doc(groupId).update({'memberIds': FieldValue.arrayRemove([uid])});

  static Future<void> updateGroup(String groupId, Map<String, dynamic> data) =>
      groups.doc(groupId).update({...data, 'updatedAt': FieldValue.serverTimestamp()});

  static Future<void> removeMember(String groupId, String uid) =>
      groups.doc(groupId).update({'memberIds': FieldValue.arrayRemove([uid])});

  static Future<void> deleteGroup(String groupId) =>
      groups.doc(groupId).delete();

  static Future<DocumentSnapshot> getGroup(String groupId) =>
      groups.doc(groupId).get();

  static Stream<DocumentSnapshot> streamGroup(String groupId) =>
      groups.doc(groupId).snapshots();

  // ── Posts ─────────────────────────────────────────────────
  static Stream<QuerySnapshot> streamPosts(String groupId) => posts
      .where('groupId', isEqualTo: groupId)
      .orderBy('createdAt', descending: true)
      .snapshots();

  static Future<DocumentReference> createPost(Map<String, dynamic> data) =>
      posts.add({...data, 'createdAt': FieldValue.serverTimestamp()});

  static Future<void> likePost(String postId, String uid) =>
      posts.doc(postId).update({'likes': FieldValue.arrayUnion([uid])});

  static Future<void> unlikePost(String postId, String uid) =>
      posts.doc(postId).update({'likes': FieldValue.arrayRemove([uid])});

  // ── Messages (Real-time Chat) ─────────────────────────────
  static Stream<QuerySnapshot> streamMessages(String groupId) => messages
      .where('groupId', isEqualTo: groupId)
      .orderBy('createdAt', descending: false)
      .snapshots();

  static Future<DocumentReference> sendMessage(Map<String, dynamic> data) =>
      messages.add({...data, 'createdAt': FieldValue.serverTimestamp(), 'isRead': false});

  static Future<void> markMessageAsRead(String messageId) =>
      messages.doc(messageId).update({'isRead': true});

  // ── Group Notes (Files in groups) ─────────────────────────
  static Stream<QuerySnapshot> streamGroupNotes(String groupId) => groupNotes
      .where('groupId', isEqualTo: groupId)
      .orderBy('createdAt', descending: true)
      .snapshots();

  static Future<DocumentReference> uploadGroupNote(Map<String, dynamic> data) =>
      groupNotes.add({...data, 'createdAt': FieldValue.serverTimestamp()});

  static Future<void> deleteGroupNote(String noteId) =>
      groupNotes.doc(noteId).delete();

  static Future<DocumentSnapshot> getGroupNote(String noteId) =>
      groupNotes.doc(noteId).get();

  // ── Questions ─────────────────────────────────────────────
  static Stream<QuerySnapshot> streamQuestions({String? tag}) {
    Query q = questions.orderBy('createdAt', descending: true);
    if (tag != null) q = q.where('tags', arrayContains: tag);
    return q.snapshots();
  }

  static Future<DocumentReference> createQuestion(Map<String, dynamic> data) =>
      questions.add({...data, 'createdAt': FieldValue.serverTimestamp(), 'votes': 0, 'views': 0});

  static Future<void> voteQuestion(String qId, String uid, bool upvote) =>
      questions.doc(qId).update({
        'votes': FieldValue.increment(upvote ? 1 : -1),
        'voters': upvote ? FieldValue.arrayUnion([uid]) : FieldValue.arrayRemove([uid]),
      });

  static Future<void> markSolved(String qId) =>
      questions.doc(qId).update({'isSolved': true});

  // ── Notes Marketplace ─────────────────────────────────────
  static Stream<QuerySnapshot> streamNotes({String? category}) {
    Query q = notes.where('isVerified', isEqualTo: true).orderBy('rating', descending: true);
    if (category != null) q = q.where('category', isEqualTo: category);
    return q.snapshots();
  }

  static Future<DocumentReference> uploadNote(Map<String, dynamic> data) =>
      notes.add({...data, 'createdAt': FieldValue.serverTimestamp(), 'isVerified': false, 'rating': 0.0, 'reviews': 0});

  // ── Tutors ────────────────────────────────────────────────
  static Stream<QuerySnapshot> streamTutors({String? subject}) {
    Query q = tutors.where('isVerified', isEqualTo: true).orderBy('rating', descending: true);
    if (subject != null) q = q.where('subjects', arrayContains: subject);
    return q.snapshots();
  }

  static Future<void> bookTutor(String tutorId, Map<String, dynamic> bookingData) =>
      tutors.doc(tutorId).collection('bookings').add({
        ...bookingData,
        'createdAt': FieldValue.serverTimestamp(),
        'status': 'pending',
      });
}
