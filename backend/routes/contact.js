import express from 'express';
import {
  submitContact,
  getContacts,
  getContact,
  updateContactStatus,
  deleteContact,
  getContactStats
} from '../controllers/contactController.js';

const router = express.Router();

// Public route
router.post('/', submitContact);

// Admin routes (you can add authentication middleware here)
router.get('/', getContacts);
router.get('/stats', getContactStats);
router.get('/:id', getContact);
router.put('/:id/status', updateContactStatus);
router.delete('/:id', deleteContact);

export default router; 