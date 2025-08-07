import express from 'express';
import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getFeaturedProjects,
  getProjectCategories,
  getProjectStats,
  likeProject
} from '../controllers/projectController.js';

const router = express.Router();

// Public routes
router.get('/', getProjects);
router.get('/featured', getFeaturedProjects);
router.get('/categories', getProjectCategories);
router.get('/stats', getProjectStats);
router.get('/:id', getProject);
router.post('/:id/like', likeProject);

// Admin routes (you can add authentication middleware here)
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router; 