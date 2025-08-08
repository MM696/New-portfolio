import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL'] },
    { category: 'Mobile', items: ['React Native', 'Flutter', 'iOS Development'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Jira'] }
  ];

  const experience = [
    {
      title: 'Full-Stack Developer',
      company: 'Machine and Equipment Corporation of Africa',
      period: '2025 - Present',
      description: 'Leading development of web application for e-commerce.'
    },
    {
      title: 'Backend Developer',
      company: 'Bejite Inc',
      period: '2025 - present',
      description: 'Built scalable web applications and mobile apps for various clients.'
    },
    {
      title: 'Frontend Developer',
      company: 'Skye Studios',
      period: '2024 - 2025',
      description: 'Created responsive websites and user interfaces for clients.'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="text-center mb-16">
     <h1 className="text-5xl font-bold text-secondary-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            I'm a passionate full-stack developer with over 3 years of experience creating beautiful and functional web applications.
          </p>
  </div>
        </motion.div>

        {/* Profile Section */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
    <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Who I Am
            </h2>
            <div className="space-y-4 text-secondary-600">
              <p>
                I'm a dedicated full-stack developer who loves turning ideas into reality through code. 
                With a strong foundation in both frontend and backend development, I create comprehensive 
                solutions that solve real-world problems.
              </p>
              <p>
                My journey in web development started 3 years ago, and since then, I've worked on 
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

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Quick Info
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-secondary-700">Name:</span>
                  <span className="ml-2 text-secondary-600">McAnthony Arinze Eze</span>
                </div>
                <div>
                  <span className="font-medium text-secondary-700">Location:</span>
                  <span className="ml-2 text-secondary-600">Abuja, Nigeria</span>
                </div>
                <div>
                  <span className="font-medium text-secondary-700">Experience:</span>
                  <span className="ml-2 text-secondary-600">3+ Years</span>
                </div>
                <div>
                  <span className="font-medium text-secondary-700">Availability:</span>
                  <span className="ml-2 text-secondary-600">Open to opportunities</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/path-to-resume.pdf"
                className="btn btn-primary"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
              <a
                href="mailto:your.email@example.com"
                className="btn btn-outline"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </a>
            </div>
          </div>
  </div>
        </motion.div>

        {/* Skills Section */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
                <motion.div
   key={skillGroup.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
>
  <div className="card p-6">
    <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
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
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          
        >
          <div className="mb-16"> 
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
              >
                <div className="card p-6">
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
                <p className="text-secondary-600">
                  {job.description}
                </p>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn btn-primary btn-lg"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="btn btn-outline btn-lg"
            >
              View My Work
            </a>
          </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 