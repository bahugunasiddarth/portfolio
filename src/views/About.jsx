import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import yourImage from "../assets/dp.jpg";
import { User, Code } from "react-feather";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme === "dark";

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Single orbit animation configuration
  const orbitAnimation = {
    rotate: -360,
    transition: {
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    },
  };

  // Theme classes
  const themeClasses = {
    iconColor: darkMode ? "text-gray-300" : "text-gray-600",
  };

  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* About Me Section Header */}
          <div className="flex justify-center mb-4">
            <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-50`}>
              <User className={`w-5 h-5 mr-2 text-blue-600`}    />
              <span className="text-sm font-medium text-blue-400">About Me</span>
            </div>
          </div>

          {/* Title Section */}
          <motion.div variants={item} className="text-center mb-8 md:mb-12">
              <motion.h2 
                className="text-4xl md:text-6xl font-bold text-gray-900"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                About Me
              </motion.h2>
          </motion.div>          

          {/* Profile and Info Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
            {/* Profile Image with Single Orbit Animation */}
            <motion.div
              variants={item}
              className="w-full lg:w-2/5 flex justify-center relative lg:mr-12"
              style={{ zIndex: 2 }}
            >
              <div className="relative">
                {/* Profile image */}
                <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-96 md:h-96 border-4 border-white shadow-2xl">
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <img 
                    src={yourImage} 
                    alt="Profile" 
                    className="relative w-full h-full object-cover z-10"
                  />
                </div>

                {/* Single orbit containing all tech icons, positioned outside */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={orbitAnimation}
                  style={{ zIndex: 1 }}
                >
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={`tech-${index}`}
                      className="absolute"
                      style={{
                        transform: `rotate(${index * (360 / techStack.length)}deg) translateX(${window.innerWidth < 768 ? '120px' : '240px'})`,
                      }}
                      whileHover={{
                        scale: 1.5,
                        zIndex: 10,
                        filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.7))',
                        transition: { type: "spring", stiffness: 300 },
                      }}
                    >
                      <img 
                        src={tech.link} 
                        alt={tech.name} 
                        className="w-8 h-8 md:w-12 md:h-12 object-contain transition-transform duration-200"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Info Content */}
            <motion.div
              variants={container}
              className="w-full lg:w-3/5 space-y-8 md:space-y-12"
            >
              <motion.div variants={item}>
                
                <motion.p 
                  className="text-base md:text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  I'm a passionate self-taught developer with expertise in web development, 
                  Python, and database systems. I specialize in transforming complex concepts 
                  into clean, functional applications through efficient, reusable code.
                </motion.p>
                <motion.p 
                  className="text-base md:text-xl text-gray-600 leading-relaxed mt-4 md:mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Whether architecting web app backends or designing dynamic database solutions, 
                  I excel at problem-solving and enhancing user experiences. My focus is on 
                  delivering scalable, maintainable solutions that evolve with technological 
                  demands.
                </motion.p>
              </motion.div>

              <motion.div variants={item}>
                
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    "Full-stack web development",
                    "Frontend Development",
                    "Flutter App Development",
                    "API development & integration",
                    "Performance optimization",
                    "UI/UX design implementation",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="p-4 md:p-5 rounded-lg md:rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -8,
                        borderColor: '#3B82F6',
                        boxShadow: '0 15px 30px -10px rgba(59, 130, 246, 0.3)',
                      }}
                    >
                      <div className="flex items-center">
                        <motion.div 
                          className={`w-3 h-3 md:w-4 md:h-4 rounded-full mr-3 md:mr-4 flex-shrink-0 ${
                            index % 3 === 0 ? 'bg-blue-500' : 
                            index % 3 === 1 ? 'bg-green-500' : 'bg-purple-500'
                          }`}
                          animate={{
                            scale: [1, 1.2, 1],
                            y: [0, -3, 0],
                          }}
                          transition={{
                            duration: 3 + index,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <span className="text-sm md:text-base text-gray-700 font-medium">{item}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Technologies Section with overlapping effects */}
          <motion.div
            variants={container} 
            className="mt-16 md:mt-32 relative"
          >
            {/* Technologies & Tools Section Header */}
            <div className="flex justify-center mb-4">
              <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full ${darkMode ? 'bg-blue-50' : 'bg-gray-100'}`}>
                <Code className={`w-5 h-5 mr-2 text-blue-600 `} />
                <span className="text-sm font-medium text-blue-400">Technologies & Tools</span>
              </div>
            </div>

            {/* Large decorative element that will overlap */}
            <motion.div 
              className="absolute -top-20 md:-top-32 left-1/2 w-48 h-48 md:w-96 md:h-96 rounded-full bg-blue-100 opacity-10 filter blur-3xl"
              animate={{
                x: [-100, 100, -100],
                rotate: 360
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div variants={item} className="relative z-10">
              <motion.h4 
                className="text-2xl md:text-4xl font-bold text-gray-800 text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Technologies & Tools
              </motion.h4>
              
              <motion.p 
                className="mt-4 md:mt-6 text-base md:text-xl text-gray-600 text-center max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Leveraging modern technologies to build exceptional digital experiences
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 mt-8 md:mt-16 relative z-10"
              variants={container}
            >
              {techStack.map((el, index) => (
                <motion.div
                  key={`tech-${index}`}
                  variants={item}
                  custom={index}
                  className="p-4 md:p-6 rounded-lg md:rounded-2xl bg-white border border-gray-200 flex flex-col items-center transition-all duration-300 hover:shadow-xl relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    borderColor: '#3B82F6',
                    boxShadow: '0 20px 40px -15px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  {/* Animated background element */}
                  <motion.div 
                    className={`absolute -bottom-10 -right-10 w-20 h-20 md:-bottom-20 md:-right-20 md:w-40 md:h-40 rounded-full opacity-10 ${
                      index % 4 === 3 ? 'bg-blue-400' : 
                      index % 4 === 1 ? 'bg-green-400' : 'bg-purple-400'
                    }`}
                    animate={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 20 + index * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <motion.div 
                    className="relative z-10"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 0.6 }
                    }}
                  >
                    <img 
                      alt={el.name} 
                      src={el.link} 
                      className="w-10 h-10 md:w-16 md:h-16 object-contain" 
                    />
                  </motion.div>
                  
                  <motion.h4 
                    className="mt-3 md:mt-5 text-sm md:text-base text-center font-semibold text-gray-700 relative z-10"
                    whileHover={{ 
                      color: '#3B82F6',
                      textShadow: '0 2px 10px rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    {el.name}
                  </motion.h4>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;