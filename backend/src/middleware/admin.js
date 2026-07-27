const jwt = require('jsonwebtoken');
const prisma = require('../prisma');

module.exports = async (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth?.startsWith('Bearer ')) return res.status(401).json({ error: 'Authentication required' });

    try {
        const decoded = jwt.verify(auth.split(' ')[1], process.env.JWT_SECRET);
        const user = await prisma.users.findUnique({ where: { id: decoded.userId }, select: { id: true, role: true } });
        if (!user || user.role !== 'admin') return res.status(403).json({ error: 'Admin access required' });
        req.userId = user.id;
        next();
    } catch {
        res.status(401).json({ error: 'Invalid token' });
    }
};
