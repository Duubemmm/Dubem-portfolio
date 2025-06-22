import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Easybank from "../assets/easybank.png";
import Resumpire from "../assets/resumpire.png";
import TextProcessor from "../assets/textprocessor.png";
import Companies from "./Companies"; // Assuming you have a Companies component
const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Easybank Landing Page",
      description: "Easybank is a modern banking website with a clean design and visually appealing interface.",
      image: Easybank,
      link: "https://easybank-landing-page-zeta-two.vercel.app/",
      tags: ["React", "TailwindCSS"]
    },
    {
      id: 2,
      title: "Resumpire",
      description: "Resume builder web application that allows users to create and manage their resumes.",
      image: Resumpire,
      link: "#",
      tags: ["React", "Firebase", "Tailwind"]
    },
    {
      id: 3,
      title: "AI Text Processor",
      description: "Web application for processing and analyzing text using AI models.",
      image: TextProcessor,
      link: "https://hng12-stage3-ai-text-processing-app.vercel.app/",
      tags: ["React", "Chrome AI API ", "TailwindCSS"]
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="project" ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Here are some of my selected works as a <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Frontend Engineer</span>

          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            animate={inView ? { width: "100px" } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-6"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: project.id * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    className="bg-white text-purple-600 px-5 py-2 rounded-full font-medium"
                  >
                    View Project
                  </motion.a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: project.id * 0.15 + index * 0.1 }}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    className="text-purple-600 font-medium flex items-center"
                  >
                    Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link}
                    className="text-gray-400 hover:text-purple-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          {/* <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Duubemmm"
            className="inline-block border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-colors"
          >
            View All Projects
          </motion.a> */}
        </motion.div>

        {/* Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-24"
        >
          <Companies />
        </motion.div>
      </div>
    </section>
  );
};

export default Project;