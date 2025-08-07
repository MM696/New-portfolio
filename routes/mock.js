import express from 'express';

const router = express.Router();

// Mock projects data
const mockProjects = [
  {
    _id: '1',
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce platform built with modern technologies. This project includes user authentication, product management, shopping cart functionality, payment processing, and an admin dashboard.',
    shortDescription: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'JWT'],
    category: 'Web Development',
    featured: true,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    views: 1250,
    likes: 89,
    completionDate: '2024-01-15',
    timeSpent: '3 months',
    difficulty: 'Advanced',
    status: 'Completed',
    challenges: [
      'Implementing secure payment processing with Stripe',
      'Building a scalable database architecture',
      'Creating a responsive admin dashboard',
      'Optimizing performance for large product catalogs'
    ],
    learnings: [
      'Advanced state management with Redux',
      'Payment gateway integration best practices',
      'Database optimization techniques',
      'Security best practices for e-commerce'
    ],
    featuredImage: 'https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=E-Commerce+Platform',
    images: [
      { url: 'https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=E-Commerce+Platform', alt: 'E-Commerce Platform' }
    ]
  },
  {
    _id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
    shortDescription: 'A collaborative task management application with real-time updates.',
    technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    category: 'Web Development',
    featured: true,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    views: 890,
    likes: 67,
    completionDate: '2024-02-20',
    timeSpent: '2 months',
    difficulty: 'Intermediate',
    status: 'Completed',
    challenges: [
      'Implementing real-time collaboration',
      'Managing complex state with TypeScript',
      'Creating intuitive user interface',
      'Optimizing for mobile devices'
    ],
    learnings: [
      'Real-time data synchronization',
      'TypeScript best practices',
      'Component architecture patterns',
      'Mobile-first design principles'
    ],
    featuredImage: 'https://via.placeholder.com/800x400/10B981/FFFFFF?text=Task+Management+App',
    images: [
      { url: 'https://via.placeholder.com/800x400/10B981/FFFFFF?text=Task+Management+App', alt: 'Task Management App' }
    ]
  },
  {
    _id: '3',
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile app for tracking workouts and nutrition with personalized recommendations and social features.',
    shortDescription: 'Cross-platform mobile app for tracking workouts and nutrition.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Expo'],
    category: 'Mobile App',
    featured: false,
    liveUrl: null,
    githubUrl: 'https://github.com/example',
    views: 567,
    likes: 34,
    completionDate: '2024-03-10',
    timeSpent: '4 months',
    difficulty: 'Advanced',
    status: 'Completed',
    challenges: [
      'Cross-platform compatibility',
      'Performance optimization for mobile',
      'Complex data synchronization',
      'User engagement features'
    ],
    learnings: [
      'React Native development',
      'Mobile app architecture',
      'Performance optimization',
      'User experience design'
    ],
    featuredImage: 'https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Mobile+Fitness+App',
    images: [
      { url: 'https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Mobile+Fitness+App', alt: 'Mobile Fitness App' }
    ]
  }
];

// Mock categories
const mockCategories = ['Web Development', 'Mobile App', 'Desktop App', 'API', 'Game', 'Other'];

// Mock stats
const mockStats = {
  totalProjects: 3,
  featuredProjects: 2,
  totalViews: 2707,
  totalLikes: 190,
  projectsByCategory: [
    { _id: 'Web Development', count: 2 },
    { _id: 'Mobile App', count: 1 }
  ],
  recentProjects: mockProjects.slice(0, 3)
};

// Projects routes
router.get('/projects', (req, res) => {
  const { page = 1, limit = 12, category, search } = req.query;
  
  let filteredProjects = [...mockProjects];
  
  // Filter by category
  if (category && category !== 'all') {
    filteredProjects = filteredProjects.filter(p => p.category === category);
  }
  
  // Filter by search
  if (search) {
    const searchLower = search.toLowerCase();
    filteredProjects = filteredProjects.filter(p => 
      p.title.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower) ||
      p.technologies.some(tech => tech.toLowerCase().includes(searchLower))
    );
  }
  
  // Pagination
  const startIndex = (parseInt(page) - 1) * parseInt(limit);
  const endIndex = startIndex + parseInt(limit);
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);
  
  res.json({
    success: true,
    data: paginatedProjects,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(filteredProjects.length / parseInt(limit)),
      totalItems: filteredProjects.length,
      itemsPerPage: parseInt(limit)
    }
  });
});

router.get('/projects/featured', (req, res) => {
  const featuredProjects = mockProjects.filter(p => p.featured);
  res.json({
    success: true,
    data: featuredProjects
  });
});

router.get('/projects/categories', (req, res) => {
  res.json({
    success: true,
    data: mockCategories
  });
});

router.get('/projects/stats', (req, res) => {
  res.json({
    success: true,
    data: mockStats
  });
});

router.get('/projects/:id', (req, res) => {
  const project = mockProjects.find(p => p._id === req.params.id);
  if (!project) {
    return res.status(404).json({
      success: false,
      error: 'Project not found'
    });
  }
  
  // Increment views
  project.views += 1;
  
  res.json({
    success: true,
    data: project
  });
});

router.post('/projects/:id/like', (req, res) => {
  const project = mockProjects.find(p => p._id === req.params.id);
  if (!project) {
    return res.status(404).json({
      success: false,
      error: 'Project not found'
    });
  }
  
  project.likes += 1;
  
  res.json({
    success: true,
    data: project,
    message: 'Project liked successfully'
  });
});

// Contact routes
router.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: 'All required fields must be provided'
    });
  }
  
  res.status(201).json({
    success: true,
    message: 'Thank you for your message! I\'ll get back to you soon.',
    data: {
      id: Date.now().toString(),
      submittedAt: new Date().toISOString()
    }
  });
});

export default router; 