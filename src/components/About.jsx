import { motion } from "framer-motion";
import Dubem from "../assets/Dubem.jpg";
import { Link } from "react-router"
const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <div className="aspect-square overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-500">
              <img src={Dubem} alt="Dubem" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-green-950 tracking-tight">
              Designing for a <span className="text-green-600">borderless web.</span>
            </h2>
            
            <div className="max-w-xl space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                I live at the intersection of clean design and functional development. Whether it’s a PWA or a serverless interface, I build to make the web accessible to everyone, everywhere.
              </p>
            </div>

            <div className="pt-4">
              <Link to="/contact"
                className="group inline-flex items-center gap-3 font-bold text-green-700 hover:text-green-900 transition-colors"
              >
                Let’s build together
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;