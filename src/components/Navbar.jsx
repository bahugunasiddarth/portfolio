import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail, FiCode, FiUser, FiBriefcase, FiMessageSquare, FiInstagram } from "react-icons/fi";
import { RiHome3Line } from "react-icons/ri";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const darkMode = theme.state.darkMode;
  
  const navLinks = [
    {
      name: "Home",
      route: "/",
      icon: <RiHome3Line className="mr-2" />
    },
    {
      name: "About",
      route: "about",
      icon: <FiUser className="mr-2" />
    },
    {
      name: "Experience",
      route: "ExperienceSection",
      icon: <FiUser className="mr-2" />
    },
    {
      name: "Education",
      route: "EducationSection",
      icon: <FiUser className="mr-2" />
    },
    {
      name: "Projects",
      route: "projects",
      icon: <FiBriefcase className="mr-2" />
    },
    {
      name: "Services",
      route: "services",
      icon: <FiCode className="mr-2" />
    },
    {
      name: "Contact",
      route: "contact",
      icon: <FiMessageSquare className="mr-2" />
    },
  ];

  const socialLinks = [
    {
      icon: <FiGithub />,
      url: "https://github.com/bahugunasiddarth",
      name: "GitHub"
    },
    {
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/siddharth-bahuguna-3611a1212/",
      name: "LinkedIn"
    },
    {
      icon: <FiInstagram />,
      url: "https://www.instagram.com/bahugunasiddarth_2?igsh=OXVxZWRrOWtxaXBq",
      name: "Email"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleTheme = () => {
    theme.dispatch({ type: darkMode ? "LIGHTMODE" : "DARKMODE" });
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className={`fixed w-full top-0 z-50 ${
          darkMode
            ? `${scrolled ? "bg-white/90 backdrop-blur-md" : "bg-white/80 backdrop-blur-sm"}`
            : `${scrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-gray-900/80 backdrop-blur-sm"}`
        } transition-all duration-300 ease-out shadow-sm ${
          scrolled ? "border-b border-opacity-10" : "border-b border-transparent"
        } ${darkMode ? "border-gray-200" : "border-gray-700"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <a
                href="/"
                className={`text-xl sm:text-2xl font-bold tracking-tight ${
                  darkMode 
                    ? "text-gray-800 hover:text-blue-500" 
                    : "text-white hover:text-blue-300"
                } transition-all duration-200 transform hover:scale-105 flex items-center`}
                style={{ fontFamily: "'Inter', 'system-ui', 'sans-serif'" }}
              >
                <span className="ml-2 sm:ml-12">
                  &lt;Siddarth/&gt;
                </span>
              </a>
            </motion.div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex space-x-1 cursor-pointer">
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.route}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.route}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onSetActive={handleSetActive}
                      className={`flex items-center px-4 py-2 rounded-full transition-all ${
                        activeLink === link.route
                          ? darkMode
                            ? "bg-blue-600 text-white shadow-lg"
                            : "bg-blue-400 text-gray-900 shadow-lg"
                          : darkMode
                            ? "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-opacity-20">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full ${
                      darkMode
                        ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                        : "text-gray-400 hover:text-blue-400 hover:bg-gray-700"
                    } transition-all text-xl`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
                
              </div>
            </div>
            
            <div className="flex lg:hidden items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-1 sm:space-x-3">
                {socialLinks.slice(0, 2).map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full ${
                      darkMode
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-gray-400 hover:text-blue-400"
                    } transition-all text-lg sm:text-xl`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
                
              </div>

              <Hamburger
                toggled={toggle}
                size={isMobile ? 20 : 24}
                duration={0.6}
                distance="lg"
                toggle={setToggle}
                color={darkMode ? "#1f2937" : "#f3f4f6"}
                rounded
                label="Show menu"
              />
            </div>
          </div>
        </div>
      </motion.nav>
      
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed top-16 sm:top-20 right-4 sm:right-6 z-50 w-11/12 max-w-xs rounded-xl ${
              darkMode
                ? "bg-white/95 backdrop-blur-lg shadow-xl"
                : "bg-gray-800/95 backdrop-blur-lg shadow-xl"
            } overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-1 p-2">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.route}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={link.route}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onSetActive={handleSetActive}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all ${
                      activeLink === link.route
                        ? darkMode
                          ? "bg-blue-600 text-white"
                          : "bg-blue-400 text-gray-900"
                        : darkMode
                          ? "text-gray-700 hover:bg-gray-100"
                          : "text-gray-300 hover:bg-gray-700"
                    }`}
                    onClick={() => setToggle(false)}
                  >
                    {link.icon}
                    <span className="text-sm sm:text-base">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
              
              <div className="flex justify-center space-x-3 pt-2 pb-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 sm:p-3 rounded-full ${
                      darkMode
                        ? "bg-gray-100 text-gray-700 hover:text-blue-600"
                        : "bg-gray-700 text-gray-300 hover:text-blue-400"
                    } transition-all`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
            onClick={() => setToggle(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;