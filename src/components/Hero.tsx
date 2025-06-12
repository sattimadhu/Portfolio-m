import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import profilePic from "../images/profile.png"; // Adjust this path to your actual profile image location

const Hero: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center text-white py-20 px-4 sm:px-6 lg:px-8"
      id="home"
    >
      <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full max-w-6xl gap-8 md:gap-16">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2"
            transition={{ delay: 0.1 }}
          >
            Hi, I'm
          </motion.h1>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-4"
            transition={{ delay: 0.2 }}
          >
            Madhu
          </motion.h1>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-8"
            transition={{ delay: 0.3 }}
          >
            I'm an <span className="text-blue-400">AI/ML Developer</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-8 mx-auto md:mx-0"
            transition={{ delay: 0.4 }}
          >
            Building intelligent systems and beautiful interfaces that solve real-world problems.
          </motion.p>
          <motion.div className="flex gap-4 justify-center md:justify-start" transition={{ delay: 0.5 }}>
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg font-medium hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-blue-500 text-blue-400 rounded-lg font-medium hover:bg-blue-900/30 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Picture - Now visible on mobile */}
        <motion.div
          className="flex w-full md:w-1/2 justify-center items-center mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden border-4 border-gray-800">
              <img 
                src={profilePic} 
                alt="Madhu - AI/ML Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow border-t-blue-400 border-r-blue-500"></div>
          </div>
        </motion.div>
      </div>

      {/* Down Arrow Scroll to About */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;