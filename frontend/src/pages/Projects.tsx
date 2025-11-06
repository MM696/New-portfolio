import { motion } from "framer-motion";
import { Github, ExternalLink, Filter, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const sampleProjects = [
    {
      id: 1,
      title: "An Cardiovascular Disease Detection System",
      link: "https://inspectcare-5eu9.onrender.com/",
      code: "https://github.com/MM696/inspectcare",
      images: ["/images/img_8.png", "/images/img_8a.png"],
      tech: ["React", "Tailwind CSS", "NodeJS", "Express", "PostgreSQL"],
      description:
          "A comprehensive cardiovascular disease detection system for detecting cardiovascular diseases using modern web technologies. Features symptom detection, diagnosis and doctor's appointment booking with other features.",
        category: "Full Stack",
      featured: false,
      year: "2023",
      status: "Live"
    },
    
    {
      id: 2,
    title: "Car Rental Platform",
    link: "https://carrental-41y5.onrender.com/",
    code: "https://github.com/MM696/CarRental",
    images: ["/images/img_6.png", "/images/img_6a.png"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux", "NodeJS", "Express", "MongoDB"],
    description:
      "A comprehensive car rental platform featuring vehicle browsing, booking management, user authentication, and payment processing. Built with modern web technologies for seamless user experience and robust backend functionality.",
    category: "Full Stack",
    featured: true,
    year: "2024",
    status: "Live"
  },
  {
    id: 3,
    title: "An Online Cooperative Contribution Website",
    link: "https://cooperative-website.vercel.app/",
    code: "https://github.com/MM696/cooperative_website",
    images: ["/images/img_7.png", "/images/img_7a.png"],
    tech: ["NextJS", "TypeScript", "Tailwind CSS", "Supabase", "EmailJS"],
    description:
      "A comprehensive cooperative platform enabling members to contribute, track investments, and manage shared resources. Features real-time contribution tracking, member management, and financial transparency with modern web technologies.",
    category: "Full Stack",
    featured: true,
    year: "2025",
    status: "Live"
  },  
];

const techFilters = ["All", "React", "Tailwind CSS", "NextJS", "NodeJS", "Express", "MongoDB", "PostgreSQL", "Supabase", "EmailJS"];

// ✅ Image Slider Component
function ImageSlider({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images.length, isHovered]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Container */}
      <div className="relative overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-56 object-cover transition-transform duration-500"
          />
        </motion.div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={goToPrevious}
            className="p-2 bg-black/50 text-white rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={goToNext}
            className="p-2 bg-black/50 text-white rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/70 text-white text-xs font-medium">
            <span>{currentIndex + 1} / {images.length}</span>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 right-4 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ✅ Enhanced project card component
function ProjectCard({
  title,
  link,
  code,
  image,
  images,
  tech,
  description,
  category,
  featured,
  year,
  status,
  index,
}: {
  title: string;
  link: string;
  code: string;
  image?: string;
  images?: string[];
  tech: string[];
  description: string;
  category: string;
  featured: boolean;
  year: string;
  status: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      <div className="group">
      <div className="relative rounded-2xl overflow-hidden bg-white border border-secondary-200 shadow-soft hover:shadow-xl transition-all duration-300 group-hover:border-primary-300">
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-medium">
              <Star size={12} />
              Featured
            </div>
          </div>
        )}

        {/* Project Image(s) */}
        <div className="relative overflow-hidden">
          {images && images.length > 1 ? (
            // Multiple images - Image Slider
            <ImageSlider images={images} title={title} />
          ) : (
            // Single image
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <img
                src={image || (images && images[0])}
                alt={title}
                className="w-full h-56 object-cover transition-transform duration-500"
              />
            </motion.div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              status === 'Live' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {status}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                {title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-secondary-500">{category}</span>
                <span className="text-secondary-300">•</span>
                <span className="text-sm text-secondary-500">{year}</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium border border-primary-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-secondary-600 mb-6 leading-relaxed">{description}</p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-primary-200 text-primary-700 font-medium hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
              >
                <Github size={16} />
                Code
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
}

// ✅ Main Projects page
export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  
  const filteredProjects = selectedFilter === "All" 
    ? sampleProjects 
    : sampleProjects.filter(project => project.tech.includes(selectedFilter));

  const featuredProjects = sampleProjects.filter(project => project.featured);
  const totalProjects = sampleProjects.length;
  const liveProjects = sampleProjects.filter(project => project.status === "Live").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-200 rounded-full opacity-20" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8">
                <Filter className="w-4 h-4 mr-2" />
                Portfolio Showcase
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
                My <span className="gradient-text">Projects</span>
              </div>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="text-xl text-secondary-600 max-w-3xl mx-auto mb-12">
                A collection of my recent work showcasing full-stack development, modern technologies, and creative problem-solving.
              </div>
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">{totalProjects}</div>
                <div className="text-sm text-secondary-500">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">{liveProjects}</div>
                <div className="text-sm text-secondary-500">Live Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">{featuredProjects.length}</div>
                <div className="text-sm text-secondary-500">Featured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">3+</div>
                <div className="text-sm text-secondary-500">Years Exp</div>
              </div>
              </div>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-y border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-3">
            {techFilters.map((filter) => (
              <motion.div
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedFilter === filter
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-secondary-600 border border-secondary-300 hover:bg-primary-50 hover:border-primary-300'
                  }`}
                >
                  {filter}
                </button>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
            </div>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">No projects found</h3>
                <p className="text-secondary-600 mb-6">
                  Try selecting a different technology filter to see more projects.
                </p>
                <button
                  onClick={() => setSelectedFilter("All")}
                  className="btn btn-primary"
                >
                  Show All Projects
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
