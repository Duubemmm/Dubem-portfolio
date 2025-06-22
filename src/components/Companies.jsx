import { motion } from "framer-motion";

const Companies = () => {
  const companies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "⏭️" },
    { name: "TypeScript", icon: "📝" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Vue.js", icon: "🔷" },
    { name: "Vite", icon: "⚡" },
    { name: "Firebase", icon: "🔥" },
  ];

  const companiesList = [...companies, ...companies];

  const scrollVariant1 = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  };

  const scrollVariant2 = {
    animate: {
      x: [-2000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="py-8 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Technologies I Work With
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My toolkit includes modern frameworks, languages, and databases to build exceptional digital experiences
          </p>
        </motion.div>

        <div className="relative overflow-hidden py-4">
          {/* First Marquee */}
          <motion.div
            variants={scrollVariant1}
            animate="animate"
            className="flex gap-6 items-center py-4"
          >
            {companiesList.map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 border border-gray-100"
              >
                <span className="text-xl">{company.icon}</span>
                <span className="font-medium text-gray-800">{company.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Marquee (reverse) */}
          <motion.div
            variants={scrollVariant2}
            animate="animate"
            className="flex gap-6 items-center py-4 mt-4"
          >
            {companiesList.map((company, index) => (
              <motion.div
                key={`${company.name}-rev-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 border border-gray-100"
              >
                <span className="text-xl">{company.icon}</span>
                <span className="font-medium text-gray-800">{company.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Fades */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-purple-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-pink-50 to-transparent z-10 pointer-events-none" />
        </div>

        {/* <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">And many more technologies in my arsenal</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Let's Build Something Together
          </motion.a>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Companies;