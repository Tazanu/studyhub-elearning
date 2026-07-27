// Set the environment variable BEFORE importing Prisma Client
process.env.DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/studyhub";

// Now import and use Prisma Client
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function test() {
    try {
        await prisma.$connect();
        console.log('✅ Database connected successfully!');
        const userCount = await prisma.user.count();
        console.log(`📊 Total users: ${userCount}`);
        await prisma.$disconnect();
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

test();