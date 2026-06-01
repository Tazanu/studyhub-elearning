import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:uuid/uuid.dart';
import '../../../../core/constants/app_colors.dart';
import '../providers/groups_provider.dart';

class CreateGroupDialog extends ConsumerStatefulWidget {
  const CreateGroupDialog({super.key});

  @override
  ConsumerState<CreateGroupDialog> createState() => _CreateGroupDialogState();
}

class _CreateGroupDialogState extends ConsumerState<CreateGroupDialog> {
  final _formKey = GlobalKey<FormState>();
  final _nameController = TextEditingController();
  final _descriptionController = TextEditingController();
  final _subjectController = TextEditingController();
  bool _isPrivate = false;

  @override
  void dispose() {
    _nameController.dispose();
    _descriptionController.dispose();
    _subjectController.dispose();
    super.dispose();
  }

  void _createGroup() async {
    if (!_formKey.currentState!.validate()) return;

    final formState = ref.read(createGroupFormProvider);
    if (!formState.isValid) return;

    final groupId = const Uuid().v4();
    
    await ref.read(createGroupProvider({
      'id': groupId,
      'name': formState.name.trim(),
      'description': formState.description.trim(),
      'subject': formState.subject.trim(),
      'isPrivate': formState.isPrivate,
      'createdAt': DateTime.now().toIso8601String(),
    }).future);

    if (mounted) {
      ref.read(createGroupFormProvider.notifier).reset();
      _nameController.clear();
      _descriptionController.clear();
      _subjectController.clear();
      setState(() => _isPrivate = false);
      Navigator.pop(context);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Group created successfully!'), backgroundColor: AppColors.accent),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Create Study Group', style: TextStyle(fontWeight: FontWeight.w700)),
      content: Form(
        key: _formKey,
        child: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextFormField(
                controller: _nameController,
                decoration: const InputDecoration(
                  labelText: 'Group Name *',
                  hintText: 'e.g., Biology 101',
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return 'Please enter a group name';
                  }
                  return null;
                },
                onChanged: (value) => ref.read(createGroupFormProvider.notifier).updateName(value),
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: _subjectController,
                decoration: const InputDecoration(
                  labelText: 'Subject *',
                  hintText: 'e.g., Biology, Mathematics, History',
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return 'Please enter a subject';
                  }
                  return null;
                },
                onChanged: (value) => ref.read(createGroupFormProvider.notifier).updateSubject(value),
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: _descriptionController,
                decoration: const InputDecoration(
                  labelText: 'Description (optional)',
                  hintText: 'What is this group about?',
                  border: OutlineInputBorder(),
                ),
                maxLines: 3,
                onChanged: (value) => ref.read(createGroupFormProvider.notifier).updateDescription(value),
              ),
              const SizedBox(height: 16),
              Row(
                children: [
                  Checkbox(
                    value: _isPrivate,
                    onChanged: (value) {
                      setState(() {
                        _isPrivate = value ?? false;
                      });
                      ref.read(createGroupFormProvider.notifier).toggleIsPrivate(_isPrivate);
                    },
                  ),
                  const Text('Private Group (only invited members can join)'),
                ],
              ),
            ],
          ),
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('Cancel'),
        ),
        ElevatedButton(
          onPressed: _createGroup,
          style: ElevatedButton.styleFrom(
            backgroundColor: AppColors.primary,
            padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
          ),
          child: const Text('Create Group', style: TextStyle(color: Colors.white)),
        ),
      ],
    );
  }
}