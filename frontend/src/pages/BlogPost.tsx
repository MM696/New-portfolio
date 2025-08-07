import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();

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
            Blog Post
          </h1>
          <p className="text-xl text-secondary-600">
            Blog post: {slug}
          </p>
          <p className="text-secondary-600 mt-4">
            Coming soon! This feature will be implemented in the future.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost; 