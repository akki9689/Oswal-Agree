import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaRegHandPointRight, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedinIn, FaSearch } from 'react-icons/fa';
import { navbarData } from '../../data/nav-links';
import { motion, AnimatePresence } from 'framer-motion';

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
    <nav className="relative z-20 px-6 py-4 bg-white shadow-md">
      <div className="flex items-center justify-center w-7/12 mx-auto md:justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 mr-5">
          <img src="/src/assets/logo.png" alt="Logo" className="h-[15vh]" />
        </div>

        <div>
          <div className="flex flex-col items-center p-2 lg:flex-row gap-y-2 lg:gap-4">
            <button className="flex items-center justify-center px-2 py-2 text-sm transition-all duration-200 rounded-lg md:px-4 md:text-base bg-light-green-200 hover:bg-dark-green-100 hover:text-white">
              Pay Now <FaRegHandPointRight className="ml-1" />
            </button>

            <div className="flex gap-x-1 md:gap-x-2">
              {navbarData.socialLinks.map((social, index) => {
                const IconComponent = social.icon; // Get the icon component
                return (
                  <a key={index} href={social.link} target='_blank' rel="noopener noreferrer" style={{ color: social.color, width: iconSize.width, height: iconSize.height }} className="flex items-center gap-4 p-1 text-xl transition-all duration-300 rounded-lg cursor-pointer hover:scale-110">
                    <IconComponent style={{ width: '100%', height: '100%' }} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Items */}
          <div className="items-center hidden space-x-6 lg:flex">
            {navbarData.navItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => toggleDropdown(idx)}
                onMouseLeave={() => setOpenDropdownIndex(null)}
              >
                <Link to={item.path} className="text-gray-800 transition hover:text-green-600">
                  {item.label}
                </Link>
                {item.dropdown && (
                  <AnimatePresence>
                    {openDropdownIndex === idx && (
                      <motion.ul
                        className="absolute left-0 z-20 w-48 text-gray-800 rounded-lg shadow-md top-full"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {item.dropdown.map((dropdownItem, dropdownIdx) => (
                          <li key={dropdownIdx} className="bg-white border-b border-black rounded-lg hover:bg-yellow-100">
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
          </div>
        </div>

        {/* Search Icon for Desktop */}
        <div className="items-center hidden lg:flex">
          <button className="text-gray-800 transition duration-300 focus:outline-none hover:text-green-600">
            <FaSearch className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center ml-auto lg:hidden">
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
            className="absolute left-0 z-20 w-full mt-0 bg-white top-full lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Search Icon in Mobile Menu */}
            <li className="flex items-center justify-between px-4 py-2 text-gray-800 border border-black rounded-lg cursor-pointer hover:bg-gray-100">
              <span>Search</span>
              <FaSearch className="w-6 h-6" />
            </li>

            {navbarData.navItems.map((item, idx) => (
              <li key={idx} className="relative">
                <a
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.dropdown && idx)}
                  className="flex items-center justify-between gap-3 px-4 py-2 text-gray-800 border border-black rounded-lg cursor-pointer hover:bg-gray-100"
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
                      className="pl-4 mt-2 bg-white"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {item.dropdown.map((dropdownItem, dropdownIdx) => (
                        <li key={dropdownIdx} className="mb-2 border-b border-black rounded-lg">
                          <Link
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-gray-800 rounded-lg hover:bg-yellow-100"
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
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
