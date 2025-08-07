import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    maxlength: [200, 'Short description cannot exceed 200 characters']
  },
  technologies: [{
    type: String,
    required: [true, 'At least one technology is required']
  }],
  category: {
    type: String,
    required: [true, 'Project category is required'],
    enum: ['Web Development', 'Mobile App', 'Desktop App', 'API', 'Game', 'Other'],
    default: 'Web Development'
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Project image'
    }
  }],
  liveUrl: {
    type: String,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Live URL must be a valid URL'
    }
  },
  githubUrl: {
    type: String,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/github\.com\/.+/.test(v);
      },
      message: 'GitHub URL must be a valid GitHub URL'
    }
  },
  featured: {
    type: Boolean,
    default: false
  },
  featuredImage: {
    type: String,
    required: [true, 'Featured image is required']
  },
  completionDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Completed', 'In Progress', 'Planning'],
    default: 'Completed'
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
    default: 'Intermediate'
  },
  timeSpent: {
    type: String,
    default: 'Not specified'
  },
  challenges: [{
    type: String,
    maxlength: [500, 'Challenge description cannot exceed 500 characters']
  }],
  learnings: [{
    type: String,
    maxlength: [500, 'Learning description cannot exceed 500 characters']
  }],
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Index for better search performance
projectSchema.index({ title: 'text', description: 'text', technologies: 'text' });
projectSchema.index({ featured: 1, status: 1 });
projectSchema.index({ category: 1 });

// Virtual for formatted date
projectSchema.virtual('formattedDate').get(function() {
  return this.completionDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

// Virtual for time ago
projectSchema.virtual('timeAgo').get(function() {
  const now = new Date();
  const diffInDays = Math.floor((now - this.completionDate) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
});

// Pre-save middleware
projectSchema.pre('save', function(next) {
  // Ensure at least one image is set as featured
  if (this.images.length > 0 && !this.featuredImage) {
    this.featuredImage = this.images[0].url;
  }
  next();
});

export default mongoose.model('Project', projectSchema); 