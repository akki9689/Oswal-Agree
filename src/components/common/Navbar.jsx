import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaRegHandPointRight , FaSearch } from 'react-icons/fa';
import { navbarData } from '../../data/nav-links';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [iconSize, setIconSize] = useState({ width: '40px', height: '40px' });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIconSize({ width: screenWidth >= 768 ? '40px' : '30px', height: screenWidth >= 768 ? '40px' : '30px' });
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdownIndex(null); // Close all dropdowns when the mobile menu is toggled
  };

  const toggleDropdown = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdownIndex(index); // Open the new dropdown
    }
  };

  const handleLinkClick = (e, dropdown) => {
    if (dropdown === undefined) {
      setIsMobileMenuOpen(false); // Close the mobile menu if no dropdown
    } else {
      e.preventDefault();
      toggleDropdown(dropdown); // Toggle dropdown if present
    }
  };

  const handleDropdownItemClick = () => {
    setIsMobileMenuOpen(false); // Hide the mobile menu when a dropdown item is clicked
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-20 px-6 py-4 bg-white shadow-md">
        <div className="flex flex-row items-center w-[98%] xsm:w-[95%] xs:w-11/12 sm:w-10/12 lg:w-11/12  xl:w-10/12 mx-auto lg:justify-between ">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <Link to="/"><img src="/src/assets/logo.png" alt="Logo" className="sm:h-[15vh] xsm:h-[10vh] h-[8vh]" /></Link>

          </div>

          <div className='flex lg:flex-col items-center gap-y-1 ml-4 xsm:ml-8 xs:ml-12 sm:ml-24 md:ml-32 lg:ml-0'>
            <div className="flex flex-col items-center p-2 lg:flex-row gap-y-2 lg:gap-4">
              <button className="flex items-center justify-center px-2 py-2 text-sm transition-all duration-200 rounded-lg md:px-4 md:text-base hover:bg-light-green-200 bg-dark-green-100 text-white hover:text-black">
                Pay Now <FaRegHandPointRight className="ml-1" />
              </button>

              <div className="flex  gap-x-1 md:gap-x-2">
                {navbarData.socialLinks.map((social, index) => {
                  const IconComponent = social.icon; // Get the icon component
                  return (
                    <a key={index} href={social.link} target='_blank' rel="noopener noreferrer" style={{ color: social.color, width: iconSize.width, height: iconSize.height }} className="flex justify-center items-center gap-4 p-[2px] text-lg transition-all xs:border border-green-600 hover:border-none hover:bg-light-green-200 duration-300 rounded-lg  cursor-pointer hover:scale-110">
                      <IconComponent  className='text-xl'/>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation Items */}
            <div className="items-center hidden gap-x-8 lg:flex text-[16px] font-semibold">
              {navbarData.navItems.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => toggleDropdown(idx)}
                  onMouseLeave={() => setOpenDropdownIndex(null)}
                >
                  <Link to={item.path} className="text-gray-800 transition-all duration-200 hover:text-dark-green-200 flex items-center">
                    {item.label}
                    {item.dropdown && <RiArrowDropDownLine className='text-2xl'/>
                    }
                  </Link>
                  {item.dropdown && (
                    <AnimatePresence>
                      {openDropdownIndex === idx && (
                        <motion.ul
                          className="absolute left-0 z-20 w-52 text-gray-800 rounded-lg shadow-md top-7 bg-[#cdffcd] "
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          {item.dropdown.map((dropdownItem, dropdownIdx) => (
                            <li key={dropdownIdx} className={` transition-all duration-300 hover:bg-dark-green-100 hover:text-white
                              ${
                                dropdownIdx === item.dropdown.length - 1 ? "" : "border-b border-richblack-100"
                              }
                            `}>
                              <Link
                                to={dropdownItem.path}
                                className="block px-4 py-2"
                              >
                                {dropdownItem.label}
                              </Link>
                            </li>

                          ))}
                         
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}

                  
                </div>
              ))}
               <div className="items-center hidden transition-all duration-300 lg:flex hover:scale-110 ">
                            <a href="/search-product">
                              <button className="text-dark-green-200 transition duration-300 focus:outline-none hover:text-green-600">
                                <FaSearch className="w-6 h-6" />
                              </button>
                            </a>
                          </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center ml-auto lg:hidden ">
            <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Items */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.ul
              className="absolute left-0 z-20 w-full mt-0 bg-white rounded-lg top-full lg:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              

              {navbarData.navItems.map((item, idx) => (
                <li key={idx} className="relative">
                  <a
                    href={item.path}
                    onClick={(e) => handleLinkClick(e, item.dropdown && idx)}
                    className="flex items-center justify-between gap-3 px-4 py-2 text-gray-800 border-t border-richblack-200  cursor-pointer transition-all duration-200 bg-[#e6ffe6]  hover:bg-dark-green-200 hover:text-white"
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <svg
                        className={`w-4 h-4 transform transition-transform ${openDropdownIndex === idx ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                  <AnimatePresence>
                    {openDropdownIndex === idx && (
                      <motion.ul
                        className=" bg-[#90ee90] "
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {item.dropdown.map((dropdownItem, dropdownIdx) => (
                          <li key={dropdownIdx} className={`
                            ${
                              dropdownIdx === item.dropdown.length - 1 ? "" : " border-b border-richblack-200"
                            }
                          `}>
                            <Link
                              to={dropdownItem.path}
                              className="block px-4 py-2  pl-8 transition-all durtaion-200 hover:bg-dark-green-200 hover:text-white "
                              onClick={handleDropdownItemClick} // Hide menu on dropdown item click
                            >
                              {dropdownItem.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
              {/* Search Icon in Mobile Menu */}
              <a href="/search-product">
                <li className="flex items-center justify-between px-4 py-2 text-gray-800 transition-all duration-200 border border-richblack-200 bg-[#e6ffe6] hover:text-white cursor-pointer hover:bg-dark-green-200">

                  <span>Search</span>
                  <FaSearch className="w-6 h-6" />


                </li>
              </a>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {/* Your other components go here */}
        <div className="p-4">

        </div>
      </div>
    </>
  );
};

export default Navbar;
