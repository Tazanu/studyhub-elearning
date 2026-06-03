import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/constants/app_text_styles.dart';

class _AnswerData {
  final String content;
  final String author;
  final String time;
  final int votes;
  final bool isAccepted;
  final bool hasVoted;

  const _AnswerData({
    required this.content,
    required this.author,
    required this.time,
    required this.votes,
    required this.isAccepted,
    required this.hasVoted,
  });
}

class QuestionDetailScreen extends ConsumerWidget {
  final String questionId;
  final String questionTitle;
  final String questionContent;
  final String author;
  final String time;
  final List<String> tags;

  const QuestionDetailScreen({
    super.key,
    required this.questionId,
    required this.questionTitle,
    required this.questionContent,
    required this.author,
    required this.time,
    required this.tags,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final isMobile = MediaQuery.of(context).size.width < 768;

    return Scaffold(
      backgroundColor: AppColors.backgroundGray,
      body: isMobile ? _MobileLayout(question: this) : _DesktopLayout(question: this),
    );
  }
}

class _MobileLayout extends StatelessWidget {
  final QuestionDetailScreen question;
  const _MobileLayout({required this.question});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        _MobileHeader(question: question),
        Expanded(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _MobileAnswersSection(question: question),
                const SizedBox(height: 24),
                _MobileAnswerForm(question: question),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

class _DesktopLayout extends StatelessWidget {
  final QuestionDetailScreen question;
  const _DesktopLayout({required this.question});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        const SizedBox(width: 240),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 20),
              _DesktopHeader(question: question),
              const SizedBox(height: 24),
              _DesktopAnswersSection(question: question),
              const SizedBox(height: 24),
              _DesktopAnswerForm(question: question),
            ],
          ),
        ),
        const _RightSidebar(),
      ],
    );
  }
}

class _MobileHeader extends StatelessWidget {
  final QuestionDetailScreen question;
  const _MobileHeader({required this.question});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      color: AppColors.backgroundWhite,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          IconButton(
            icon: const Icon(Icons.arrow_back, color: AppColors.primary),
            onPressed: () => Navigator.pop(context),
          ),
          const SizedBox(height: 16),
          Text(question.questionTitle, style: const TextStyle(
            fontSize: 18, fontWeight: FontWeight.w700, color: AppColors.textPrimary,
          )),
          const SizedBox(height: 12),
          Text(question.questionContent, style: const TextStyle(
            fontSize: 14, color: AppColors.textSecondary, height: 1.5,
          )),
          const SizedBox(height: 12),
          Wrap(
            spacing: 6,
            children: question.tags.map((tag) => Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              decoration: BoxDecoration(
                color: AppColors.tagPrimary.withOpacity(0.1),
                borderRadius: BorderRadius.circular(4),
              ),
              child: Text('#$tag', style: TextStyle(
                fontSize: 11, fontWeight: FontWeight.w600, color: AppColors.tagPrimary,
              )),
            )).toList(),
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              const CircleAvatar(radius: 10, backgroundColor: AppColors.primary,
                child: Text('A', style: TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w700))),
              const SizedBox(width: 6),
              Text('${question.author} • ${question.time}', style: const TextStyle(
                fontSize: 12, color: AppColors.textTertiary,
              )),
            ],
          ),
        ],
      ),
    );
  }
}

class _DesktopHeader extends StatelessWidget {
  final QuestionDetailScreen question;
  const _DesktopHeader({required this.question});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: AppColors.backgroundWhite,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: AppColors.borderGray),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              IconButton(
                icon: const Icon(Icons.arrow_back, color: AppColors.primary),
                onPressed: () => Navigator.pop(context),
              ),
              const SizedBox(width: 8),
              Text(question.questionTitle, style: const TextStyle(
                fontSize: 20, fontWeight: FontWeight.w700, color: AppColors.textPrimary,
              )),
            ],
          ),
          const SizedBox(height: 16),
          Text(question.questionContent, style: const TextStyle(
            fontSize: 14, color: AppColors.textSecondary, height: 1.6,
          )),
          const SizedBox(height: 16),
          Wrap(
            spacing: 8,
            children: question.tags.map((tag) => Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
              decoration: BoxDecoration(
                color: AppColors.tagPrimary.withOpacity(0.1),
                borderRadius: BorderRadius.circular(6),
              ),
              child: Text('#$tag', style: TextStyle(
                fontSize: 12, fontWeight: FontWeight.w600, color: AppColors.tagPrimary,
              )),
            )).toList(),
          ),
          const SizedBox(height: 16),
          Row(
            children: [
              const CircleAvatar(radius: 12, backgroundColor: AppColors.primary,
                child: Text('A', style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w700))),
              const SizedBox(width: 8),
              Text('${question.author} • ${question.time}', style: const TextStyle(
                fontSize: 13, color: AppColors.textTertiary,
              )),
            ],
          ),
        ],
      ),
    );
  }
}

