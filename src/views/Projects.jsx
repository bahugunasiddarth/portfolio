import React, { useContext, useState } from "react";
import { ThemeContext } from "../themeProvider";

const Card = ({ imageSrc, title, description, link, demo }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center">
      <img
        src={imageSrc}
        alt="Project Thumbnail"
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center mb-4 font-bold transition-all duration-300 ease-in-out shadow-md p-3 rounded-lg">{description}</p>
      <div className="flex space-x-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-green-500 hover:to-blue-600 hover:scale-105 transition-all duration-300 text-sm font-medium py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl"
        >
          Github Link
        </a>
        {/* Render Demo button only if the demo prop is provided */}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-green-500 hover:to-blue-600 hover:scale-105 transition-all duration-300 text-sm font-medium py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
};


const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const projects = [
    {
      imageSrc: "https://i.ibb.co/LZM7PGM/Whats-App-Image-2025-01-22-at-18-39-03-c8c85761.jpg",
      title: "LiveCare Hospital",
      description: "HTML , CSS , Python , MongoDB , Vercel",
      link: "https://github.com/bahugunasiddarth/LiveCare-Hospital-project",
      demo: "https://livecare-gamma.vercel.app/"
    },
    {
      imageSrc: "https://i.ibb.co/c6WYvbK/Screenshot-2025-01-23-221211.png",
      title: "Ecommerce Project ",
      description: "Reactjs , Nodejs , Mongodb , Tailwind CSS",
      link: "https://example.com/project2",
      demo: "https://livecare-gamma.vercel.app/"
    },
    {
      imageSrc: "https://i.ibb.co/4NFmTZd/Screenshot-2025-01-22-233642.png",
      title: "Portfolio",
      description: "Reactjs , JS , HTML , Tailwind CSS",
      link: "https://example.com/project3",
      demo: "https://livecare-gamma.vercel.app/"
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

  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-200 text-gray-900"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-800">Projects</h2>
        <h4 className="text-3xl font-semibold text-blue-700 text-center mb-8">
          What I Built
        </h4>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <Card
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              link={project.link}
              demo={project.demo}
            />
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleShowMore}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
