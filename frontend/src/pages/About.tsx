import { motion } from 'framer-motion';
import { Download, Mail, Award, Users, Code, Heart, MapPin, Calendar, Briefcase, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Laravel', 'MongoDB', 'PostgreSQL'] },
    { category: 'Mobile', items: ['React Native', 'Flutter', 'iOS Development'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'ClickUp', 'Slack'] }
  ];

  const experience = [
    {
      title: 'Full-Stack Developer',
      company: 'Machine and Equipment Corporation of Africa',
      period: '2021 - Present',
      description: 'Architected and developed a comprehensive e-commerce platform for industrial machinery and equipment sales. Built scalable full-stack solutions with modern technologies, integrating payment gateways, inventory management, and customer relationship management systems for B2B transactions.',
      achievements: ['Built scalable e-commerce platform handling over 1000 products', 'Integrated secure payment processing and multi-currency support', 'Developed automated inventory management reducing manual work by 60%', 'Implemented responsive design serving over 600 monthly active users']
    },
    {
      title: 'Backend Developer',
      company: 'Bejite Inc',
      period: '2025 - present',
      description: 'Developed and maintained a comprehensive job portal platform connecting employers with qualified candidates. Built robust REST APIs, implemented advanced search algorithms, and designed scalable database architecture for handling thousands of job postings and user profiles.',
      achievements: ['Built RESTful APIs serving over 1000 daily requests', 'Implemented advanced search with filters and geolocation', 'Optimized database queries reducing response time by 50%', 'Integrated third-party authentication and payment systems']
    },
    {
      title: 'Frontend Developer',
      company: 'Skye Studios',
      period: '2022 - 2025',
      description: 'Developed interactive video editing interfaces and multimedia web applications using KonvaJS and modern frontend technologies. Built responsive user interfaces with real-time canvas manipulation, drag-and-drop functionality, and seamless video processing capabilities for creative professionals.',
      achievements: ['Built more than 2 interactive video editing interfaces with KonvaJS', 'Implemented real-time canvas manipulation and video filters', 'Reduced interface load time by 40% through code optimization', 'Created reusable component library used across 7 projects']
    }
  ];

  const achievements = [
    {
      title: 'AWS Certified Developer',
      description: 'Certified in cloud development and deployment',
      year: '2024',
      icon: Award
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to React and Node.js communities',
      year: '2023-Present',
      icon: Code
    },
    {
      title: 'Tech Mentor',
      description: 'Mentored a junior developer in web development',
      year: '2023-Present',
      icon: Users
    }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'I believe in writing clean, maintainable code that stands the test of time.',
      icon: Star
    },
    {
      title: 'Continuous Learning',
      description: 'Always staying updated with the latest technologies and best practices.',
      icon: Heart
    },
    {
      title: 'Collaboration',
      description: 'Working closely with teams to deliver exceptional results together.',
      icon: Users
    }
  ];

  const personalStory = [
    {
      year: '2021',
      title: 'The Beginning',
      description: 'Started my journey into web development with HTML, CSS, and JavaScript.',
      milestone: 'First Website'
    },
    {
      year: '2022',
      title: 'Framework Discovery',
      description: 'Discovered React and fell in love with component-based architecture.',
      milestone: 'React Learning'
    },
    {
      year: '2023',
      title: 'Full-Stack Transition',
      description: 'Expanded into backend development with Node.js, Laravel and databases.',
      milestone: 'Full-Stack Developer'
    },
    {
      year: '2024',
      title: 'Professional Growth',
      description: 'Started working with teams and leading development projects.',
      milestone: 'Team Leadership'
    }
  ];

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
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                  <Heart className="w-4 h-4 mr-2" />
                  Passionate Developer
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
                  About <span className="gradient-text">McAnthony</span>
                </div>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                  A passionate full-stack developer with over 4 years of experience creating beautiful, functional, and user-friendly web applications that solve real-world problems.
                </div>
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">4+</div>
                  <div className="text-sm text-secondary-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">15+</div>
                  <div className="text-sm text-secondary-500">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
                  <div className="text-sm text-secondary-500">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">8+</div>
                  <div className="text-sm text-secondary-500">Technologies</div>
                </div>
                </div>
              </motion.div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-4">
                My Journey
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                From curiosity to expertise - the story of how I became a full-stack developer.
              </p>
            </div>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-accent-200 rounded-full" />
            
            <div className="space-y-12">
              {personalStory.map((story, index) => (
                <motion.div
                  key={story.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-primary-500 rounded-full" />
                        <span className="text-sm font-medium text-primary-600">{story.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">{story.title}</h3>
                      <p className="text-secondary-600 mb-3">{story.description}</p>
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                        {story.milestone}
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Who I Am
              </h2>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  I'm a dedicated full-stack developer who loves turning ideas into reality through code. 
                  With a strong foundation in both frontend and backend development, I create comprehensive 
                  solutions that solve real-world problems.
                </p>
                <p>
                  My journey in web development started over 4 years ago, and since then, I've worked on 
                  various projects ranging from simple websites to complex enterprise applications. 
                  I believe in writing clean, maintainable code and staying up-to-date with the latest 
                  technologies and best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing my knowledge through blog posts and tutorials.
                </p>
              </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  Quick Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span className="text-secondary-600">Abuja, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    <span className="text-secondary-600">4+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-primary-600" />
                    <span className="text-secondary-600">Available for projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary-600" />
                    <span className="text-secondary-600">Full-Stack Developer</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/assets/MACANTHONY-ARINZE-EZE'S-RESUME.pdf"
                  className="btn btn-primary btn-lg group"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
                <a
                  href="mailto:mcanthonyarinze@gmail.com"
                  className="btn btn-outline btn-lg"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-4">
                Skills & Technologies
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                A comprehensive toolkit for building modern web applications.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 border border-secondary-200">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-4">
                Achievements & Recognition
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                Milestones and accomplishments that showcase my dedication to excellence.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{achievement.title}</h3>
                <p className="text-secondary-600 mb-3">{achievement.description}</p>
                <span className="text-sm font-medium text-primary-600">{achievement.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-4">
                My Values & Philosophy
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                The principles that guide my work and drive my passion for development.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              My professional journey and the impact I've made along the way.
            </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 border border-secondary-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-900">
                        {job.title}
                      </h3>
                      <p className="text-primary-600 font-medium">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-secondary-500 text-sm mt-2 md:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-secondary-600 mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full border border-green-200"
                      >
                        <CheckCircle size={12} />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                Let's Work Together
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn btn-lg bg-white text-primary-600 hover:bg-gray-100"
                >
                  Get In Touch
                </a>
                <a
                  href="/projects"
                  className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-primary-600"
                >
                  View My Work
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 