class _MobileAnswersSection extends ConsumerWidget {
  final QuestionDetailScreen question;
  const _MobileAnswersSection({required this.question});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text('Answers', style: AppTextStyles.heading4),
            Text('1 answer', style: const TextStyle(
              fontSize: 12, color: AppColors.textTertiary,
            )),
          ],
        ),
        const SizedBox(height: 12),
        _MobileAnswerCard(),
      ],
    );
  }

  Widget _MobileAnswerCard() {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: AppColors.backgroundWhite,
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: AppColors.borderGray),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Column(
                children: [
                  const Icon(Icons.thumb_up_alt, size: 18, color: AppColors.textTertiary),
                  const SizedBox(height: 4),
                  const Text('24', style: TextStyle(
                    fontSize: 12, fontWeight: FontWeight.w700, color: AppColors.primary,
                  )),
                ],
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: AppColors.backgroundGray,
                        borderRadius: BorderRadius.circular(6),
                      ),
                      child: Text('This is a helpful answer that explains the concept clearly. It provides multiple examples and links to additional resources for further reading.', style: const TextStyle(
                        fontSize: 13, color: AppColors.textSecondary, height: 1.5,
                      )),
                    ),
                    const SizedBox(height: 8),
                    Row(
                      children: [
                        const CircleAvatar(radius: 8, backgroundColor: AppColors.success,
                          child: Text('✓', style: TextStyle(color: Colors.white, fontSize: 8, fontWeight: FontWeight.w700))),
                        const SizedBox(width: 6),
                        Text('Accepted answer', style: const TextStyle(
                          fontSize: 11, fontWeight: FontWeight.w600, color: AppColors.success,
                        )),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Row(
            children: [
              const Text('by John Smith', style: TextStyle(
                fontSize: 12, color: AppColors.textSecondary,
              )),
              const SizedBox(width: 12),
              const Text('• 3h ago', style: TextStyle(
                fontSize: 12, color: AppColors.textTertiary,
              )),
              const Spacer(),
              _MobileAnswerAction(icon: Icons.thumb_up_alt_outlined, label: 'Vote'),
              const SizedBox(width: 8),
              _MobileAnswerAction(icon: Icons.chat_bubble_outline, label: 'Reply'),
              const SizedBox(width: 8),
              _MobileAnswerAction(icon: Icons.share_outlined, label: 'Share'),
            ],
          ),
        ],
      ),
    );
  }
}

class _DesktopAnswersSection extends ConsumerWidget {
  final QuestionDetailScreen question;
  const _DesktopAnswersSection({required this.question});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text('1 Answer', style: AppTextStyles.heading4),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
              decoration: BoxDecoration(
                color: AppColors.backgroundWhite,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: AppColors.borderGray),
              ),
              child: const Text('Oldest first', style: TextStyle(
                fontSize: 13, color: AppColors.textSecondary,
              )),
            ),
          ],
        ),
        const SizedBox(height: 16),
        _DesktopAnswerCard(),
      ],
    );
  }

  Widget _DesktopAnswerCard() {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.backgroundWhite,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: AppColors.borderGray),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Column(
            children: [
              _VoteButton(),
              const SizedBox(height: 8),
              const Text('24', style: TextStyle(
                fontSize: 16, fontWeight: FontWeight.w700, color: AppColors.primary,
              )),
              const SizedBox(height: 4),
              Container(
                width: 36,
                height: 2,
                decoration: BoxDecoration(
                  color: AppColors.backgroundGray,
                  borderRadius: BorderRadius.circular(1),
                ),
              ),
            ],
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: AppColors.backgroundGray,
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Text('This is a helpful answer that explains the concept clearly. It provides multiple examples and links to additional resources for further reading.', style: const TextStyle(
                    fontSize: 14, color: AppColors.textSecondary, height: 1.6,
                  )),
                ),
                const SizedBox(height: 12),
                Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(
                        color: AppColors.successLight,
                        borderRadius: BorderRadius.circular(4),
                      ),
                      child: const Row(
                        children: [
                          Icon(Icons.check, size: 12, color: AppColors.success),
                          SizedBox(width: 4),
                          Text('Accepted', style: TextStyle(
                            fontSize: 10, fontWeight: FontWeight.w600, color: AppColors.success,
                          )),
                        ],
                      ),
                    ),
                    const Spacer(),
                    Row(
                      children: [
                        _DesktopAnswerAction(icon: Icons.thumb_up_alt_outlined, label: 'Vote'),
                        const SizedBox(width: 12),
                        _DesktopAnswerAction(icon: Icons.chat_bubble_outline, label: 'Reply'),
                        const SizedBox(width: 12),
                        _DesktopAnswerAction(icon: Icons.share_outlined, label: 'Share'),
                      ],
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    const CircleAvatar(radius: 10, backgroundColor: AppColors.primary,
                      child: Text('A', style: TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w700))),
                    const SizedBox(width: 6),
                    const Text('by John Smith', style: TextStyle(
                      fontSize: 13, color: AppColors.textSecondary,
                    )),
                    const SizedBox(width: 12),
                    const Text('• 3h ago', style: TextStyle(
                      fontSize: 12, color: AppColors.textTertiary,
                    )),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _MobileAnswerForm extends StatefulWidget {
  final QuestionDetailScreen question;
  const _MobileAnswerForm({required this.question});

  @override
  State<_MobileAnswerForm> createState() => _MobileAnswerFormState();
}

