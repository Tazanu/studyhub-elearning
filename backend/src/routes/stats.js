const express = require('express');
const prisma = require('../prisma');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const [totalUsers, totalGroups, totalNotes, totalQuestions] = await Promise.all([
            prisma.users.count({ where: { is_active: true } }),
            prisma.groups.count({ where: { is_active: true } }),
            prisma.notes.count({ where: { is_active: true } }),
            prisma.questions.count()
        ]);

        res.json({ totalUsers, totalGroups, totalNotes, totalQuestions });
    } catch (error) {
        console.error('Get stats error:', error);
        res.status(500).json({ error: 'Failed to fetch stats' });
    }
});

module.exports = router;