import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Smartphone, Database, Zap } from 'lucide-react';

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
            {/* You had this as a self-closing div */}
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
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
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-50">
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
    </div>
  );
};

export default Home;
