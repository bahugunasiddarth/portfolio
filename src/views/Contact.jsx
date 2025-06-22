import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [hoveredContact, setHoveredContact] = useState(null);

  const contactLinks = [
    { name: "LinkedIn", icon: <FaLinkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/siddharth-bahuguna-3611a1212/" },
    { name: "GitHub", icon: <FaGithub className="w-5 h-5" />, link: "https://github.com/bahugunasiddarth" },
    { name: "Instagram", icon: <FaInstagram className="w-5 h-5" />, link: "https://www.instagram.com/bahugunasiddarth_2?igsh=OXVxZWRrOWtxaXBq" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setIsLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardHoverVariants = {
    hover: { 
      y: -5,
      transition: { 
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div 
      id="contact" 
      className={`relative overflow-hidden ${darkMode ? "bg-gray-950" : "bg-gradient-to-b from-gray-50 to-white"} pt-20 md:pt-28 min-h-screen`}
    >
      {/* Luxury background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 rounded-full ${darkMode ? "bg-indigo-900/10" : "bg-indigo-100/20"} blur-[80px] md:blur-[120px]`}></div>
        <div className={`absolute bottom-1/3 -right-20 w-64 h-64 md:w-96 md:h-96 rounded-full ${darkMode ? "bg-blue-900/10" : "bg-blue-100/20"} blur-[80px] md:blur-[120px]`}></div>
        <div className={`absolute top-1/2 left-1/2 w-60 h-60 md:w-80 md:h-80 rounded-full ${darkMode ? "bg-purple-900/10" : "bg-purple-100/15"} blur-[60px] md:blur-[100px]`}></div>
      </div>

      {/* Subtle grid overlay */}
      <div className={`absolute inset-0 opacity-10 ${darkMode ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2NjNmZjkiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNIDAgMCBMIDAgNDAgTSA0MCAwIEwgNDAgNDAgTSAwIDAgTCA0MCAwIE0gMCA0MCBMIDQwIDQwIi8+PC9zdmc+')]" : "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4MTkwZjgiIHN0cm9rZS13aWR0aD0iMC4xNSIgZD0iTSAwIDAgTCAwIDQwIE0gNDAgMCBMIDQwIDQwIE0gMCAwIEwgNDAgMCBNIDAgNDAgTCA0MCA0MCIvPjwvc3ZnPg==')]"}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Luxury header - optimized for mobile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-24"
        >
          <motion.h2 
            variants={itemVariants}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-4 md:mb-6 tracking-tight`}
          >
            <span className={`${darkMode ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400" : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"}`}>Elevate Your Vision</span> with Expert Collaboration
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className={`max-w-2xl mx-auto text-base md:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed px-4 sm:px-0`}
          >
            Let's transform your ideas into exceptional digital experiences. Share your project details and I'll craft a tailored solution.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 pb-16 md:pb-24 px-2 sm:px-0">
          {/* Luxury Contact Form - mobile optimized */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <motion.div 
              whileHover="hover"
              variants={cardHoverVariants}
              className={`p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl ${darkMode ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800/40" : "bg-white/90 backdrop-blur-sm border border-gray-200/30"} shadow-xl md:shadow-2xl ${darkMode ? "shadow-blue-500/10 hover:shadow-blue-500/20" : "shadow-blue-500/10 hover:shadow-blue-500/20"} transition-all duration-500`}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
                <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${darkMode ? "bg-blue-900/30 text-blue-400 shadow-inner" : "bg-blue-100 text-blue-600 shadow-inner"}`}>
                  <FiSend className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Project Inquiry</h3>
              </div>
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`p-4 md:p-6 rounded-lg md:rounded-xl ${darkMode ? "bg-green-900/20 text-green-100 border border-green-800/30" : "bg-green-50 text-green-800 border border-green-200"} shadow-inner`}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <FiCheckCircle className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg md:text-xl font-bold mb-1">Proposal Received</h3>
                        <p className="text-xs md:text-sm">Thank you for your inquiry. I'll review your details and respond within 24 hours with a tailored proposal.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 md:space-y-7"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className={`block mb-2 md:mb-3 text-xs md:text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"} transition-all ${activeField === 'name' ? 'opacity-100' : 'opacity-80'}`}
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={(e) => {
                            handleChange(e);
                            setActiveField('name');
                          }}
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                          className={`w-full px-4 py-3 md:px-5 md:py-4 rounded-lg md:rounded-xl text-sm ${darkMode ? "bg-gray-800/40 border-gray-700/60 text-white placeholder-gray-500 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"} border transition-all duration-300 shadow-sm`}
                          placeholder="Johnathan Smith"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className={`block mb-2 md:mb-3 text-xs md:text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"} transition-all ${activeField === 'email' ? 'opacity-100' : 'opacity-80'}`}
                      >
                        Business Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          handleChange(e);
                          setActiveField('email');
                        }}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-4 py-3 md:px-5 md:py-4 rounded-lg md:rounded-xl text-sm ${darkMode ? "bg-gray-800/40 border-gray-700/60 text-white placeholder-gray-500 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"} border transition-all duration-300 shadow-sm`}
                        placeholder="johnathan@yourcompany.com"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className={`block mb-2 md:mb-3 text-xs md:text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"} transition-all ${activeField === 'message' ? 'opacity-100' : 'opacity-80'}`}
                      >
                        Project Details
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        className={`w-full px-4 py-3 md:px-5 md:py-4 rounded-lg md:rounded-xl text-sm ${darkMode ? "bg-gray-800/40 border-gray-700/60 text-white placeholder-gray-500 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"} border transition-all duration-300 shadow-sm`}
                        placeholder="Describe your project vision, goals, timeline, and budget..."
                        required
                        value={formData.message}
                        onChange={(e) => {
                          handleChange(e);
                          setActiveField('message');
                        }}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-5 pt-3 md:pt-5">
                      <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        href="mailto:bahugunasiddhi@gmail.com"
                        className={`flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 rounded-lg md:rounded-xl transition-all w-full sm:w-auto justify-center ${darkMode ? "text-blue-400 border border-blue-400/20 hover:bg-blue-400/10 hover:border-blue-400/30" : "text-blue-600 border border-blue-600/20 hover:bg-blue-600/10 hover:border-blue-600/30"} border shadow-sm text-xs md:text-sm`}
                        aria-label="Send me an email directly"
                      >
                        <FiMail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                        <span className="font-medium">Direct Message</span>
                      </motion.a>

                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isLoading}
                        className={`px-5 py-3 md:px-7 md:py-4 rounded-lg md:rounded-xl font-medium w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 ${darkMode ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-blue-500/20" : "bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-blue-500/30"} transition-all duration-300 text-xs md:text-sm`}
                      >
                        {isLoading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span className="font-medium">Processing...</span>
                          </>
                        ) : (
                          <>
                            <span className="font-medium">Submit Proposal</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Luxury Contact Information - mobile optimized */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <motion.div 
              whileHover="hover"
              variants={cardHoverVariants}
              className={`p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl h-full ${darkMode ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800/40" : "bg-white/90 backdrop-blur-sm border border-gray-200/30"} shadow-xl md:shadow-2xl ${darkMode ? "shadow-indigo-500/10 hover:shadow-indigo-500/20" : "shadow-indigo-500/10 hover:shadow-indigo-500/20"} transition-all duration-500`}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
                <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${darkMode ? "bg-indigo-900/30 text-indigo-400 shadow-inner" : "bg-indigo-100 text-indigo-600 shadow-inner"}`}>
                  <FiMapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Connect With Me</h3>
              </div>
              
              <div className="space-y-6 md:space-y-9">
                

                <div 
                  className="flex items-start gap-4 md:gap-5 group"
                  onMouseEnter={() => setHoveredContact('email')}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${darkMode ? "bg-indigo-900/30 text-indigo-400 group-hover:bg-indigo-900/40" : "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200"} shadow-inner transition-all duration-300`}>
                    <FiMail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className={`text-base md:text-lg font-semibold mb-1 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Priority Inquiries</h4>
                    <a
                      href="mailto:bahugunasiddhi@gmail.com"
                      className={`text-xs md:text-sm ${darkMode ? "text-indigo-400 hover:text-indigo-300" : "text-indigo-600 hover:text-indigo-700"} transition-all duration-300 flex items-center gap-2 md:gap-3`}
                    >
                      bahugunasiddhi@gmail.com
                      <span className={`text-[10px] md:text-xs px-2 py-1 md:px-2.5 md:py-1 rounded-full ${darkMode ? "bg-indigo-900/30 text-indigo-300" : "bg-indigo-100 text-indigo-600"} flex items-center`}>
                        <span className="relative flex h-1.5 w-1.5 mr-1 md:h-2 md:w-2">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${darkMode ? "bg-indigo-400" : "bg-indigo-500"} opacity-75`}></span>
                          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 ${darkMode ? "bg-indigo-400" : "bg-indigo-500"}`}></span>
                        </span>
                        Fast Response
                      </span>
                    </a>
                  </div>
                </div>

                <div 
                  className="flex items-start gap-4 md:gap-5 group"
                  onMouseEnter={() => setHoveredContact('location')}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${darkMode ? "bg-purple-900/30 text-purple-400 group-hover:bg-purple-900/40" : "bg-purple-100 text-purple-600 group-hover:bg-purple-200"} shadow-inner transition-all duration-300`}>
                    <FiMapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className={`text-base md:text-lg font-semibold mb-1 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Presence</h4>
                    <address className={`not-italic text-xs md:text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} transition-all duration-300`}>
                      Greater Noida, Uttar Pradesh<br />
                      India, 201310
                    </address>
                  </div>
                </div>

                <div>
                  <h4 className={`text-base md:text-lg font-semibold mb-4 md:mb-7 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Professional Network</h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {contactLinks.map((el, index) => (
                      <motion.a
                        key={index}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        href={el.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 md:p-4 rounded-lg md:rounded-xl ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-all duration-300 shadow-sm group relative`}
                        aria-label={el.name}
                        onMouseEnter={() => setHoveredContact(el.name)}
                        onMouseLeave={() => setHoveredContact(null)}
                      >
                        <div className="text-lg md:text-xl">
                          {el.icon}
                        </div>
                        <AnimatePresence>
                          {hoveredContact === el.name && (
                            <motion.span 
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 5 }}
                              className={`absolute -bottom-7 md:-bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] md:text-xs whitespace-nowrap px-2 py-1 md:px-2.5 md:py-1 rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900 shadow-md"}`}
                            >
                              {el.name}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Ultra Premium Footer - mobile optimized */}
      <footer className={`w-full py-6 md:py-10 relative ${darkMode ? "bg-gray-900/80 text-gray-400 border-t border-gray-800/50" : "bg-white/80 text-gray-600 border-t border-gray-200/50"} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center mb-4 md:mb-6">
              <span className="relative flex h-1 w-1 mr-1.5 md:h-1.5 md:w-1.5 md:mr-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${darkMode ? "bg-blue-400" : "bg-blue-600"} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-1 w-1 md:h-1.5 md:w-1.5 ${darkMode ? "bg-blue-400" : "bg-blue-600"}`}></span>
              </span>
              <span className="relative flex h-1 w-1 mr-1.5 md:h-1.5 md:w-1.5 md:mr-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${darkMode ? "bg-indigo-400" : "bg-indigo-600"} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-1 w-1 md:h-1.5 md:w-1.5 ${darkMode ? "bg-indigo-400" : "bg-indigo-600"}`}></span>
              </span>
              <span className="relative flex h-1 w-1 md:h-1.5 md:w-1.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${darkMode ? "bg-purple-400" : "bg-purple-600"} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-1 w-1 md:h-1.5 md:w-1.5 ${darkMode ? "bg-purple-400" : "bg-purple-600"}`}></span>
              </span>
            </div>
            <p className="text-xs md:text-sm font-medium mb-2 md:mb-3 flex items-center">
              <span className={`px-1 md:px-2 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>✦</span>
              <span className="mx-1 md:mx-2">Crafted with <span className="text-red-500">♥</span> by Siddharth Bahuguna</span>
              <span className={`px-1 md:px-2 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>✦</span>
            </p>
            <p className="text-[10px] md:text-xs">
              © {new Date().getFullYear()} All Rights Reserved 
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;