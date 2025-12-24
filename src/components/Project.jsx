import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WeatherNow from "../assets/WeatherNow.png"
import CountryRank from "../assets/CountryRank.png"
import Resumpire from "../assets/Resumpire.png"

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Country Ranking Page",
      description: "A powerful web application designed for users to visualize and analyze global data trends.",
      link: "https://country-rank-csem.vercel.app/",
      tags: ["React + Vite", "TailwindCSS", "REST API"],
      image: CountryRank 
    },
    {
      id: 2,
      title: "Resumpire",
      description: "Resume builder web application that allows users to create and manage professional resumes easily.",
      link: "https://resumpire.vercel.app/",
      tags: ["React + Vite", "Firebase", "GSAP", "TailwindCSS"],
      image: Resumpire
    },
    {
      id: 3,
      title: "Weather Now",
      description: "A sleek, real-time weather tracking application with clean data visualization.",
      link: "https://weather-now-blond-six.vercel.app/",
      tags: ["React + Vite", "Zustand", "TailwindCSS"],
      image: WeatherNow
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="project" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-950 mb-4">
            My <span className="text-green-600">Projects</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Here are some of my selected works as a <span className="font-semibold text-green-700">Frontend Engineer</span>
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            animate={inView ? { width: "80px" } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-1.5 bg-green-500 mx-auto rounded-full mt-6"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: project.id * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-green-50/30 rounded-2xl overflow-hidden border border-green-100 hover:border-green-200 hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative overflow-hidden h-52 bg-green-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-green-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    className="bg-white text-green-700 px-6 py-2 rounded-full font-bold shadow-lg"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-5 line-clamp-2">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs font-bold tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex justify-between items-center border-t border-green-100 pt-4">
                  <a
                    href={project.link}
                    className="text-green-700 font-bold flex items-center hover:text-green-500 transition-colors"
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                    </svg>
                  </a>
                  
                  <a
                    href={project.link}
                    className="p-2 bg-white rounded-full text-green-900 hover:bg-green-600 hover:text-white transition-all shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;