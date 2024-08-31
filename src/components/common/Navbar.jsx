import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { SocialIcon } from 'react-social-icons';
import { FaBars, FaTimes, FaRegHandPointRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../images/Home/oswal-crop-logo.jpg';
import { navbarData } from '../../data/nav-links';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  const { navItems, socialLinks } = navbarData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeMobileSubDropdown, setActiveMobileSubDropdown] = useState(null);
  

  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setActiveDropdown(null);
    setActiveMobileSubDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIconSize({ width: screenWidth >= 768 ? 30 : 22, height: screenWidth >= 768 ? 30 : 22 });
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileDropdownToggle = (dropdownId) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdownId ? null : dropdownId);
  };

  const handleMobileSubDropdownToggle = (subDropdownId) => {
    setActiveMobileSubDropdown(activeMobileSubDropdown === subDropdownId ? null : subDropdownId);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' }
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container flex justify-between w-10/12 px-0 py-4 mx-auto md:px-20">
        {/* Navbar Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-[70px] xxs:[90px] md:w-[120px]" />
        </NavLink>

        {/* MOBILE MODE: Payment Button and Social Icons */}
        <div className="flex flex-col items-center p-2 gap-y-2 lg:hidden">
          <button className="flex items-center justify-center px-2 py-2 mb-2 text-sm transition-all duration-200 rounded-lg bg-light-green-200 hover:bg-dark-green-100  hover:text-white">
            Pay Now <FaRegHandPointRight className="ml-1" />
          </button>
          <div className="flex gap-x-3">

          {socialLinks.map((social, index) => {
                const IconComponent = social.icon; // Get the icon component
                return (
                  <a key={index} href={social.link} target='_blank' rel="noopener noreferrer" style={{ color: social.color }} className="flex items-center p-1 text-xl rounded-lg bg-light-green-200 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <IconComponent /> 
                  </a>
                );
              })}
            {/* {socialLinks.map(({ url }) => (
              <div
                key={url}
                className="flex items-center p-1 text-xl rounded-lg "
              >
                <SocialIcon url={url} style={{ width: iconSize.width, height: iconSize.height }} />
              </div>
            ))} */}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="text-2xl lg:hidden">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Links */}
        <div className="flex-col items-center hidden gap-4 lg:flex">

          {/* Social Media Icons (for larger screens) */}
          <div className="flex justify-end">
            <div className="flex gap-x-6">
              <button className="flex items-center justify-center gap-2 px-4 py-2  transition-all duration-300 rounded-lg bg-light-green-200 hover:bg-dark-green-100  hover:text-white">
                Pay Now <FaRegHandPointRight />
              </button>

              {socialLinks.map((social, index) => {
                const IconComponent = social.icon; // Get the icon component
                return (
                  <a key={index} href={social.link} target='_blank' rel="noopener noreferrer" style={{ color: social.color }} className="flex  items-center  text-xl rounded-lg px-2 py-[2px] transition-all duration-200  bg-light-green-200 hover:scale-110 cursor-pointer ">
                    <IconComponent /> 
                  </a>
                );
              })}

              {/* {socialLinks.map((item, index) => (
                <a href={url} target='_blank' rel="noopener noreferrer" key={index} className="flex  items-center  text-xl rounded-lg px-2 py-[2px] transition-all duration-300  bg-light-green-200 hover:bg-dark-green-100 cursor-pointer">
                  {item.icon}
                </a>
              ))} */}
            </div>
          </div>

          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={item.dropdown ? () => setActiveDropdown(item.label) : undefined}
                onMouseLeave={item.dropdown ? () => setActiveDropdown(null) : undefined}
              >
                <NavLink
                  to={item.path}
                  className="flex items-center p-2 hover:bg-dark-green-100 rounded-xl hover:text-white"
                >
                  {item.label}
                  {item.dropdown && <IoIosArrowDown className="ml-1" />}
                </NavLink>
                {item.dropdown && activeDropdown === item.label && (
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 z-40 w-56 mt-2 rounded-lg shadow-md top-full bg-light-green-200"
                  >
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.label} className="relative">
                        <NavLink to={subItem.path} className="block px-4 py-2 border-b-2 hover:bg-yellow-100 border-b-dark-green-100">
                          {subItem.label}
                        </NavLink>
                        {subItem.subDropdown && (
                          <motion.ul
                            initial="hidden"
                            animate={activeDropdown === subItem.label ? "visible" : "hidden"}
                            variants={dropdownVariants}
                            transition={{ duration: 0.3 }}
                            className="absolute top-0 w-48 mt-0 shadow-md left-full bg-light-green-200"
                          >
                            {subItem.subDropdown.map((subSubItem) => (
                              <li key={subSubItem.label}>
                                <NavLink to={subSubItem.path} className="block px-4 py-2 hover:bg-yellow-100">
                                  {subSubItem.label}
                                </NavLink>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>
            ))}

            <NavLink to="/filter" className="cursor-pointer">
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#186d26", fontSize: "28px", fontWeight: "900" }} />
            </NavLink>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 z-50 w-full p-2 bg-white shadow-lg md:hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <NavLink to="/">
                <img src={logo} alt="Logo" className="w-[70px] xxs:[90px] md:w-[120px]" />
              </NavLink>
              <button onClick={toggleMenu} className="text-2xl">
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => handleMobileDropdownToggle(item.label)}
                    className="flex items-center justify-between w-full p-2 text-lg font-semibold"
                  >
                    {item.label}
                    {item.dropdown && (
                      <IoIosArrowDown className={`ml-2 ${activeMobileDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  {item.dropdown && activeMobileDropdown === item.label && (
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-2 p-2 bg-light-green-100"
                      style={{ zIndex: 40 }}
                    >
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.label} className="relative">
                          <NavLink
                            to={subItem.path}
                            className="block w-full p-2 text-lg font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </NavLink>
                          {subItem.subDropdown && (
                            <motion.ul
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              variants={dropdownVariants}
                              transition={{ duration: 0.3 }}
                              className="flex flex-col gap-2 p-2 bg-light-green-200"
                              style={{ zIndex: 30 }}
                            >
                              {subItem.subDropdown.map((subSubItem) => (
                                <li key={subSubItem.label}>
                                  <NavLink
                                    to={subSubItem.path}
                                    className="block p-2 text-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {subSubItem.label}
                                  </NavLink>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
