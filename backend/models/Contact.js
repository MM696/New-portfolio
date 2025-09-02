import mongoose from 'mongoose';

console.log('✅ Loading Contact Schema...');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Please enter a valid email address'
    }
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
    maxlength: [100, 'Subject cannot exceed 100 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  phone: {
    type: String,
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  budget: {
    type: String,
    enum: ['Under $1k', '$1k - $5k', '$5k - $10k', '$10k - $25k', '$25k+', 'Not specified'],
    default: 'Not specified'
  },
  timeline: {
    type: String,
    enum: ['ASAP', '1-2 weeks', '1-2 months', '3-6 months', '6+ months', 'Not specified'],
    default: 'Not specified'
  },
  status: {
    type: String,
    enum: ['New', 'Read', 'Replied', 'Closed'],
    default: 'New'
  },
  ipAddress: {
    type: String,
    required: true
  },
  userAgent: {
    type: String
  },
  readAt: {
    type: Date
  },
  repliedAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Indexes for faster queries
contactSchema.index({ status: 1, createdAt: -1 });
contactSchema.index({ email: 1 });
contactSchema.index({ createdAt: -1 });

// Virtual field for human-readable creation time
contactSchema.virtual('timeSinceCreation').get(function () {
  const now = new Date();
  const diffInHours = Math.floor((now - this.createdAt) / (1000 * 60 * 60));

  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours} hours ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  return `${Math.floor(diffInDays / 30)} months ago`;
});

// Pre-save middleware with logging
contactSchema.pre('save', function (next) {
  console.log('📝 Pre-save hook triggered for Contact:', this);

  // Trim & sanitize inputs
  if (this.name) this.name = this.name.trim();
  if (this.email) this.email = this.email.trim().toLowerCase();
  if (this.subject) this.subject = this.subject.trim();
  if (this.message) this.message = this.message.trim();
  if (this.phone) this.phone = this.phone.trim();
  if (this.company) this.company = this.company.trim();

  console.log('✨ Sanitized contact data ready to save:', this);
  next();
});

// Post-save logging
contactSchema.post('save', function (doc) {
  console.log('✅ Contact successfully saved in DB:', doc);
});

export default mongoose.model('Contact', contactSchema);
