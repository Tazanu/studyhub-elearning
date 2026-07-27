require('dotenv').config();
const { PaymentOperation, RandomGenerator } = require('@hachther/mesomb');

async function test() {
    console.log('Keys loaded:');
    console.log('  APP:', process.env.MESOMB_APPLICATION_KEY);
    console.log('  ACCESS:', process.env.MESOMB_ACCESS_KEY);
    console.log('  SECRET:', process.env.MESOMB_SECRET_KEY ? '***set***' : 'MISSING');

    const payment = new PaymentOperation({
        applicationKey: process.env.MESOMB_APPLICATION_KEY,
        accessKey: process.env.MESOMB_ACCESS_KEY,
        secretKey: process.env.MESOMB_SECRET_KEY
    });

    try {
        console.log('\nSending collect request...');
        const response = await payment.makeCollect({
            amount: 100,
            service: 'MTN',
            payer: '677000000',
            country: 'CM',
            currency: 'XAF',
            nonce: RandomGenerator.nonce()
        });

        console.log('\n--- RESPONSE ---');
        console.log('isOperationSuccess:', response.isOperationSuccess());
        console.log('isTransactionSuccess:', response.isTransactionSuccess());
        console.log('status:', response.status);
        console.log('transaction:', JSON.stringify(response.transaction, null, 2));
        console.log('Full response keys:', Object.keys(response));
    } catch (err) {
        console.log('\n--- ERROR ---');
        console.log('Type:', err.constructor.name);
        console.log('Message:', err.message);
        console.log('Code:', err.code);
        console.log('Response data:', JSON.stringify(err.response?.data, null, 2));
        console.log('Status:', err.response?.status);
    }
}

test();
