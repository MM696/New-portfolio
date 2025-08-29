import { motion } from "framer-motion";

const sampleProjects = [
  {
    id: 1,
    title: "Blog Platform",
    link: "https://blog-post-eiyc.onrender.com/",
    image: "/images/img_6.png",
  },
  {
    id: 2,
    title: "E-commerce Store",
    link: "https://getspares.net/",
    image: "/images/img_7.png",
  },
  {
    id: 3,
    title: "Travel Tracker",
    link: "https://family-travel-tracker-project.onrender.com/",
    image: "/images/img_8.png",
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Use motion.h2 and make sure framer-motion is properly set up */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        
      >
        <div className="text-3xl font-bold mb-6 text-center">
        My Projects
        </div>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
             <motion.div
  whileHover={{ scale: 1.05 }}
  
>
  <div className="overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-48 object-cover transition-transform duration-300"
  />
  </div>
</motion.div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
              </div>
            </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
