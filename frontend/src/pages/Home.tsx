import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Smartphone, Database, Zap, Star, Quote, ExternalLink, FileText, Layers, GitBranch, Github, Globe, Terminal, Circle, Square, Hexagon } from 'lucide-react';
import ChatBot from "../components/ChatBot";

const Home = () => {
  const features = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications for iOS and Android.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Backend Systems',
      description: 'Robust APIs and server-side solutions for scalable applications.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that users love.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "McAnthony delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are unmatched.",
      rating: 5
    },
    {
      name: "Michael Adetunji",
      role: "Product Manager, InnovateLab",
      content: "Working with McAnthony was a game-changer. He transformed our vision into a beautiful, functional web application that our users love.",
      rating: 5
    },
    {
      name: "Ikemefuna A",
      role: "Founder, CreativeStudio",
      content: "Professional, reliable, and incredibly talented. McAnthony's full-stack development skills helped us launch our platform successfully.",
      rating: 5
    }
  ];

  const skills = [
    { name: "React", level: 95, color: "from-blue-500 to-cyan-500", icon: Code, customIcon: "/images/React.png" },
    { name: "Next.js", level: 90, color: "from-gray-600 to-gray-800", icon: Globe, customIcon: "/images/NextJS.png" },
    { name: "JavaScript", level: 95, color: "from-yellow-500 to-orange-500", icon: Code, customIcon: "/images/Javascript.png" },
    { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-800", icon: FileText, customIcon: "/images/Typescript.png" },
    { name: "Node.js", level: 90, color: "from-green-500 to-emerald-500", icon: Terminal, customIcon: "/images/NodeJS.png" },
    { name: "Express.js", level: 85, color: "from-green-600 to-green-800", icon: Terminal, customIcon: "/images/ExpressJS.png" },
    { name: "PostgreSQL", level: 82, color: "from-blue-700 to-indigo-700", icon: Database, customIcon: "/images/PostgreSQL.svg" },
    { name: "MongoDB", level: 85, color: "from-green-600 to-green-800", icon: Database, customIcon: "/images/MongoDB.jpg" },
    { name: "HTML5", level: 95, color: "from-orange-500 to-red-500", icon: Square, customIcon: "/images/HTML5.webp" },
    { name: "CSS3", level: 95, color: "from-blue-500 to-blue-700", icon: Circle, customIcon: "/images/CSS3.png" },
    { name: "Redux", level: 80, color: "from-purple-500 to-pink-500", icon: Hexagon, customIcon: "/images/Redux.png" },
    { name: "Git", level: 85, color: "from-orange-600 to-red-600", icon: GitBranch, customIcon: "/images/Git.png" },
    { name: "GitHub", level: 85, color: "from-gray-700 to-gray-900", icon: Github, customIcon: "/images/Github.svg" },
    { name: "AWS", level: 80, color: "from-orange-500 to-yellow-500", icon: Layers, customIcon: "/images/Amazon_Web_Services.svg" }
  ];

  const recentWork = [
    {
      title: "An Online Cooperative Contribution Website",
      description:
      "A comprehensive cooperative platform enabling members to contribute, track investments, and manage shared resources. Features real-time contribution tracking, member management, and financial transparency with modern web technologies.",
      image: "/images/img_7.png",
      tech: ["NextJS", "TypeScript", "Tailwind CSS", "Supabase"],
      link: "https://cooperative-website.vercel.app/"
    },
    {
      title: "Car Rental Platform",
      description:
      "A comprehensive car rental platform featuring vehicle browsing, booking management, user authentication, and payment processing. Built with modern web technologies for seamless user experience and robust backend functionality.",
      image: "/images/img_6.png",
      tech: ["React", "TypeScript", "Tailwind CSS", "Redux", "NodeJS", "Express", "MongoDB"],
      link: "https://carrental-41y5.onrender.com/"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute top-16 left-12 w-20 h-20 bg-primary-900 rounded-full opacity-20" />
        </motion.div>
          
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute bottom-32 right-10 w-32 h-32 bg-accent-900 rounded-full opacity-20" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-200 rounded-full opacity-20" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  Available for new projects
                </div>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="text-5xl md:text-7xl font-bold text-balance">
                  Hi, I'm{' '}
                  <span className="gradient-text">McAnthony</span>
                  <br />
                  <span className="text-secondary-600">Full-Stack Developer</span>
                </div>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                  I create beautiful, functional, and user-friendly web applications that help businesses grow and succeed in the digital world.
                </div>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/projects" className="btn btn-primary btn-lg group">
                    View My Work
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/contact" className="btn btn-outline btn-lg">
                    Get In Touch
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 border-2 border-secondary-300 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-1 h-3 bg-secondary-400 rounded-full mt-2" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
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
                What I Do
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                I specialize in creating modern web applications that are both beautiful and functional.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="group">
                  <div className="card p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
                Technical Skills
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                Proficient in modern technologies and frameworks for full-stack development.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  {/* Background Image for Custom Icons */}
                  {skill.customIcon && (
                    <div className="absolute inset-0 opacity-10">
                      <img 
                        src={skill.customIcon} 
                        alt={skill.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.log('Custom background icon failed to load:', skill.customIcon);
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                          {skill.customIcon ? (
                            <div className="w-6 h-6 flex items-center justify-center">
                              {skill.name === 'GitHub' || skill.name === 'PostgreSQL' || skill.name === 'AWS' ? (
                                <img 
                                  src={skill.customIcon} 
                                  alt={skill.name}
                                  className="w-4 h-4"
                                  style={{ filter: 'brightness(0) invert(1)' }}
                                  onError={(e) => {
                                    console.log(`${skill.name} icon failed to load:`, skill.customIcon);
                                    (e.target as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                              ) : (
                                <img 
                                  src={skill.customIcon} 
                                  alt={skill.name}
                                  className="w-6 h-6 object-contain"
                                  onError={(e) => {
                                    console.log(`${skill.name} icon failed to load:`, skill.customIcon);
                                    (e.target as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                              )}
                            </div>
                          ) : (
                            <skill.icon className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-secondary-900">{skill.name}</h3>
                      </div>
                      <span className="text-sm font-medium text-primary-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
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
                Recent Work
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                A showcase of my latest projects and achievements.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentWork.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">{project.title}</h3>
                    <p className="text-secondary-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        console.log('Button clicked, opening:', project.link);
                        window.open(project.link, '_blank', 'noopener,noreferrer');
                      }}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-lg px-4 py-2 cursor-pointer"
                    >
                      View Project <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mt-12">
              <Link to="/projects" className="btn btn-primary btn-lg">
                View All Projects
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                What Clients Say
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Don't just take my word for it. Here's what my clients have to say about working with me.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-white/60 mb-4" />
                <p className="text-white/90 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/70 text-sm">{testimonial.role}</div>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-600">
                  {stat.number}
                </div>
                <div className="text-lg text-secondary-600">
                  {stat.label}
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-secondary-900">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                Let's work together to bring your ideas to life. I'm here to help you create something amazing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Start a Project
                </Link>
                <Link to="/about" className="btn btn-outline btn-lg">
                  Learn More About Me
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating AI Chatbot */}
      <div className="fixed bottom-6 right-6 z-50 shadow-lg">
        <ChatBot />
    </div>
    </div>
  );
};

export default Home;
