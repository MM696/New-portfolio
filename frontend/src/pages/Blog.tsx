import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-secondary-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-secondary-600">
            Coming soon! I'll be sharing insights about web development, technology trends, and my experiences here.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog; 