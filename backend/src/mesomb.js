const { PaymentOperation, RandomGenerator } = require('@hachther/mesomb');

function getPaymentClient() {
    return new PaymentOperation({
        applicationKey: process.env.MESOMB_APPLICATION_KEY,
        accessKey: process.env.MESOMB_ACCESS_KEY,
        secretKey: process.env.MESOMB_SECRET_KEY
    });
}

module.exports = { getPaymentClient, RandomGenerator };