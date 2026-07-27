const express = require('express');
const prisma = require('../prisma');
const authenticate = require('../middleware/auth');
const { getPaymentClient, RandomGenerator } = require('../mesomb');

const router = express.Router();

// ===================== COLLECT PAYMENT (MTN MoMo / Orange Money) =====================
router.post('/collect', authenticate, async (req, res) => {
    try {
        const { amount, service, payer, type, description, metadata } = req.body;

        if (!amount || !service || !payer || !type) {
            return res.status(400).json({ error: 'Amount, service (MTN/ORANGE), payer phone number, and type are required' });
        }

        const transaction = await prisma.transactions.create({
            data: {
                user_id: req.userId,
                amount,
                type,
                status: 'pending',
                description: description || null,
                metadata: metadata || {}
            }
        });

        const payment = getPaymentClient();

        const response = await payment.makeCollect({
            amount,
            service,
            payer,
            country: 'CM',
            currency: 'XAF',
            nonce: RandomGenerator.nonce()
        });

        const success = response.isOperationSuccess() && response.isTransactionSuccess();

        const updated = await prisma.transactions.update({
            where: { id: transaction.id },
            data: {
                status: success ? 'completed' : 'failed',
                reference: response.transaction ? response.transaction.pk : null
            }
        });

        res.json({
            success,
            transaction: updated,
            mesombResponse: {
                operationSuccess: response.isOperationSuccess(),
                transactionSuccess: response.isTransactionSuccess()
            }
        });
    } catch (error) {
        console.error('Collect payment error:', error.message);
        res.status(500).json({ error: 'Payment collection failed' });
    }
});

// ===================== GET MY TRANSACTIONS =====================
router.get('/transactions', authenticate, async (req, res) => {
    try {
        const transactions = await prisma.transactions.findMany({
            where: { user_id: req.userId },
            orderBy: { created_at: 'desc' }
        });

        res.json(transactions);
    } catch (error) {
        console.error('Get transactions error:', error);
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
});

module.exports = router;