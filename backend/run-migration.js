const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

async function runMigration() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/studyhub'
    });

    try {
        await client.connect();
        console.log('✅ Connected to database');

        // Read migration file
        const migrationSQL = fs.readFileSync(
            path.join(__dirname, 'migrations', '001_add_group_read_status.sql'),
            'utf8'
        );

        // Run migration
        console.log('🔄 Running migration...');
        await client.query(migrationSQL);
        console.log('✅ Migration completed successfully!');
        console.log('\n📝 Next steps:');
        console.log('   1. Run: npx prisma generate');
        console.log('   2. Restart backend server');

    } catch (error) {
        console.error('❌ Migration failed:', error.message);
        process.exit(1);
    } finally {
        await client.end();
    }
}

runMigration();
