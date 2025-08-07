const sampleProjects = [
  {
    id: 1,
    title: "Blog Platform",
    link: "https://blog-post-eiyc.onrender.com/",
    image: "../../public/images/img_6.png",
  },
  {
    id: 2,
    title: "E-commerce Store",
    link: "https://dazzling-halva-24bd54.netlify.app/",
    image: "../../public/images/img_7.png",
  },
  {
    id: 3,
    title: "Travel Tracker",
    link: "https://family-travel-tracker-project.onrender.com/",
    image: "../../public/images/img_8.png",
  },
  // Add more static projects as needed
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
