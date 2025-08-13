import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { Folder } from 'lucide-react'; 

const techIcons = {
  "HTML": "devicon-html5-plain colored",
  "CSS": "devicon-css3-plain colored",
  "Python": "devicon-python-plain colored",
  "MongoDB": "devicon-mongodb-plain colored",
  "Vercel": "devicon-vercel-plain",
  "Reactjs": "devicon-react-original colored",
  "Nodejs": "devicon-nodejs-plain colored",
  "Expressjs": "devicon-express-original",
  "Tailwind CSS": "devicon-tailwindcss-plain colored",
  "Flutter": "devicon-flutter-plain colored",
  "Dart": "devicon-dart-plain colored",
  "Firebase": "devicon-firebase-plain colored",
  "JavaScript": "devicon-javascript-plain colored",
  "Redux": "devicon-redux-original colored",
  "SQL": "devicon-mysql-plain colored",
  "PowerBI": "devicon-powerbi-plain colored"
};

const Card = ({ imageSrc, title, description, link, demo, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: { 
      y: -8,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative group w-full max-w-[400px] mx-auto"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div 
          className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-md">{title}</h3>
        </motion.div>
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <motion.h3 
            className="text-lg sm:text-xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isExpanded ? <FiChevronUp size={18} className="sm:h-5 sm:w-5" /> : <FiChevronDown size={18} className="sm:h-5 sm:w-5" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">Click below to view the code or live demo of this project.</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
          {description.split(",").map((tech, i) => {
            const techKey = tech.trim();
            return (
              <motion.span 
                key={i}
                data-tooltip-id="tech-tooltip"
                data-tooltip-content={techKey}
                className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gray-50 text-gray-700 text-[10px] sm:text-xs font-medium border border-gray-100"
                whileHover={{ scale: 1.05, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <i className={`${techIcons[techKey] || 'devicon-code-plain'} mr-0.5 sm:mr-1 text-base sm:text-lg`}></i>
                {techKey}
              </motion.span>
            );
          })}
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 sm:gap-2 flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiGithub className="text-base sm:text-lg" />
            <span>View Code</span>
          </motion.a>
          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 sm:gap-2 flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiExternalLink className="text-base sm:text-lg" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [filter, setFilter] = useState("All");
  const [isFiltering, setIsFiltering] = useState(false);

  const projects = [
     {
      imageSrc: "https://i.ibb.co/SXb2HVzP/Screenshot-2025-08-13-225151.png",
      title: "Drvyn: Car Service Booking",
      description: " Next.js , TailwindCSS , FastAPI , TypeScript , MongoDB",
      link: "https://github.com/bahugunasiddarth",
      demo: "https://drvyn.in"
    },
    {
      imageSrc: "https://i.ibb.co/LZM7PGM/Whats-App-Image-2025-01-22-at-18-39-03-c8c85761.jpg",
      title: "LiveCare Hospital",
      description: "HTML , CSS , Python , MongoDB , Vercel ",
      link: "https://github.com/bahugunasiddarth/LiveCare-Hospital-project",
      demo: "https://livecare-gamma.vercel.app/"
    },
    {
      imageSrc: "https://i.ibb.co/3mXPKSp8/Screenshot-2025-02-23-200741.png",
      title: "Ecommerce Project ",
      description: "Reactjs , Nodejs , Mongodb , Tailwind CSS , Expressjs",
      link: "https://github.com/bahugunasiddarth/BookVault",
      demo: "https://bookvault312.vercel.app/"
    },
    {
      imageSrc: "https://i.ibb.co/gFFnj9pW/tuxpi-com-1741343172.jpg",
      title: "Event BookingApp",
      description: "Flutter , Dart , Firebase",
      link: "https://github.com/bahugunasiddarth/appbooking",
      demo: "https://drive.google.com/file/d/1DqoXkx2OCZZPuxlNDNr0HyNdgOTvHiGJ/view?usp=drivesdk"
    },
    {
      imageSrc: "https://i.ibb.co/mCTp1m2V/Screenshot-2025-06-23-030832.png",
      title: "Portfolio",
      description: "Reactjs , JS , HTML , Tailwind CSS",
      link: "https://github.com/bahugunasiddarth/portfolio",
      demo: "https://siddharthbahuguna.in"
    },
    {
      imageSrc: "https://i.ibb.co/vvVqb5c/Screenshot-2025-01-26-224637.png",
      title: "TODO Application",
      description: "Javascript , Reactjs , Nodejs , Redux , Tailwind CSS",
      link: "https://github.com/bahugunasiddarth/To-Do",
      demo: "https://to-do-webappli.vercel.app/"
    },
    {
      imageSrc: "https://i.ibb.co/NK5S6SR/Screenshot-2025-01-22-233759.png",
      title: "Color-Scheme-Switcher",
      description: "JavaScript , HTML , CSS",
      link: "https://github.com/bahugunasiddarth/Color-Scheme-Switcher",
    },
    {
      imageSrc: "https://i.ibb.co/LzfjGPr/Screenshot-2025-01-22-200858.png",
      title: "Snake game",
      description: "Python (Turtle , Time , Random)",
      link: "https://github.com/bahugunasiddarth/Snake-Game-using-Python-s-Turtle-Graphics-",
    },
    {
      imageSrc: "https://i.ibb.co/1vhsTt2/powerbi-dashboard.png",
      title: "Data Analysis",
      description: "Python , SQL , PowerBI",
      link: "https://github.com/bahugunasiddarth/yt_top_youtubers_2024",
    },
    {
      imageSrc: "https://i.ibb.co/D7rVS7H/Screenshot-2025-01-22-233835.png",
      title: "BMI Calculator",
      description: "javaScript , Tailwind CSS",
      link: "https://github.com/bahugunasiddarth/BMI-Calculator",
    },
  ];

  const techFilters = ["All", "Web", "Mobile", "Data", "Game"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => {
        if (filter === "Web") return project.description.includes("HTML") || project.description.includes("React");
        if (filter === "Mobile") return project.description.includes("Flutter");
        if (filter === "Data") return project.description.includes("Python") && project.description.includes("SQL");
        if (filter === "Game") return project.title.toLowerCase().includes("game");
        return true;
      });

  const handleFilterChange = (tech) => {
    setIsFiltering(true);
    setFilter(tech);
    setVisibleProjects(6);
    setTimeout(() => setIsFiltering(false), 500);
  };

  const handleShowMore = () => {
    setVisibleProjects(filteredProjects.length);
  };

  const handleShowLess = () => {
    setVisibleProjects(6);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-50 mb-4 ml-165">
          <Folder className="w-5 h-5 mr-2 text-blue-600" />
          <span className="text-sm font-medium text-blue-400">My Project</span>
        </div>

       <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-md sm:max-w-lg md:max-w-2xl mx-auto"
          >
            A showcase of frontends, full-stack apps, and tools — built with clean design, efficient code, and a user-first mindset.
          </motion.p>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center mb-10 sm:mb-12 md:mb-16 gap-2 sm:gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {techFilters.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => handleFilterChange(tech)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                filter === tech 
                  ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {!isFiltering && filteredProjects.slice(0, visibleProjects).map((project, index) => (
              <Card
                key={project.title}
                index={index % 6}
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
                link={project.link}
                demo={project.demo}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length > 6 && (
          <div className="text-center mt-10 sm:mt-12 md:mt-16">
            {visibleProjects < filteredProjects.length ? (
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleShowMore}
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white shadow-lg transition-all duration-300 flex items-center mx-auto gap-1.5 sm:gap-2 text-sm sm:text-base"
              >
                <span>Load More</span>
                <FiChevronDown size={16} className="sm:h-4.5 sm:w-4.5" />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleShowLess}
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium bg-white hover:bg-gray-50 text-gray-700 shadow-md transition-all duration-300 flex items-center mx-auto gap-1.5 sm:gap-2 border border-gray-200 text-sm sm:text-base"
              >
                <span>Show Less</span>
                <FiChevronUp size={16} className="sm:h-4.5 sm:w-4.5" />
              </motion.button>
            )}
          </div>
        )}
      </div>
      <Tooltip id="tech-tooltip" place="top" effect="solid" className="z-50" />
    </section>
  );
};

export default Projects;
