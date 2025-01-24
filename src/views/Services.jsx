import React, { useContext } from "react";
import { serviceData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={
        theme.state.darkMode
          ? "pb-20 bg-fixed bg-gradient-to-r from-gray-700 via-gray-900 to-black"
          : "pb-20 bg-fixed bg-black"
      }
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/b0/b1/f5/b0b1f5d33de00e3c21ad29bbba25e31b.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        id="services"
      >
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold text-center text-white shadow-md"
              : "text-5xl font-bold text-center text-white"
          }
        >
          Services
        </h2>
        <div className="">
          <h4 className="mt-16 text-3xl font-semibold text-blue-500">
            What I Provide
          </h4>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.length === 0 ? (
              <div className="col-span-full text-center text-2xl text-white">
                Loading Services...
              </div>
            ) : (
              serviceData.map((el) => (
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0.5 },
                  }}
                  className={
                    theme.state.darkMode
                      ? "bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl"
                      : "bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl"
                  }
                >
                  <img
                    src={el.img}
                    alt={el.name}
                    className="w-20 h-20 object-cover rounded-full mb-4 transition-transform transform hover:scale-110"
                  />
                  <h4
                    className={
                      theme.state.darkMode
                        ? "text-xl font-bold mt-4 text-gray-900"
                        : "text-xl font-bold mt-4 text-white"
                    }
                  >
                    {el.name}
                  </h4>
                  <p
                    className={
                      theme.state.darkMode
                        ? "text-lg mt-2 text-justify text-gray-700"
                        : "text-lg mt-2 text-justify text-white"
                    }
                  >
                    {el.desc}
                  </p>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
