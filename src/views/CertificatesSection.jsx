import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BadgeCheck, Code, Cloud, Cpu, Database, Shield, BookOpen, BarChart2, Globe } from "lucide-react";

const CertificatesSection = ({ theme = 'dark' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const certificates = [
    {
      id: 1,
      title: "Python Programming for Everybody",
      issuer: "University of Michigan",
      date: "2024",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "Python Programming",
        "Scripting",
        "Programming Principles",
        "Functions & Loops",
        "Computational Thinking"
      ],
      link: "https://www.coursera.org/account/accomplishments/verify/VWP53PQBVLZB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      id: 2,
      title: "Machine Learning for Engineering and Science Applications",
      issuer: "NPTEL - IIT Madras",
      date: "Apr 2024",
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        "Machine Learning",
        "Supervised & Unsupervised Learning",
        "Model Evaluation",
        "Applied Data Science",
        "Engineering Applications"
      ],
      link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs38/Course/NPTEL24CS38S45430477430427468.pdf"
    },
    {
      id: 3,
      title: "Career Essentials in Data Analysis",
      issuer: "Microsoft & LinkedIn",
      date: "2024",
      icon: <BarChart2 className="w-6 h-6" />,
      skills: [
        "Data Analysis",
        "Excel",
        "Data Visualization",
        "SQL Basics",
        "Analytical Thinking"
      ],
      link: "https://www.linkedin.com/learning/certificates/4af09a0702d30d425005b7d6a0e02aa0ea5d663d31dd3eae3e3799d1b160dc24"
    },
    {
      id: 4,
      title: "Cybersecurity",
      issuer: "Microsoft & LinkedIn",
      date: "2024",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        "Cybersecurity Fundamentals",
        "Threat Detection",
        "Network Security",
        "Risk Management",
        "Security Best Practices"
      ],
      link: "https://www.linkedin.com/learning/certificates/5f84f598c1c7ffe1404ef8e2c4b1bc5c6d625d74a68045959e44c2a867655b9f?trk=share_certificate"
    },
    {
      id: 5,
      title: "Web Development Internship Program",
      issuer: "Verzeo (in collaboration with IBM)",
      date: "2022",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        "HTML & CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Project Development"
      ],
      link: "https://www.linkedin.com/learning/certificates/5f84f598c1c7ffe1404ef8e2c4b1bc5c6d625d74a68045959e44c2a867655b9f?trk=share_certificate"
    }
    
  ];

  // Theme classes
  const themeClasses = {
    container: theme === 'dark' 
      ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100'
      : 'bg-gradient-to-b from-gray-50 to-white text-gray-800',
    card: theme === 'dark' 
      ? 'bg-gray-800 border-gray-700 hover:border-blue-400'
      : 'bg-white border-gray-200 hover:border-blue-500',
    title: theme === 'dark' ? 'text-white' : 'text-gray-900',
    text: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
    iconBg: theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100',
    iconColor: theme === 'dark' ? 'text-blue-400' : 'text-blue-600',
    skill: theme === 'dark' 
      ? 'bg-gray-700 text-blue-300' 
      : 'bg-gray-100 text-blue-600',
    button: theme === 'dark' 
      ? 'bg-gray-700 hover:bg-gray-600 text-white'
      : 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    imageBg: theme === 'dark' 
      ? 'bg-gray-700' 
      : 'bg-gray-100'
  };

  return (
    <section 
      ref={ref}
      className={`relative overflow-hidden py-16 md:py-24 transition-colors duration-500 ${themeClasses.container}`}
      id="certificates"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} mb-4`}>
            <BadgeCheck className={`w-5 h-5 mr-2 ${themeClasses.iconColor}`} />
            <span className="text-sm font-medium text-blue-400">Certifications</span>
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${themeClasses.title}`}>
            Professional Certifications
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${themeClasses.text}`}>
            Validated expertise in cutting-edge technologies from industry leaders
          </p>
        </motion.div>

        {/* 4-Column Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-lg ${themeClasses.card}`}
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-lg ${themeClasses.iconBg} ${themeClasses.iconColor} mr-4`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-1 ${themeClasses.title}`}>{cert.title}</h3>
                      <p className={`text-xs ${themeClasses.text}`}>{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 mb-6">
                    <h4 className={`text-xs font-semibold mb-2 ${themeClasses.text}`}>Skills Validated:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className={`text-xs px-2 py-1 rounded-full ${themeClasses.skill}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-center text-sm font-medium px-4 py-2 rounded-lg transition-colors ${themeClasses.button}`}
                  >
                    View Certificate
                  </a>
                ) : (
                  <button
                    disabled
                    className={`text-center text-sm font-medium px-4 py-2 rounded-lg opacity-50 cursor-not-allowed ${themeClasses.button}`}
                  >
                    Certificate Not Available
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;