class _MobileAnswerFormState extends State<_MobileAnswerForm> {
  final _controller = TextEditingController();
  bool _isEditing = false;

  @override
  Widget build(BuildContext context) {
    if (!_isEditing) {
      return Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: AppColors.backgroundWhite,
          borderRadius: BorderRadius.circular(10),
          border: Border.all(color: AppColors.borderGray),
        ),
        child: Column(
          children: [
            IconButton(
              icon: const Icon(Icons.edit, size: 18, color: AppColors.primary),
              onPressed: () => setState(() => _isEditing = true),
            ),
            const Text('Your answer', style: TextStyle(
              fontSize: 13, color: AppColors.textTertiary,
            )),
          ],
        ),
      );
    }

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.backgroundWhite,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: AppColors.borderGray),
      ),
      child: Column(
        children: [
          TextField(
            controller: _controller,
            maxLines: 4,
            decoration: const InputDecoration(
              hintText: 'Share your knowledge...',
              border: OutlineInputBorder(),
              fillColor: Colors.white,
              filled: true,
            ),
          ),
          const SizedBox(height: 12),
          Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              TextButton(
                onPressed: () => setState(() => _isEditing = false),
                child: const Text('Cancel', style: TextStyle(color: AppColors.textSecondary)),
              ),
              const SizedBox(width: 8),
              ElevatedButton(
                onPressed: () {
                  if (_controller.text.trim().isNotEmpty) {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(
                        content: Text('Answer posted successfully!'),
                        backgroundColor: AppColors.accent,
                      ),
                    );
                    setState(() => _isEditing = false);
                    _controller.clear();
                  }
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primary,
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                ),
                child: const Text('Post Answer', style: TextStyle(color: Colors.white)),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _DesktopAnswerForm extends StatefulWidget {
  final QuestionDetailScreen question;
  const _DesktopAnswerForm({required this.question});

  @override
  State<_DesktopAnswerForm> createState() => _DesktopAnswerFormState();
}

class _DesktopAnswerFormState extends State<_DesktopAnswerForm> {
  final _controller = TextEditingController();
  bool _isEditing = false;

  @override
  Widget build(BuildContext context) {
    if (!_isEditing) {
      return Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: AppColors.backgroundWhite,
          borderRadius: BorderRadius.circular(10),
          border: Border.all(color: AppColors.borderGray),
        ),
        child: Row(
          children: [
            const CircleAvatar(radius: 18, backgroundColor: AppColors.primary,
              child: Text('A', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700))),
            const SizedBox(width: 12),
            Expanded(
              child: Container(
                height: 44,
                padding: const EdgeInsets.symmetric(horizontal: 16),
                decoration: BoxDecoration(
                  color: AppColors.backgroundGray,
                  borderRadius: BorderRadius.circular(22),
                  border: Border.all(color: AppColors.borderGray),
                ),
                child: const Text('Add your answer', style: TextStyle(
                  fontSize: 14, color: AppColors.textTertiary,
                )),
              ),
            ),
            ElevatedButton(
              onPressed: () => setState(() => _isEditing = true),
              style: ElevatedButton.styleFrom(
                backgroundColor: AppColors.primary,
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              ),
              child: const Text('Answer', style: TextStyle(color: Colors.white)),
            ),
          ],
        ),
      );
    }

    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: AppColors.backgroundWhite,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: AppColors.borderGray),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text('Write your answer', style: TextStyle(
            fontSize: 14, fontWeight: FontWeight.w600, color: AppColors.textPrimary,
          )),
          const SizedBox(height: 12),
          TextField(
            controller: _controller,
            maxLines: 6,
            decoration: const InputDecoration(
              hintText: 'Provide a detailed answer...',
              border: OutlineInputBorder(),
              fillColor: Colors.white,
              filled: true,
            ),
          ),
          const SizedBox(height: 12),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  IconButton(
                    icon: const Icon(Icons.attach_file, size: 18, color: AppColors.textSecondary),
                    onPressed: () {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Select a file to attach...')),
                      );
                    },
                  ),
                  IconButton(
                    icon: const Icon(Icons.format_quote, size: 18, color: AppColors.textSecondary),
                    onPressed: () {},
                  ),
                ],
              ),
              Row(
                children: [
                  TextButton(
                    onPressed: () => setState(() => _isEditing = false),
                    child: const Text('Cancel', style: TextStyle(color: AppColors.textSecondary)),
                  ),
                  const SizedBox(width: 12),
                  ElevatedButton(
                    onPressed: () {
                      if (_controller.text.trim().isNotEmpty) {
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(
                            content: Text('Answer posted successfully!'),
                            backgroundColor: AppColors.accent,
                          ),
                        );
                        setState(() => _isEditing = false);
                        _controller.clear();
                      }
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppColors.primary,
                      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                    ),
                    child: const Text('Post Answer', style: TextStyle(color: Colors.white)),
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _RightSidebar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 300,
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                colors: [AppColors.primary, AppColors.accent],
                begin: Alignment.topLeft, end: Alignment.bottomRight,
              ),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Help others learn', style: TextStyle(
                  color: Colors.white, fontWeight: FontWeight.w700, fontSize: 14,
                )),
                const SizedBox(height: 8),
                const Text('Answer questions and earn reputation points.', style: TextStyle(
                  color: Colors.white70, fontSize: 12, height: 1.5,
                )),
                const SizedBox(height: 12),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: () => context.go('/forum'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(vertical: 10),
                    ),
                    child: const Text('Browse Questions', style: TextStyle(
                      color: AppColors.primary, fontWeight: FontWeight.w700,
                    )),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),
          const Text('Related Questions', style: AppTextStyles.heading4),
          const SizedBox(height: 12),
          _RelatedQuestion(
            title: 'How to master Flutter state management?',
            tags: ['flutter', 'dart'],
          ),
          const SizedBox(height: 8),
          _RelatedQuestion(
            title: 'Understanding React hooks best practices?',
            tags: ['reactjs', 'javascript'],
          ),
        ],
      ),
    );
  }
}

