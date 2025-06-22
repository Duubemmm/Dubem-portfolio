import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import Dubem from "../assets/Dubem.jpg";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const techStack = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Framer Motion"];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-purple-50 py-20 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-400 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-pink-400 mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Image Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full lg:w-5/12 flex justify-center"
          >
            <div className="relative group">
              <motion.img
                src={Dubem}
                alt="Dubem"
                className="w-full max-w-md rounded-2xl shadow-2xl border-8 border-white transform group-hover:-rotate-1 transition-transform duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-5 -right-5 bg-white p-3 rounded-full shadow-lg group-hover:rotate-12 transition-transform duration-300"
              >
                <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-full">
                  <span className="text-white text-2xl">👨🏾‍💻</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="w-full lg:w-7/12"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-2"
            >
              <span className="text-lg md:text-xl text-purple-600">Hello, I'm</span>
            </motion.div>

            {/* Name/Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 mb-6"
            >
              <span className="block">Chidubem Okoli</span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Frontend Engineer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="space-y-4 text-lg text-gray-600 mb-8 max-w-2xl"
            >
              <p>
                I specialize in crafting <span className="font-semibold text-purple-600">exceptional digital experiences</span> that blend beautiful design with cutting-edge technology.
              </p>
              <p>
                My Frontend expertise allows me to build <span className="font-semibold">performant, scalable applications</span> that drive real business results.
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
              className="mb-10"
            >
              <h4 className="text-lg font-semibold text-gray-700 mb-3">My Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="bg-white text-purple-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-100"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;