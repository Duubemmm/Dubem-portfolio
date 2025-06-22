import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import resume from "../assets/cv.pdf"; // Adjust the path as necessary
const Navbar = () => {
  const variants = {
    open: {
      clipPath: "circle(1500px at 40px 40px)",
      transition: {
        type: "spring",
        stiffness: 20,
      }
    },
    closed: {
      clipPath: "circle(24px at 28px 28px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        delay: 0.3
      }
    }
  };

  const [menu, setMenu] = useState(false);
  const items = [
    { id: 1, text: "About", to: "about" },
    { id: 3, text: "Projects", to: "project" },
    { id: 4, text: "Contact", to: "contact" },
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto hidden md:flex justify-between items-center py-4 px-6"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold"
        >
          👨🏾‍💻Dubem
        </motion.div>

        <div className="flex items-center gap-8">
          <ul className="flex space-x-8 list-none">
            {items.map(({ id, text, to }) => (
              <motion.li 
                key={id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-purple-50"
                  activeClass="text-purple-600 bg-purple-50"
                >
                  {text}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href={resume}
            download={resume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium"
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 px-6">
        <motion.button 
          onClick={toggleMenu} 
          className="text-gray-700 z-50 p-2 rounded-full hover:bg-gray-100"
          whileTap={{ scale: 0.9 }}
        >
          {menu ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
        <motion.div 
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          👨🏾‍💻Dubem
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 to-white z-40"
        initial={false}
        animate={menu ? "open" : "closed"}
        variants={variants}
      >
        <div className="p-8 flex flex-col h-full pt-24">
          <motion.ul
            className="flex-1 flex flex-col items-center justify-center space-y-8"
            initial={{ opacity: 0 }}
            animate={menu ? { opacity: 1 } : { opacity: 0 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {items.map(({ id, text, to }) => (
              <motion.li
                key={id}
                initial={{ y: 20, opacity: 0 }}
                animate={menu ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-center"
              >
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleMenu}
                  className="text-3xl text-gray-800 hover:text-purple-600 font-medium py-3 px-6 rounded-xl hover:bg-purple-50 block transition-all"
                >
                  {text}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={menu ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="pb-8 px-6"
          >
            <motion.a
              href={resume}
              download={resume}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all font-medium text-lg block text-center shadow-md"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;