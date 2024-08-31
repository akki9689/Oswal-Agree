import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { navbarData } from '../../data/nav-links';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdownIndex(null); // Close all dropdowns when the mobile menu is toggled
  };

  const toggleDropdown = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdownIndex(index); // Open the clicked dropdown
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
        <div className="items-center hidden space-x-6 md:flex">
          {navbarData.navItems.map((item, idx) => (
            <div key={idx} className="relative group">
              <Link to={item.path} className="text-gray-800 transition hover:text-green-600">
                {item.label}
              </Link>
              {item.dropdown && (
                <ul className="absolute left-0 z-20 hidden w-48 text-gray-800 bg-yellow-300 border shadow-md top-full group-hover:block">
                  {item.dropdown.map((dropdownItem, dropdownIdx) => (
                    <li key={dropdownIdx} className="bg-white border-b border-black hover:bg-yellow-100">
                      <Link
                        to={dropdownItem.path}
                        className="block px-4 py-2"
                      >
                        {dropdownItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center ml-auto md:hidden">
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
      {isMobileMenuOpen && (
        <ul className="absolute left-0 z-20 w-full mt-0 bg-white top-full md:hidden">
          {navbarData.navItems.map((item, idx) => (
            <li key={idx} className="relative border-b border-black">
              <a
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.dropdown && idx)}
                className="flex items-center justify-between px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-100"
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
              {item.dropdown && openDropdownIndex === idx && (
                <ul className="pl-4 mt-2 bg-white">
                  {item.dropdown.map((dropdownItem, dropdownIdx) => (
                    <li key={dropdownIdx} className="mb-2 border-t border-black rounded-lg">
                      <Link
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-gray-800 hover:bg-yellow-100"
                        onClick={handleDropdownItemClick} // Hide menu on dropdown item click
                      >
                        {dropdownItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <div className="flex justify-around p-4">
            {navbarData.socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 transition hover:text-green-800"
              >
                {link.label === 'Facebook' && <FaFacebookF />}
                {link.label === 'Instagram' && <FaInstagram />}
                {link.label === 'YouTube' && <FaYoutube />}
                {link.label === 'WhatsApp' && <FaWhatsapp />}
                {link.label === 'LinkedIn' && <FaLinkedinIn />}
              </a>
            ))}
          </div>
        </ul>
      )}

      {/* Desktop Social Media Links */}
      <div className="items-center hidden space-x-2 md:flex">
        {navbarData.socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 transition hover:text-green-800"
          >
            {link.label === 'Facebook' && <FaFacebookF />}
            {link.label === 'Instagram' && <FaInstagram />}
            {link.label === 'YouTube' && <FaYoutube />}
            {link.label === 'WhatsApp' && <FaWhatsapp />}
            {link.label === 'LinkedIn' && <FaLinkedinIn />}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
