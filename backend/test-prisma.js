require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function test() {
    try {
        await prisma.$connect();
        console.log('✅ Database connected successfully!');
        const userCount = await prisma.users.count();
        console.log(`📊 Total users: ${userCount}`);
        await prisma.$disconnect();
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

test();