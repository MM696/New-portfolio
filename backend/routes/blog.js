import express from 'express';

const router = express.Router();

// Placeholder routes for future blog functionality
router.get('/', (req, res) => {
  res.json({ message: 'Get all blog posts - implement blog functionality' });
});

router.get('/:slug', (req, res) => {
  res.json({ message: 'Get blog post by slug - implement blog functionality' });
});

export default router; 