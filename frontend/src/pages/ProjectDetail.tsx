import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Calendar, Clock, Eye, Heart } from 'lucide-react';

const ProjectDetail = () => {

  // Mock data - replace with API call
  const project = {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce platform built with modern technologies. This project includes user authentication, product management, shopping cart functionality, payment processing, and an admin dashboard.',
    shortDescription: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
    image: '/api/placeholder/800/400',
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
    ]
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          
        >
          <div className="mb-8">
          <Link to="/projects" className="text-primary-600 hover:text-primary-700">
            ← Back to Projects
          </Link>
          </div>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          
        >
          <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="badge badge-secondary">{project.category}</span>
            {project.featured && <span className="badge badge-primary">Featured</span>}
            <span className={`badge ${
              project.status === 'Completed' ? 'badge-accent' : 'badge-secondary'
            }`}>
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            {project.title}
          </h1>

          <p className="text-xl text-secondary-600 mb-6">
            {project.description}
          </p>

          {/* Project Stats */}
          <div className="flex flex-wrap gap-6 text-sm text-secondary-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Completed {new Date(project.completionDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{project.timeSpent}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{project.views} views</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>{project.likes} likes</span>
            </div>
          </div>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          
        >
          <div className="mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-lg"
          />
          </div>
        </motion.div>

        {/* Project Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          
        >
          <div className="flex flex-wrap gap-4 mb-12">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
          )}
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
              Project Details
            </h3>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-secondary-700">Difficulty:</span>
                <span className="ml-2 text-secondary-600">{project.difficulty}</span>
              </div>
              <div>
                <span className="font-medium text-secondary-700">Time Spent:</span>
                <span className="ml-2 text-secondary-600">{project.timeSpent}</span>
              </div>
              <div>
                <span className="font-medium text-secondary-700">Status:</span>
                <span className="ml-2 text-secondary-600">{project.status}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Challenges & Learnings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
              Challenges Faced
            </h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-secondary-600">{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Learnings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
              Key Learnings
            </h3>
            <ul className="space-y-3">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-secondary-600">{learning}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 