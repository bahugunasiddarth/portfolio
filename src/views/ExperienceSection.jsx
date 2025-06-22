import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const ExperienceSection = ({ theme = 'dark' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const experiences = [
    {
      id: 1,
      role: "Software Developer Intern",
      company: "VODIN TECHNOLOGIES PRIVATE LIMITED",
      period: "Apr 2025 - Present",
      duration: "2 years 8 months",
      location: "Coimbatore Tamil Nadu (Remote)",
      description: "Developed a full-stack Car Repair Booking Website with Next.js and FastAPI, featuring user authentication using JWT.",
      achievements: [
        "Built a full-stack Car Repair Booking platform using Next.js with TypeScript, FastAPI, and MongoDB, featuring secure JWT authentication and role-based access.",
        "Designed a responsive UI with Tailwind CSS, including real-time service booking, filtering, and dynamic form validation.",
        "Deployed frontend on Vercel and backend on Render, with environment-based configuration and optimized API performance using async FastAPI routes."
      ],
      skills: ["NextJS", "TypeScript", "FastAPI", "MongoDB", "Tailwind CSS"]
    },
    
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
    timeline: theme === 'dark' 
      ? 'border-blue-500' 
      : 'border-blue-400',
    dot: theme === 'dark' 
      ? 'bg-blue-500 border-gray-800' 
      : 'bg-blue-400 border-white'
  };

  return (
    <section 
      ref={ref}
      className={`relative overflow-hidden py-16 md:py-24 transition-colors duration-500 ${themeClasses.container}`}
      id="ExperienceSection"
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
            <Briefcase className={`w-5 h-5 mr-2 ${themeClasses.iconColor}`} />
            <span className="text-sm font-medium text-blue-400">Professional Journey</span>
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${themeClasses.title}`}>
            Work Experience
          </h2>
          
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${themeClasses.text}`}>
            My professional growth through meaningful roles and responsibilities
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className={`absolute left-6 md:left-1/2 w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0 transform -translate-x-1/2 ${themeClasses.timeline}`}
            style={{ originY: 0 }}
          />

          {/* Experience Items */}
          <div className="space-y-12 pl-10 md:pl-0">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 -translate-y-1 ${themeClasses.dot}`}></div>

                {/* Content Card */}
                <div className={`ml-6 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12 md:pl-0' : 'md:ml-auto md:pl-12 md:pr-0'} md:w-[46%]`}>
                  <div className={`rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-lg ${themeClasses.card}`}>
                    {/* Role and Company */}
                    <div className="mb-4">
                      <h3 className={`text-xl font-bold ${themeClasses.title}`}>{exp.role}</h3>
                      <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{exp.company}</h4>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center">
                        <Calendar className={`w-4 h-4 mr-2 ${themeClasses.text}`} />
                        <span className={`text-sm ${themeClasses.text}`}>{exp.period}</span>
                      </div>
                      {/* <div className="flex items-center">
                        <Clock className={`w-4 h-4 mr-2 ${themeClasses.text}`} />
                        <span className={`text-sm ${themeClasses.text}`}>{exp.duration}</span>
                      </div> */}
                      <div className="flex items-center">
                        <MapPin className={`w-4 h-4 mr-2 ${themeClasses.text}`} />
                        <span className={`text-sm ${themeClasses.text}`}>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`mb-5 ${themeClasses.text}`}>{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-5">
                      <h5 className={`font-semibold mb-2 ${themeClasses.text}`}>Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <ArrowRight className={`w-4 h-4 mt-1 mr-2 flex-shrink-0 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                            <span className={`${themeClasses.text}`}>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h5 className={`font-semibold mb-2 ${themeClasses.text}`}>Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className={`text-xs px-3 py-1 rounded-full ${themeClasses.skill}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className={`inline-flex items-center px-6 py-3 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} transition-colors duration-300`}>
            <span className="font-medium mr-2">This is just the beginning—more to come!</span>
            
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;