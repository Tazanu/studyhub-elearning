const prisma = require('../prisma');

/**
 * Middleware factory — fetches the user's role from DB and enforces it.
 * Usage: requireRole('admin') or requireRole('admin', 'tutor')
 * Must be used AFTER authenticate middleware.
 */
function requireRole(...roles) {
    return async (req, res, next) => {
        try {
            const user = await prisma.users.findUnique({
                where: { id: req.userId },
                select: { role: true, is_active: true },
            });
            if (!user || !user.is_active) {
                return res.status(403).json({ error: 'Account not found or disabled' });
            }
            if (!roles.includes(user.role)) {
                return res.status(403).json({ error: 'Insufficient permissions' });
            }
            req.userRole = user.role;
            next();
        } catch {
            res.status(500).json({ error: 'Authorization check failed' });
        }
    };
}

module.exports = requireRole;
