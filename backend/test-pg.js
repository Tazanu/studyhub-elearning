const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'studyhub'
});

client.connect()
    .then(() => {
        console.log('✅ PostgreSQL connected successfully!');
        return client.query('SELECT NOW() as time');
    })
    .then(result => {
        console.log('✅ Query result:', result.rows[0]);
        client.end();
    })
    .catch(err => {
        console.error('❌ Connection failed:', err.message);
        client.end();
    });