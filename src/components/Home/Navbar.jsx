import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { SocialIcon } from 'react-social-icons';
import { FaBars, FaTimes, FaRegHandPointRight, FaFilter, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../images/Home/oswal-crop-logo.jpg';
import { navbarData } from '../../data/nav-links'

const Navbar = () => {
  const { navItems, socialLinks } = navbarData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeMobileSubDropdown, setActiveMobileSubDropdown] = useState(null);
  let hideDropdownTimeout;

  useEffect(() => {
    return () => {
      clearTimeout(hideDropdownTimeout);
    };
  }, []);

  const handleMouseEnter = (dropdownId) => {
    clearTimeout(hideDropdownTimeout);
    setActiveDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    hideDropdownTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 400);
  };

  const handleSubMouseEnter = (dropdownId) => {
    clearTimeout(hideDropdownTimeout);
    setActiveSubDropdown(dropdownId);
  };

  const handleSubMouseLeave = () => {
    hideDropdownTimeout = setTimeout(() => {
      setActiveSubDropdown(null);
    }, 400);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileDropdownToggle = (dropdownId) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdownId ? null : dropdownId);
  };

  const handleMobileSubMouseEnter = (SubdropdownId) => {
    setActiveMobileSubDropdown(activeMobileSubDropdown === SubdropdownId ? null : SubdropdownId);
  };


  const renderDropdown = (dropdown, subDropdownId = null) => (
    <ul className="absolute left-0 top-full mt-2 w-56 bg-light-green-200 shadow-md z-40">
      {dropdown.map((item) => (
        <li
          key={item.label}
          onMouseLeave={item.subDropdown ? handleSubMouseLeave : undefined}
          onMouseEnter={item.subDropdown ? () => handleSubMouseEnter(item.label) : undefined}
          className="relative"
        >
          <NavLink
            to={item.path}
            className={`block px-4 py-2 ${item.subDropdown ? 'flex items-center' : ''
              } hover:bg-yellow-100 border-b-2 border-b-dark-green-100`}
          >
            {item.label}
            {item.subDropdown && <IoIosArrowForward className="ml-1" />}
          </NavLink>
          {item.subDropdown && activeSubDropdown === item.label && (
            <ul className="absolute left-full top-0 mt-0 w-48 bg-light-green-200 shadow-md">
              {item.subDropdown.map((subItem) => (
                <li key={subItem.label}>
                  <NavLink to={subItem.path} className="block px-4 py-2 hover:bg-yellow-100">
                    {subItem.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <header className="bg-white shadow-lg">
      <div className="container w-10/12 flex justify-between mx-auto px-6 md:px-20 py-4">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold">
          <img src={logo} alt="Logo" className="w-[100px] smd:w-[120px]" />
        </NavLink>

        {/* MOBILE MODE: Payment Button and Social Icons */}

        <div className="flex flex-col items-center space-x-4 p-2 smd:hidden">
          <button className="text-sm bg-dark-green-100 text-white mb-2 py-2 px-2 rounded flex justify-center items-center hover:bg-light-green-300 transition-all duration-200">
            Pay Now <FaRegHandPointRight className="ml-1"/>
          </button>
          <div className="flex space-x-1 ">
          {socialLinks.map(({ url, Icon }) => (
            <div
              key={url}
              className="text-xl p-1 bg-dark-green-100 hover:bg-light-green-300 rounded-lg flex items-center"
            >
              <SocialIcon url={url} style={{ width: 18, height: 18 }} />
            </div>
          ))}

          </div>
          
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Links */}
        <div className="hidden lg:flex flex-col items-center gap-4">
          {/* Social Media Icons (for larger screens) */}
          <div className="flex justify-end">
            <div className="flex space-x-6">
              <button className="bg-dark-green-100 text-white py-2 px-4 rounded flex justify-center gap-2 items-center hover:bg-light-green-300 transition-all duration-200">
                Pay Now <FaRegHandPointRight />
              </button>

              {socialLinks.map(({ url }) => (
                <div   key={url} className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg flex items-center">
                  <SocialIcon
                  url={url}
                  style={{ width: 30, height: 30 }}
                  
                />
                </div>
                
              ))}
            </div>
          </div>

          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={item.dropdown ? () => handleMouseEnter(item.label) : undefined}
                onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
              >
                <NavLink
                  to={item.path}
                  className="p-2 flex items-center hover:bg-dark-green-100 rounded-xl"
                >
                  {item.icon ? item.icon : item.label}
                  {item.dropdown && <IoIosArrowDown className="ml-1" />}
                </NavLink>
                {item.dropdown && activeDropdown === item.label && renderDropdown(item.dropdown)}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6">
            <div className="flex justify-between mb-4">
              {/* Logo */}
              <NavLink to="/" className="text-xl font-bold">
                <img src={logo} alt="Logo" className="w-[85px]" />
              </NavLink>
              <button onClick={toggleMenu} className="text-2xl">
                <FaTimes />
              </button>
            </div>
            <nav className="space-y-4">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => handleMobileDropdownToggle(item.label)}
                    className="w-full text-left p-2 flex items-center justify-between hover:bg-dark-green-100 rounded-xl"
                  >
                    <span>{item.icon ? item.icon : item.label}</span>
                    {item.dropdown && <IoIosArrowDown />}
                  </button>
                  {item.dropdown && activeMobileDropdown === item.label && (
                    <div className="pl-4">
                      {item.dropdown.map((dropdownItem) => (
                        <div key={dropdownItem.label}>
                          <button
                            onClick={() => handleMobileSubMouseEnter(dropdownItem.label)}
                            className="w-full text-left p-2 flex items-center justify-between hover:bg-dark-green-100 rounded-xl"
                          >
                            <span>{dropdownItem.label}</span>
                            {dropdownItem.subDropdown && <IoIosArrowForward />}
                          </button>
                          {dropdownItem.subDropdown &&
                            activeMobileSubDropdown === dropdownItem.label && (
                              <ul className="pl-4">
                                {dropdownItem.subDropdown.map((subItem) => (
                                  <li key={subItem.label}>
                                    <NavLink
                                      to={subItem.path}
                                      className="block p-2 hover:bg-dark-green-100 rounded-xl"
                                    >
                                      {subItem.label}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

