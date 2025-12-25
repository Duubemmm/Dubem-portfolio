import { motion } from "framer-motion";
import GitHub from "../assets/githubicon.webp";
import LinkedIn from "../assets/linkedinicon.webp";

const Contact = () => {
  return (
    <section id="contacts" className="py-24 bg-green-50/50">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-10"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-green-950">
              Stay <span className="text-green-600">Connected</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or want to collaborate, shoot me a message. 
            </p>
          </div>

          {/* Email Section */}
          <div className="py-6">
            <p className="text-green-900 font-bold uppercase tracking-widest text-sm mb-2">
              Direct Email
            </p>
            <a 
              href="mailto:chidubemm.okoli@gmail.com" 
              className="text-2xl md:text-4xl font-bold text-green-600 hover:text-green-700 transition-colors break-words"
            >
              chidubemm.okoli@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4">
            <p className="font-bold text-green-900 uppercase tracking-widest text-sm border-b-2 border-green-200 pb-1">
              Follow My Journey
            </p>
            <div className="flex gap-8 mt-2">
              <a 
                href="https://github.com/Duubemmm" 
                target="_blank" 
                rel="noreferrer" 
                className="group flex flex-col items-center gap-2"
              >
                <img src={GitHub} alt="GitHub" className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110" />
                <span className="text-xs font-medium text-gray-500 group-hover:text-green-600">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/chidubem-okoli" 
                target="_blank" 
                rel="noreferrer" 
                className="group flex flex-col items-center gap-2"
              >
                <img src={LinkedIn} alt="LinkedIn" className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110" />
                <span className="text-xs font-medium text-gray-500 group-hover:text-green-600">LinkedIn</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;