import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/Logo.png";
import { Link } from "react-scroll";

export const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "home",
  },
  {
    id: 2,
    name: "About",
    link: "about",
  },
  {
    id: 3,
    name: "Our Services",
    link: "our Services",
  },

  {
    id: 4,
    name: "Contact Us",
    link: "contact us",
    du: -130,
  },
  {
    id: 4,
    name: "Gallery",
    link: "gallery",
    du: -130,
  },
];
const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="fixed  z-10 shadow-md w-full	bg-slate-200 dark:bg-black dark:text-white duration-300
    "
    >
      <div className="container py-2 md:py-0  		">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex flex-shrink-0 items-center">
              <img alt="Your Company" src={Logo} className="h-16 w-auto" />
            </div>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 ">
              {Navlinks.map(({ id, name, link, du }) => (
                <li key={id} className="py-4 cursor-pointer ">
                  <Link
                    className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                    to={link}
                    smooth={true}
                    offset={du}
                    duration={500}
                  >
                    {name}
                  </Link>
                </li>
              ))}
              {/* DarkMode feature implement */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {/* dark  mode */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
