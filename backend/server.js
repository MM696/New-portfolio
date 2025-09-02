import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

// Import routes
//import mockRoutes from './routes/mock.js';
//import authRoutes from './routes/auth.js';
//import blogRoutes from './routes/blog.js';
import contactRoutes from './routes/contact.js';
import aiRoutes from "./routes/aiRoutes.js";

// Load environment variables
dotenv.config();
console.log('Mongo URI:', process.env.MONGODB_URI)


const app = express();
const PORT = process.env.PORT || 5001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// =======================
// Parse JSON and URL Encoded Data
// =======================
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// =======================
// Logging Middleware
// =======================
app.use((req, res, next) => {
  console.log('==============================');
  console.log(`📡 [${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  console.log('Headers:', req.headers);
  if (req.method === 'POST' || req.method === 'PUT') {
    console.log('Body:', req.body);
  }
  console.log('==============================');
  next();
});

// =======================
// Security Middleware
// =======================
console.log('🔒 Setting up security middleware...');
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
    },
  },
}));

// =======================
// Rate Limiting
// =======================
console.log('⚡ Setting up rate limiting...');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// =======================
// Compression, CORS
// =======================
console.log('📦 Enabling compression, CORS...');
app.use(compression());
app.use(cors({
  origin: (origin, callback) => {
   const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173',
      'https://new-portfolio-wr6y.onrender.com'
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
   }
  },
  credentials: true
}));

// =======================
// Static Files
// =======================
console.log('📂 Serving static files from /uploads...');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// =======================
// Routes
// =======================
console.log('🛣️ Mounting routes...');
//app.use('/api', mockRoutes);
//app.use('/api/auth', authRoutes);
//app.use('/api/blog', blogRoutes);
app.use("/api", aiRoutes);
app.use('/api', contactRoutes);
console.log('📌 Contact routes mounted at /api');
// Health check route
app.get('/api/health', (req, res) => {
  console.log('💓 Health check endpoint hit');
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// =======================
// Error Handling
// =======================
app.use((err, req, res, next) => {
  console.error('❌ Error Middleware Triggered:', err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});
app.post('/api/test', (req, res) => {
  console.log('Test route hit');
  res.status(200).json({ message: 'Test successful' });
});

app.get("/test-key", (req, res) => {
  res.send({ key: process.env.GEMINI_API_KEY });
});

// =======================
// 404 Handler
// =======================
app.use('*', (req, res) => {
  console.warn(`⚠️ 404 - Route not found: ${req.originalUrl}`);
  res.status(404).json({ error: 'Route not found' });
});

// =======================
// MongoDB Connection
// =======================
if (!process.env.MONGODB_URI) {
  console.error('❌ Missing MONGODB_URI in environment variables!');
  process.exit(1);
}

console.log('🔌 Connecting to MongoDB...');
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

export default app;
