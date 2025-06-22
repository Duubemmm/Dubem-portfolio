import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 1 }}
      className="bg-gray-500 py-8"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white mb-4 md:mb-0">
          © {new Date().getFullYear()} Dubem. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FaFacebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
