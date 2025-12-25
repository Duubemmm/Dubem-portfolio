import { motion } from "framer-motion";

const Preloader = () => {
  const name = "DUBEM".split("");

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-green-950"
    >
      <div className="relative flex flex-col items-center">
        
        <div className="flex mb-4">
          {name.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1
              }}
              className="text-5xl md:text-7xl font-black text-green-500 tracking-tighter"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <div className="w-48 h-1 bg-green-900 rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="w-full h-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.5)]"
          />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-6 font-mono text-green-500/70 text-sm tracking-widest uppercase"
        >
          Initializing Portfolio...
        </motion.p>
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
};

export default Preloader;