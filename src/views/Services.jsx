import React, { useContext } from "react";
import { serviceData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(ThemeContext);

  // 3D Animation configurations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardItem = {
    hidden: { 
      y: 60,
      opacity: 0,
      rotateX: -15
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        mass: 0.8
      }
    },
    hover: {
      y: -15,
      rotateX: 5,
      scale: 1.03,
      boxShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Floating orb background component
  const OrbBackground = () => (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 300 - 150],
            y: [0, Math.random() * 300 - 150],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className={`absolute rounded-full ${
            theme.state.darkMode ? "bg-gradient-to-br from-blue-500 to-purple-600" : "bg-gradient-to-br from-blue-400 to-blue-600"
          }`}
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.2 + 0.05,
            
          }}
        />
      ))}
    </div>
  );

  return (
    <section 
      className="py-30 relative overflow-hidden"
      style={{
        background: theme.state.darkMode
          ? "radial-gradient(ellipse at center, rgba(9, 14, 26, 0.98), rgba(2, 6, 23, 1))"
          : "radial-gradient(ellipse at center, rgba(233, 243, 255, 0.98), rgba(191, 219, 254, 1))",
      }}
      id="services"
    >
      {/* Floating orb background */}
      <OrbBackground />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48cGF0aCBkPSJNNTAgMEgwdjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium header with animated elements */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-28"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <span className="text-xs font-semibold tracking-widest py-2 px-4 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
              PROFESSIONAL SERVICES
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500">
              Exceptional
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-300 dark:to-purple-500">
              Solutions
            </span>
          </motion.h2>
          
          <motion.div
            className="relative w-64 h-px mx-auto mb-12 bg-gradient-to-r from-transparent via-blue-400 to-transparent overflow-hidden"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-blue-500 to-transparent"
              initial={{ x: "-100%" }}
              whileInView={{ x: "200%" }}
              transition={{ duration: 1.5, delay: 0.8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            We deliver premium digital experiences crafted with cutting-edge technology and innovative design principles.
          </motion.p>
        </motion.header>

        {/* Luxury service cards with 3D effects */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {serviceData.map((el, index) => (
            <motion.article
              key={index}
              variants={cardItem}
              whileHover="hover"
              className={`group relative rounded-3xl p-5 overflow-hidden ${
                theme.state.darkMode
                  ? "bg-gray-800/50 border border-gray-700/30 hover:border-blue-500/40"
                  : "bg-white/95  border border-gray-200/80 hover:border-blue-300/90"
              } shadow-2xl hover:shadow-3xl transition-all duration-500 transform-style-preserve-3d`}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d"
              }}
            >
              {/* Floating particles inside card */}
              <div className="absolute inset-0 overflow-hidden opacity-20">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: [0, Math.random() * 60 - 30],
                      y: [0, Math.random() * 60 - 30],
                    }}
                    transition={{
                      duration: Math.random() * 10 + 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className={`absolute rounded-full ${
                      theme.state.darkMode ? "bg-blue-400" : "bg-blue-500"
                    }`}
                    style={{
                      width: Math.random() * 6 + 2,
                      height: Math.random() * 6 + 2,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.4 + 0.1,
                    }}
                  />
                ))}
              </div>

              {/* 3D card content */}
              <div className="relative z-10 flex flex-col items-center text-center h-full transform-style-preserve-3d">
                {/* Icon with floating effect */}
                <motion.div
                  className={`p-5 rounded-2xl mb-8 ${
                    theme.state.darkMode
                      ? "bg-gray-700/40 group-hover:bg-blue-900/30"
                      : "bg-blue-100/80 group-hover:bg-blue-200/70"
                  } transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                  whileHover={{ 
                    y: -5,
                    rotateY: 15,
                    scale: 1.1
                  }}
                >
                  <img
                    src={el.img}
                    alt={el.name}
                    className="w-16 h-16 object-contain transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110"
                  />
                </motion.div>

                {/* Title with gradient text */}
                <h3 className="text-2xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
                  {el.name}
                </h3>

                {/* Description with animated border */}
                <div className="relative mb-8 px-4 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {el.desc}
                  </p>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>

                
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Ultra-premium loading animation */}
        {serviceData.length === 0 && (
          <div className="col-span-full flex justify-center py-32">
            <motion.div
              className="relative w-24 h-24"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full"
                  initial={{ y: 0 }}
                  animate={{ y: [0, 20, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                  style={{
                    transform: `rotate(${i * 45}deg) translateX(20px) rotate(-${i * 45}deg)`
                  }}
                />
              ))}
              <div className="absolute inset-4 rounded-full border-4 border-blue-500/20" />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;