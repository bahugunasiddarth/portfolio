import React, { useContext } from "react";
import developerIllustration from "../assets/coding.png"; // Should be PNG with transparency
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { Link } from "react-scroll";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Premium animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const item = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5
      }
    }
  };

  const floating = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-50" : "bg-gray-900"} overflow-hidden`}
      style={{
        backgroundImage: `url('${darkMode ? cloud : cloudDark}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Animated background elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${darkMode ? "bg-blue-100" : "bg-blue-900/20"}`}
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.1
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
            scale: [1, 1 + Math.random() * 0.5]
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}

      <motion.main
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen relative z-10"
        id="/"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="sm:text-center lg:text-left">
          <motion.h1 
            className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
            variants={item}
          >
            <motion.span
              className={`block ${darkMode ? "text-gray-900" : "text-white"}`}
            >
              Hi, I am Siddharth Bahuguna
            </motion.span>
            <motion.div 
              className={`mt-2 ${darkMode ? "text-blue-600" : "text-blue-400"}`}
              variants={item}
            >
              <Typewriter
                options={{
                  strings: [
                    'Software Developer', 
                    'Python Expert', 
                    'Data Analyst',
                    'Full-Stack Developer'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 45,
                  deleteSpeed: 25,
                  cursor: "▌",
                  cursorClassName: "typewriter-cursor"
                }}
              />
            </motion.div>
          </motion.h1>

          <motion.p
            className={`mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ${
              darkMode ? "text-gray-700" : "text-gray-300"
            }`}
            variants={item}
          >
            Crafting digital experiences with clean code and innovative solutions.
            Specializing in modern web technologies and data-driven applications.
          </motion.p>

          <motion.div 
            className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4"
            variants={item}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <div className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${darkMode ? "from-blue-400 to-blue-600" : "from-blue-500 to-blue-700"} opacity-75 blur-sm group-hover:opacity-100 transition-all duration-300`}></div>
              <a
                href="https://drive.google.com/file/d/1Livk5uLSmDp3wQUbDHQruPGrkXXt7yuj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative z-10 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} md:py-4 md:text-lg md:px-10 transition-all duration-300`}
              >
                View Resume
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <div className={`absolute -inset-1 rounded-lg ${darkMode ? "bg-gray-200" : "bg-gray-800"} opacity-25 blur-sm group-hover:opacity-40 transition-all duration-300`}></div>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={`relative z-10 w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 transition-all duration-300 ${
                  darkMode 
                    ? "bg-white text-gray-900 hover:bg-gray-100" 
                    : "bg-gray-900/10 text-white border-gray-700 hover:bg-gray-900/20"
                }`}
              >
                Contact Me
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="relative md:w-3/6 hidden sm:block"
          variants={floating}
          animate="float"
        >
          {/* Transparent image container with floating effect */}
          <div className="relative">
            <motion.img
              src={developerIllustration}
              alt="Developer illustration"
              className="w-full h-auto drop-shadow-2xl"
              style={{
                filter: darkMode ? "drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1))" : "drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))"
              }}
            />
          </div>
        </motion.div>
      </motion.main>

      <style jsx global>{`
        .typewriter-cursor {
          ${darkMode ? "color: rgba(37, 99, 235, 0.8)" : "color: rgba(147, 197, 253, 0.8)"};
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Home;