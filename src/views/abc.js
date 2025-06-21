import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import yourImage from "../assets/dp.jpg";

const About = () => {
  const theme = useContext(ThemeContext);
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  // Floating animation with more pronounced movement
  const floatingAnimation = {
    y: [0, -25, 0],
    rotate: [0, -3, 3, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // More dynamic orb animation
  const orbAnimation = (index) => ({
    rotate: 360,
    y: [0, -15, 0],
    transition: {
      duration: 25 + index * 3,
      repeat: Infinity,
      ease: "linear"
    }
  });

  return (
    <section id="about" className="relative overflow-hidden bg-white">
      {/* Animated decorative elements that will overlap text */}
      <motion.div 
        className="absolute top-1/4 -right-40 w-80 h-80 rounded-full bg-blue-100 opacity-40 mix-blend-multiply filter blur-3xl"
        style={{ y }}
        animate={{
          x: [0, -100, 0],
          rotate: 360
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-purple-100 opacity-30 mix-blend-multiply filter blur-3xl"
        style={{ y }}
        animate={{
          x: [0, 100, 0],
          rotate: -360
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Title Section with overlapping elements */}
          <motion.div variants={item} className="text-center mb-24 relative">
            <div className="relative inline-block">
              <motion.h2 
                className="text-6xl font-bold text-gray-900 relative z-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                About Me
              </motion.h2>
              
              {/* Animated underline that bleeds into text */}
              <motion.div 
                className="absolute bottom-0 left-0 h-4 bg-blue-400 rounded-full z-0"
                initial={{ width: 0 }}
                whileInView={{ width: '110%' }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ 
                  bottom: '10%',
                  opacity: 0.7,
                  filter: 'blur(6px)',
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
            
            {/* Floating decorative elements */}
            <motion.div 
              className="absolute -top-10 -left-20 w-40 h-40 rounded-full bg-blue-200 opacity-20 filter blur-xl"
              animate={{
                y: [0, -40, 0],
                x: [0, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          {/* Profile and Info Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Profile Image with Overlapping Animations */}
            <motion.div
              variants={item}
              className="w-full lg:w-2/5 flex justify-center relative"
              style={{ zIndex: 2 }}
            >
              <div className="relative group" style={{ perspective: '1000px' }}>
                {/* Floating animation container */}
                <motion.div 
                  className="relative"
                  animate={floatingAnimation}
                >
                  {/* Dynamic tech orbs that will overlap adjacent content */}
                  {[0, 1, 2].map((orbit) => (
                    <motion.div
                      key={`orbit-${orbit}`}
                      className="absolute inset-0 flex items-center justify-center"
                      animate={orbAnimation(orbit)}
                      style={{
                        scale: 1 + orbit * 0.3,
                        zIndex: -orbit
                      }}
                    >
                      {techStack.slice(orbit * 3, orbit * 3 + 6).map((tech, index) => (
                        <motion.div
                          key={`tech-${index}`}
                          className="absolute"
                          style={{
                            transform: `rotate(${index * (60 / (orbit + 2))}deg) translateX(${120 + orbit * 50}px) rotate(-${index * (60 / (orbit + 1))}deg)`,
                            zIndex: -orbit
                          }}
                          whileHover={{ 
                            scale: 1.8,
                            zIndex: 10,
                            filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))'
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <img 
                            src={tech.link} 
                            alt={tech.name} 
                            className="w-10 h-10 object-contain"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  ))}

                  {/* Profile image with layered effects that bleed out */}
                  <div className="relative rounded-full overflow-hidden w-72 h-72 border-4 border-white shadow-2xl group-hover:shadow-blue-400/40 transition-all duration-500">
                    {/* Glow effect that will overlap */}
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl scale-90 group-hover:scale-110 transition-all duration-500"
                      animate={{
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Main image */}
                    <img 
                      src={yourImage} 
                      alt="Profile" 
                      className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-10"
                    />
                    
                    {/* Hover overlay that bleeds out */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-20 overflow-visible">
                      <motion.span 
                        className="text-white text-xl font-bold"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                        }}
                      >
                        Full Stack Developer
                      </motion.span>
                    </div>
                  </div>
                </motion.div>

                {/* Connection dots that overlap */}
                <motion.div
                  className={`absolute top-6 left-1/2 w-4 h-4 rounded-full bg-blue-500 z-30`}
                  style={{ x: -8 }}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.8, 1, 0.8],
                    boxShadow: [
                      '0 0 0 0 rgba(59, 130, 246, 0.7)',
                      '0 0 0 20px rgba(59, 130, 246, 0)'
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
            
            {/* Info Content with intentional overlaps */}
            <motion.div
              variants={container}
              className="w-full lg:w-3/5 space-y-12 relative"
              style={{ zIndex: 1 }}
            >
              {/* Decorative element that overlaps text */}
              <motion.div 
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 opacity-10 filter blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.div variants={item} className="relative">
                <motion.h4 
                  className="text-4xl font-bold text-gray-800 mb-6 relative"
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <span className="relative z-10">Who I Am</span>
                  <motion.span 
                    className="absolute -bottom-2 left-0 h-2 bg-blue-400 rounded-full z-0"
                    initial={{ width: 0 }}
                    whileInView={{ width: '50%' }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    style={{
                      opacity: 0.6,
                      filter: 'blur(4px)',
                      mixBlendMode: 'multiply'
                    }}
                  />
                </motion.h4>
                
                <motion.div 
                  className="text-xl text-gray-600 leading-relaxed relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="relative z-10">
                    I'm a passionate self-taught developer with expertise in web development, 
                    Python, and database systems. I specialize in transforming complex concepts 
                    into clean, functional applications through efficient, reusable code.
                  </p>
                  
                  <motion.p 
                    className="relative z-10 mt-6"
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
                  
                  {/* Floating decorative element that overlaps text */}
                  <motion.div 
                    className="absolute -right-10 top-1/4 w-32 h-32 rounded-full bg-purple-100 opacity-20 filter blur-xl"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 15, 0]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>
              
              <motion.div variants={item} className="relative">
                <motion.h4 
                  className="text-3xl font-bold text-gray-800 mb-6"
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  What I Do
                </motion.h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                  {[
                    "Full-stack web development",
                    "Database design & optimization",
                    "API development & integration",
                    "Performance optimization",
                    "Cloud architecture & deployment",
                    "UI/UX design implementation",
                    "DevOps & CI/CD pipelines",
                    "Technical consulting"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden ${
                        index % 2 === 0 ? 'hover:-rotate-1' : 'hover:rotate-1'
                      }`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -8,
                        borderColor: '#3B82F6',
                        boxShadow: '0 15px 30px -10px rgba(59, 130, 246, 0.3)'
                      }}
                    >
                      {/* Animated background element */}
                      <motion.div 
                        className={`absolute -bottom-10 -right-10 w-20 h-20 rounded-full opacity-10 ${
                          index % 3 === 0 ? 'bg-blue-400' : 
                          index % 3 === 1 ? 'bg-green-400' : 'bg-purple-400'
                        }`}
                        animate={{
                          scale: [1, 1.5, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 15 + index * 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      <div className="flex items-center relative z-10">
                        <motion.div 
                          className={`w-4 h-4 rounded-full mr-4 flex-shrink-0 ${
                            index % 3 === 0 ? 'bg-blue-500' : 
                            index % 3 === 1 ? 'bg-green-500' : 'bg-purple-500'
                          }`}
                          animate={{
                            scale: [1, 1.2, 1],
                            y: [0, -3, 0]
                          }}
                          transition={{
                            duration: 3 + index,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <span className="text-gray-700 font-medium">{item}</span>
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
            className="mt-32 relative"
          >
            {/* Large decorative element that will overlap */}
            <motion.div 
              className="absolute -top-32 left-1/2 w-96 h-96 rounded-full bg-blue-100 opacity-10 filter blur-3xl"
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
                className="text-4xl font-bold text-gray-800 text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Technologies & Tools
              </motion.h4>
              
              <motion.p 
                className="mt-6 text-xl text-gray-600 text-center max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Leveraging modern technologies to build exceptional digital experiences
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-16 relative z-10"
              variants={container}
            >
              {techStack.map((el, index) => (
                <motion.div
                  key={`tech-${index}`}
                  variants={item}
                  custom={index}
                  className="p-6 rounded-2xl bg-white border border-gray-200 flex flex-col items-center transition-all duration-300 hover:shadow-xl relative overflow-hidden"
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
                    className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-10 ${
                      index % 3 === 0 ? 'bg-blue-400' : 
                      index % 3 === 1 ? 'bg-green-400' : 'bg-purple-400'
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
                      className="w-16 h-16 object-contain" 
                    />
                  </motion.div>
                  
                  <motion.h4 
                    className="mt-5 text-center font-semibold text-gray-700 relative z-10"
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