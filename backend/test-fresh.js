const { PrismaClient } = require('@prisma/client');

// Pass the database URL directly to bypass .env reading
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: "postgresql://postgres:postgres@localhost:5432/studyhub"
        }
    }
});

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