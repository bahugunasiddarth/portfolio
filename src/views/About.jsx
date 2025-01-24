import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";


const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">A bit about me</h4>
          <p
            className={
              darkMode
                ? "mt-4 text-xl text-justify text-gray-500"
                : "mt-4 text-xl text-justify text-white"
            }
          >
            I’m a self-taught developer with a strong grasp of web development, Python, and databases.
            I thrive on turning complex ideas into simple, functional applications by writing efficient, reusable code. 
            Whether it's building the backend of a web app or creating dynamic database systems, I love solving problems and improving user experiences.
            I focus on delivering clean, scalable solutions that stand the test of time. Currently, I’m diving deeper into backend development,
            working on systems that power seamless, high-performance applications. 
            For me, every project is an opportunity to innovate and learn something new.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Technologies and Tools
          </h4>
          <p
            className={
              darkMode
                ? "mt-4 text-xl text-justify text-gray-500"
                : "mt-4 text-xl text-justify text-white"
            }
          >
            By combining the latest technologies with trusted open-source tools, 
            I build high-performance, user-centric applications and websites that work seamlessly across smartphones, tablets, and desktops.
            My goal is to create intuitive, efficient, and scalable solutions that not only meet users' needs but also exceed their expectations.
          </p>
        </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
