import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { navbarData } from '../../data/nav-links';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [closingDropdownIndex, setClosingDropdownIndex] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdownIndex(null); // Close all dropdowns when the mobile menu is toggled
  };

  const toggleDropdown = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null); // Close the dropdown if it's already open
    } else {
      setClosingDropdownIndex(openDropdownIndex); // Set the currently open dropdown to close
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
                      className="absolute left-0 z-20 w-48 text-gray-800 border rounded-lg shadow-md top-full"
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
                      className={`w-4 h-4 transform transition-transform ${openDropdownIndex === idx ? 'rotate-180' : ''
                        }`}
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
