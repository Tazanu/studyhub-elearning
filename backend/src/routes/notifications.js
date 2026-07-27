const express = require('express');
const prisma = require('../prisma');
const authenticate = require('../middleware/auth');

const router = express.Router();

// ==================== GET MY NOTIFICATIONS ====================
router.get('/mine', authenticate, async (req, res) => {
    try {
        const { limit = 50, unreadOnly = false } = req.query;

        const where = { user_id: req.userId };
        if (unreadOnly === 'true') {
            where.is_read = false;
        }

        const notifications = await prisma.notifications.findMany({
            where,
            include: {
                groups: { select: { id: true, name: true } }
            },
            orderBy: { created_at: 'desc' },
            take: parseInt(limit)
        });

        const unreadCount = await prisma.notifications.count({
            where: { user_id: req.userId, is_read: false }
        });

        res.json({ notifications, unreadCount });
    } catch (error) {
        console.error('Get notifications error:', error);
        res.status(500).json({ error: 'Failed to fetch notifications' });
    }
});

// ==================== MARK NOTIFICATION AS READ ====================
router.patch('/:id/read', authenticate, async (req, res) => {
    try {
        const notificationId = parseInt(req.params.id);

        // Verify notification belongs to user
        const notification = await prisma.notifications.findUnique({
            where: { id: notificationId }
        });

        if (!notification) {
            return res.status(404).json({ error: 'Notification not found' });
        }

        if (notification.user_id !== req.userId) {
            return res.status(403).json({ error: 'Not authorized' });
        }

        await prisma.notifications.update({
            where: { id: notificationId },
            data: { is_read: true }
        });

        res.json({ success: true });
    } catch (error) {
        console.error('Mark notification read error:', error);
        res.status(500).json({ error: 'Failed to mark notification as read' });
    }
});

// ==================== MARK ALL AS READ ====================
router.post('/mark-all-read', authenticate, async (req, res) => {
    try {
        await prisma.notifications.updateMany({
            where: { user_id: req.userId, is_read: false },
            data: { is_read: true }
        });

        res.json({ success: true });
    } catch (error) {
        console.error('Mark all read error:', error);
        res.status(500).json({ error: 'Failed to mark all as read' });
    }
});

module.exports = router;
