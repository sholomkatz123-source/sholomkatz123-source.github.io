import { Router } from 'express';
import { requireAuth, requireRole } from '../authMiddleware.js';
import { prisma } from '../prisma.js';

const r = Router();

r.get('/ping', requireAuth, (_req, res) => {
  res.json({ ok: true, message: 'pong (auth ok)' });
});

r.get('/admin/users', requireAuth, requireRole('ADMIN'), async (_req, res) => {
  const users = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(users.map(u => ({ id: u.id, username: u.username, role: u.role, createdAt: u.createdAt })));
});

export default r;