class _RelatedQuestion extends StatelessWidget {
  final String title;
  final List<String> tags;
  const _RelatedQuestion({required this.title, required this.tags});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: AppColors.backgroundWhite,
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: AppColors.borderGray),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: const TextStyle(
            fontSize: 13, fontWeight: FontWeight.w600, color: AppColors.textPrimary,
          )),
          const SizedBox(height: 8),
          Wrap(
            spacing: 6,
            children: tags.map((tag) => Container(
              padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
              decoration: BoxDecoration(
                color: AppColors.tagPrimary.withOpacity(0.1),
                borderRadius: BorderRadius.circular(4),
              ),
              child: Text('#$tag', style: TextStyle(
                fontSize: 10, fontWeight: FontWeight.w600, color: AppColors.tagPrimary,
              )),
            )).toList(),
          ),
        ],
      ),
    );
  }
}

class _MobileAnswerAction extends StatelessWidget {
  final IconData icon;
  final String label;
  const _MobileAnswerAction({required this.icon, required this.label});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Icon(icon, size: 16, color: AppColors.textTertiary),
        const SizedBox(width: 4),
        Text(label, style: const TextStyle(
          fontSize: 11, color: AppColors.textTertiary,
        )),
      ],
    );
  }
}

class _DesktopAnswerAction extends StatelessWidget {
  final IconData icon;
  final String label;
  const _DesktopAnswerAction({required this.icon, required this.label});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Icon(icon, size: 16, color: AppColors.textTertiary),
        const SizedBox(width: 4),
        Text(label, style: const TextStyle(
          fontSize: 12, color: AppColors.textTertiary,
        )),
      ],
    );
  }
}

class _VoteButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 36,
      height: 36,
      decoration: BoxDecoration(
        color: AppColors.backgroundGray,
        borderRadius: BorderRadius.circular(4),
      ),
      child: const Icon(Icons.thumb_up_alt_outlined, size: 18, color: AppColors.textTertiary),
    );
  }
}
