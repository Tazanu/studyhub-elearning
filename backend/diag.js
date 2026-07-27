const p = require('./src/prisma');
async function t() {
  const checks = [
    ['user_groups', () => p.user_groups.count({ where: { user_id: 2 } })],
    ['notes', () => p.notes.count({ where: { uploaded_by: 2, is_active: true } })],
    ['questions', () => p.questions.count({ where: { author_id: 2 } })],
    ['answers', () => p.answers.count({ where: { author_id: 2 } })],
    ['accepted', () => p.answers.count({ where: { author_id: 2, is_accepted: true } })],
    ['downloads', () => p.notes.aggregate({ where: { uploaded_by: 2, is_active: true }, _sum: { downloads: true } })],
    ['user', () => p.users.findUnique({ where: { id: 2 }, select: { reputation: true } })],
    ['tutor', () => p.tutors.findFirst({ where: { user_id: 2, status: 'approved' } })],
  ];
  for (const [n, f] of checks) {
    try { await f(); console.log('OK', n); }
    catch (e) { console.error('FAIL', n, e.message); }
  }
  await p.$disconnect();
}
t();
