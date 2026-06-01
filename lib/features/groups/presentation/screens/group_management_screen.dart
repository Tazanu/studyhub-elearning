import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:timeago/timeago.dart' as timeago;
import '../../../../core/constants/app_colors.dart';
import '../../../../core/network/firestore_service.dart';
import '../providers/groups_provider.dart';
import '../../../auth/presentation/providers/auth_provider.dart';
import 'group_chat_screen.dart';
import 'group_notes_screen.dart';

class GroupManagementScreen extends ConsumerStatefulWidget {
  final String groupId;

  const GroupManagementScreen({
    super.key,
    required this.groupId,
  });

  @override
  ConsumerState<GroupManagementScreen> createState() => _GroupManagementScreenState();
}

class _GroupManagementScreenState extends ConsumerState<GroupManagementScreen> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  Future<void> _leaveGroup() async {
    final confirmed = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Leave Group'),
        content: const Text('Are you sure you want to leave this group?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () => Navigator.pop(context, true),
            style: ElevatedButton.styleFrom(backgroundColor: AppColors.error),
            child: const Text('Leave', style: TextStyle(color: Colors.white)),
          ),
        ],
      ),
    );

    if (confirmed == true) {
      await ref.read(leaveGroupProvider(widget.groupId).future);
      if (mounted) {
        Navigator.pop(context);
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('You have left the group'), backgroundColor: AppColors.accent),
        );
      }
    }
  }

  Future<void> _deleteGroup() async {
    final confirmed = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Delete Group'),
        content: const Text('Are you sure you want to delete this group? This action cannot be undone.'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () => Navigator.pop(context, true),
            style: ElevatedButton.styleFrom(backgroundColor: AppColors.error),
            child: const Text('Delete', style: TextStyle(color: Colors.white)),
          ),
        ],
      ),
    );

    if (confirmed == true) {
      await ref.read(deleteGroupProvider(widget.groupId).future);
      if (mounted) {
        Navigator.pop(context);
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Group deleted'), backgroundColor: AppColors.accent),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final groupAsync = ref.watch(selectedGroupProvider(widget.groupId));
    final currentUserId = ref.watch(currentUserProvider).value?.uid;

    return Scaffold(
      appBar: AppBar(
        title: groupAsync.when(
          data: (group) => Text(group?['name'] ?? 'Group', style: const TextStyle(fontWeight: FontWeight.w600)),
          loading: () => const Text('Loading...', style: TextStyle(fontWeight: FontWeight.w600)),
          error: (_, __) => const Text('Group', style: TextStyle(fontWeight: FontWeight.w600)),
        ),
        backgroundColor: AppColors.surface,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: AppColors.neutral),
          onPressed: () => Navigator.pop(context),
        ),
        actions: [
          PopupMenuButton<String>(
            onSelected: (value) {
              if (value == 'leave') _leaveGroup();
              if (value == 'delete') _deleteGroup();
            },
            itemBuilder: (context) => [
              const PopupMenuItem(
                value: 'leave',
                child: Row(
                  children: [
                    Icon(Icons.exit_to_app, size: 18),
                    SizedBox(width: 8),
                    Text('Leave Group'),
                  ],
                ),
              ),
              if (groupAsync.value?['adminId'] == currentUserId)
                const PopupMenuItem(
                  value: 'delete',
                  child: Row(
                    children: [
                      Icon(Icons.delete, size: 18, color: AppColors.error),
                      SizedBox(width: 8),
                      Text('Delete Group', style: TextStyle(color: AppColors.error)),
                    ],
                  ),
                ),
            ],
          ),
        ],
      ),
      body: groupAsync.when(
        data: (group) {
          if (group == null) {
            return const Center(child: Text('Group not found'));
          }
          return Column(
            children: [
              // Group header
              _buildGroupHeader(group),
              // Tabs
              TabBar(
                controller: _tabController,
                tabs: const [
                  Tab(text: 'Members'),
                  Tab(text: 'Chat'),
                  Tab(text: 'Notes'),
                ],
                labelColor: AppColors.primary,
                unselectedLabelColor: AppColors.textTertiary,
                indicatorColor: AppColors.primary,
              ),
              // Tab content
              Expanded(
                child: TabBarView(
                  controller: _tabController,
                  children: [
                    _buildMembersTab(group),
                    GroupChatScreen(groupId: widget.groupId, groupName: group['name'] ?? ''),
                    GroupNotesScreen(groupId: widget.groupId, groupName: group['name'] ?? ''),
                  ],
                ),
              ),
            ],
          );
        },
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (error, stack) => Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(Icons.error_outline, size: 48, color: AppColors.error),
              const SizedBox(height: 16),
              Text('Error loading group: $error'),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildGroupHeader(Map<String, dynamic> group) {
    final memberCount = (group['memberIds'] as List?)?.length ?? 0;
    final isPrivate = group['isPrivate'] ?? false;

    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: AppColors.surface,
        border: Border(bottom: BorderSide(color: AppColors.borderGray)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 64,
                height: 64,
                decoration: BoxDecoration(
                  color: AppColors.primary,
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Center(
                  child: Text(
                    (group['name'] ?? '?').substring(0, 1).toUpperCase(),
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 24,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Text(
                          group['name'] ?? '',
                          style: const TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                        if (isPrivate) ...[
                          const SizedBox(width: 8),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                            decoration: BoxDecoration(
                              color: AppColors.primary.withOpacity(0.1),
                              borderRadius: BorderRadius.circular(4),
                            ),
                            child: const Text(
                              'Private',
                              style: TextStyle(
                                fontSize: 10,
                                fontWeight: FontWeight.w600,
                                color: AppColors.primary,
                              ),
                            ),
                          ),
                        ],
                      ],
                    ),
                    const SizedBox(height: 4),
                    Text(
                      group['subject'] ?? '',
                      style: TextStyle(
                        fontSize: 14,
                        color: AppColors.textTertiary,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      '$memberCount members',
                      style: TextStyle(
                        fontSize: 12,
                        color: AppColors.textTertiary,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          if (group['description'] != null && group['description'].isNotEmpty) ...[
            const SizedBox(height: 12),
            Text(
              group['description'],
              style: TextStyle(
                fontSize: 13,
                color: AppColors.textSecondary,
                height: 1.4,
              ),
            ),
          ],
        ],
      ),
    );
  }

  Widget _buildMembersTab(Map<String, dynamic> group) {
    final memberIds = (group['memberIds'] as List?)?.cast<String>() ?? [];
    final adminId = group['adminId'] as String?;
    final currentUserId = ref.watch(currentUserProvider).value?.uid;
    final isAdmin = adminId == currentUserId;

    return FutureBuilder<List<Map<String, dynamic>>>(
      future: _loadMembers(memberIds),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Center(child: CircularProgressIndicator());
        }
        if (snapshot.hasError) {
          return Center(child: Text('Error: ${snapshot.error}'));
        }
        final members = snapshot.data ?? [];

        // Sort: admin first, then others
        members.sort((a, b) {
          if (a['uid'] == adminId) return -1;
          if (b['uid'] == adminId) return 1;
          return 0;
        });

        return ListView.builder(
          padding: const EdgeInsets.all(16),
          itemCount: members.length,
          itemBuilder: (context, index) {
            final member = members[index];
            final isMe = member['uid'] == currentUserId;
            final isMemberAdmin = member['uid'] == adminId;

            return Card(
              margin: const EdgeInsets.only(bottom: 8),
              child: ListTile(
                leading: CircleAvatar(
                  radius: 20,
                  backgroundColor: AppColors.primary.withOpacity(0.15),
                  backgroundImage: member['photoURL']?.isNotEmpty == true
                      ? NetworkImage(member['photoURL'])
                      : null,
                  child: member['photoURL']?.isNotEmpty != true
                      ? Text(
                          (member['name'] ?? '?').substring(0, 1).toUpperCase(),
                          style: const TextStyle(
                            color: AppColors.primary,
                            fontWeight: FontWeight.w700,
                          ),
                        )
                      : null,
                ),
                title: Row(
                  children: [
                    Text(
                      member['name'] ?? 'Unknown',
                      style: const TextStyle(fontWeight: FontWeight.w500),
                    ),
                    if (isMe)
                      Container(
                        margin: const EdgeInsets.only(left: 8),
                        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 1),
                        decoration: BoxDecoration(
                          color: AppColors.accent.withOpacity(0.1),
                          borderRadius: BorderRadius.circular(4),
                        ),
                        child: const Text(
                          'You',
                          style: TextStyle(
                            fontSize: 10,
                            fontWeight: FontWeight.w600,
                            color: AppColors.accent,
                          ),
                        ),
                      ),
                  ],
                ),
                subtitle: Text(
                  member['email'] ?? '',
                  style: TextStyle(fontSize: 12, color: AppColors.textTertiary),
                ),
                trailing: isMemberAdmin
                    ? Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                          color: AppColors.primary.withOpacity(0.1),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: const Text(
                          'Admin',
                          style: TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.w600,
                            color: AppColors.primary,
                          ),
                        ),
                      )
                    : isAdmin
                        ? IconButton(
                            icon: const Icon(Icons.remove_circle, color: AppColors.error),
                            onPressed: () => _removeMember(member['uid']),
                            tooltip: 'Remove from group',
                          )
                        : null,
              ),
            );
          },
        );
      },
    );
  }

  Future<List<Map<String, dynamic>>> _loadMembers(List<String> memberIds) async {
    final members = <Map<String, dynamic>>[];
    for (final uid in memberIds) {
      try {
        final doc = await FirestoreService.getUser(uid);
        if (doc.exists) {
          members.add({'uid': uid, ...doc.data() as Map<String, dynamic>});
        }
      } catch (e) {
        // Skip users that can't be loaded
      }
    }
    return members;
  }

  Future<void> _removeMember(String memberId) async {
    final confirmed = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Remove Member'),
        content: const Text('Are you sure you want to remove this member from the group?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () => Navigator.pop(context, true),
            style: ElevatedButton.styleFrom(backgroundColor: AppColors.error),
            child: const Text('Remove', style: TextStyle(color: Colors.white)),
          ),
        ],
      ),
    );

    if (confirmed == true) {
      await ref.read(removeMemberProvider({
        'groupId': widget.groupId,
        'memberId': memberId,
      }).future);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Member removed'), backgroundColor: AppColors.accent),
        );
      }
    }
  }
}