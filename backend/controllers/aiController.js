// src/controllers/aiController.ts
import { generateContentStream } from '../utils/gemini.js';

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ reply: 'Message is required.' });

    console.log('Received message from frontend:', message);
    await generateContentStream(message);

    res.json({ reply: 'Your message was sent to Gemini AI. Check server logs or saved files for response.' });
  } catch (err) {
    console.error('Error in chatWithAI:', err);
    res.status(500).json({ reply: 'Something went wrong.' });
  }
};
