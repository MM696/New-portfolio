import express from 'express';
import Contact from '../models/Contact.js';
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
router.post('/post-contact', submitContact);
// Admin routes (you can add authentication middleware here)
router.get('/get-contacts', getContacts);
router.get('/stats', getContactStats);
router.get('/:id', getContact);
router.put('/:id/status', updateContactStatus);
router.delete('/:id', deleteContact);


export default router; 