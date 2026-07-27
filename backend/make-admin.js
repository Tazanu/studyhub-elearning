require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const email = process.argv[2];
if (!email) { console.error('Usage: node make-admin.js <email>'); process.exit(1); }

p.users.update({ where: { email }, data: { role: 'admin' }, select: { id: true, email: true, role: true } })
    .then(u => console.log('✅ Admin set:', u))
    .catch(e => console.error('❌', e.message))
    .finally(() => p.$disconnect());
