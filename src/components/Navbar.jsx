import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;
  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "about",
    },
    {
      name: "Services",
      route: "services",
    },
    {
      name: "Projects",
      route: "projects",
    },
    {
      name: "Contact",
      route: "contact",
    },
  ];

  function toggleTheme() {
    if (darkMode === true) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  return (
    <>
      <nav  
        className={
          darkMode
            ? "bg-white border border-gray-200 shadow-lg px-4 fixed w-full top-0 z-50"
            : "bg-gray-800 border border-gray-700 shadow-lg px-4 fixed w-full top-0 z-50"
        }
      >
        <div className="flex justify-between items-center py-3 mx-auto max-w-screen-xl">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className={
                darkMode
                  ? "text-xl font-semibold text-black"
                  : "text-xl font-semibold text-white"
              }
            >
              {`Siddharth`}
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-4">
              {links.map((el) => (
                <li key={el.name} className="cursor-pointer">
                  <Link
                    to={el.route}
                    activeClass="text-white bg-blue-500"
                    spy={true}
                    smooth={true}
                    className={
                      darkMode
                        ? "block py-2 px-4 text-black hover:bg-blue-500 hover:text-white rounded-lg"
                        : "block py-2 px-4 text-white hover:bg-blue-500 hover:text-black rounded-lg"
                    }
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={toggleTheme} className="cursor-pointer">
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 hover:scale-110 transition-transform"
                  alt="Sun Icon"
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  className="w-6 hover:scale-110 transition-transform"
                  alt="Moon Icon"
                />
              )}
            </div>
          </div>
          <div className="flex md:hidden items-center space-x-4">
            <div onClick={toggleTheme} className="cursor-pointer">
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 hover:scale-110 transition-transform"
                  alt="Sun Icon"
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  className="w-6 hover:scale-110 transition-transform"
                  alt="Moon Icon"
                />
              )}
            </div>

            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance="lg"
              toggle={setToggle}
              color={darkMode ? "#000000" : "#ffffff"}
            />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className={
              darkMode
                ? "bg-white py-4 px-4 rounded-lg shadow-lg fixed top-16 right-4 z-50 w-48"
                : "bg-gray-800 py-4 px-4 rounded-lg shadow-lg fixed top-16 right-4 z-50 w-48"
            }
          >
            <ul className="space-y-2">
              {links.map((el) => (
                <li key={el.name}>
                  <Link
                    to={el.route}
                    activeClass="text-white bg-blue-500"
                    className={
                      darkMode
                        ? "block px-4 py-2 text-black hover:bg-blue-500 hover:text-white rounded-lg"
                        : "block px-4 py-2 text-white hover:bg-blue-500 rounded-lg"
                    }
                    spy={true}
                    smooth={true}
                    onClick={() => setToggle(false)}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
