import React from "react";
import { GraduationCap, School, BookOpen, Award, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const educationData = [
    {
      id: 1,
      degree: "Senior Secondary (Class 12)",
      institution: "Asha Modern School",
      period: "2019 - 2020",
      
      image: "https://i.ibb.co/5xc5mtdV/04102017-T182846616.png",
      achievements: [
      ],
      logo: "/images/dps-logo.png"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Maharaja Agrasen Himalayan Garhwal University",
      period: "2020 - 2023",
        description: "Studied core subjects like programming, databases, and web development. Completed practical projects and internships.",
        image: "https://i.ibb.co/h3DTNjt/Nq-Wiw8-VOx-Nlv-L3vc2-J7u2-S-Ov-Wtua-Fu-D-Hzz-Ms-Y3-X6-Y56-CMNr-Gp-ZEVvwxl-Kcix-BNHLfihq4-HNw-s900-c.png",
        achievements: [
            "Analyzed sales data using Python and Excel to find key business insights",
            "Built a dashboard in Power BI to visualize student performance trends",
            "Completed internship focused on data cleaning and reporting using SQL and Pandas"
          ],
      logo: "/path/to/mit-logo.png"
    },
    {
      id: 3,
      degree: "Master of Computer Applications (MCA)",
      institution: "GAUTAM BUDDHA UNIVERSITY",
      period: "2023 - 2025",
      description: "Specialized in Data Science with focus on Python, databases, and real-world project development. Combined analytical skills with full-stack and app development experience.",
      image: "https://i.ibb.co/JwxQ0yhr/gbulogo.png",
      achievements: [
        "Developed a cross-platform Event Booking App using Flutter and Firebase",
        "Built a complete e-commerce website using React.js, Node.js, Express.js, and MongoDB",
        "Created and deployed LiveCare Hospital management system using HTML, CSS, Python, and MongoDB; hosted on Vercel"
      ],
      logo: "/images/mahagarhwal-logo.png"
    },
    {
      id: 4,
      degree: "Master of Business Administration (MBA)",
      institution: "Delhi University, School of Open Learning (DUSOL)",
      period: "2024 - 2026",
      description: "Focused on management principles, strategic thinking, and practical problem-solving in business environments.",
      image: "https://i.ibb.co/4g15JMQ3/60-years-Logo.png",
      achievements: [
        "Solved real-world case studies on business challenges and strategy",
        "Led a group project to improve team workflow and productivity",
        "Learned how to make data-driven decisions in management"
      ],
      logo: "/images/dusol-logo.png"
}


  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section  className="relative py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8" id="EducationSection">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-blue-50 opacity-70 blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-purple-50 opacity-70 blur-[100px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-50 mb-6"
          >
            <GraduationCap className="mr-2 text-blue-600 w-5 h-5" />
            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
              Academic Journey
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Educational Excellence
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            A strong academic journey through top institutions and a passion for continuous learning.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pt-8">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-1/2 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-purple-200 transform -translate-x-1/2 hidden md:block"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-12 md:space-y-16"
          >
            {educationData.map((item, index) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline image - desktop */}
                <div className="hidden md:flex absolute left-1/2 w-12 h-12 rounded-full bg-white border-2 border-white transform -translate-x-1/2 -translate-y-6 items-center justify-center z-10 shadow-sm overflow-hidden">
                  <img src={item.image} alt={item.institution} className="w-full h-full object-cover" />
                </div>
                
                {/* Content Card */}
                <div className={`w-full p-6 sm:p-8 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                  index % 2 === 0 ? 'md:w-[48%] md:mr-auto' : 'md:w-[48%] md:ml-auto'
                }`}>
                  <div className="flex items-start">
                    {/* Mobile image */}
                    <div className="md:hidden mr-4">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-sm overflow-hidden">
                        <img src={item.image} alt={item.institution} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{item.degree}</h3>
                          <p className="text-blue-600 font-medium">{item.institution}</p>
                        </div>
                        <p className="text-sm text-gray-500">{item.period}</p>
                      </div>
                      
                      <p className="text-gray-600 mt-4">{item.description}</p>
                      
                      {/* Achievements */}
                      <div className="mt-6 space-y-2">
                        {item.achievements.map((achievement, aIndex) => (
                          <div key={aIndex} className="flex items-start">
                            <ChevronRight className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                            <p className="text-gray-600 text-sm">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center pt-16"
        >
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center mx-auto">
             Complete Credentials
            <Award className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;