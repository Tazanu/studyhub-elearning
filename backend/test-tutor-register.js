const bcrypt = require('bcryptjs');
const prisma = require('./src/prisma');

async function test() {
    const email = 'tutor_x_' + Date.now() + '@test.com';
    const hash = await bcrypt.hash('Test123!', 10);

    console.log('Creating user...');
    const user = await prisma.users.create({
        data: { email, password: hash, first_name: 'John', last_name: 'Tutor', reputation: 100 },
        select: { id: true, email: true, first_name: true, last_name: true, university: true, field_of_study: true, role: true, reputation: true }
    });
    console.log('USER OK:', user.id);

    console.log('Creating tutor...');
    const tutor = await prisma.tutors.create({
        data: {
            user_id: user.id,
            bio: 'I make complex topics simple by building intuition first.',
            subjects: ['Mathematics'],
            hourly_rate: 800,
            years_experience: '1-2',
            availability: {},
            status: 'pending',
            applied_at: new Date()
        }
    });
    console.log('TUTOR OK:', tutor.id, 'status:', tutor.status);
}

test().catch(e => {
    console.error('FAIL:', e.message);
    console.error('CODE:', e.code);
    console.error('META:', JSON.stringify(e.meta));
}).finally(() => process.exit(0));
