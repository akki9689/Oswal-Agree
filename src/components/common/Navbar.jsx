import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { SocialIcon } from 'react-social-icons';
import { FaBars, FaTimes, FaRegHandPointRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faMagnifyingGlass} from '@fortawesome/react-fontawesome';
import logo from '../../images/Home/oswal-crop-logo.jpg';
import { navbarData } from '../../data/nav-links'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { navItems, socialLinks } = navbarData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeMobileSubDropdown, setActiveMobileSubDropdown] = useState(null);
  const [iconSize, setIconSize] = useState({ width: 35, height: 35 });

  //IconSize logic

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        setIconSize({ width: 30, height: 30 });
      }
      else {
        setIconSize({ width: 22, height: 22 });
      }
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.addEventListener('resize', handleResize);
    }

  }, []);

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
    <ul className="absolute left-0 z-40 w-56 mt-2 shadow-md top-full bg-light-green-200">
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
            <ul className="absolute top-0 w-48 mt-0 shadow-md left-full bg-light-green-200">
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
      <div className="container flex justify-between w-10/12 px-0 py-4 mx-auto md:px-20">

        {/* Navbar Logo */}

        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-[70px] xxs:[90px] md:w-[120px]" />
        </NavLink>

        {/* MOBILE MODE: Payment Button and Social Icons */}

        <div className="flex flex-col items-center p-2 space-x-4 lg:hidden">
          <button className="flex items-center justify-center px-2 py-2 mb-2 text-sm text-white transition-all duration-200 rounded bg-dark-green-100 hover:bg-light-green-300">
            Pay Now <FaRegHandPointRight className="ml-1" />
          </button>
          <div className="flex space-x-1 ">
            {socialLinks.map(({ url }) => (
              <div
                key={url}
                className="flex items-center p-1 text-xl rounded-lg bg-dark-green-100 hover:bg-light-green-300"
              >
                <SocialIcon url={url} style={{ width: iconSize.width, height: iconSize.height }} />

              </div>
            ))}

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
            <div className="flex space-x-6">
              <button className="flex items-center justify-center gap-2 px-4 py-2 text-white transition-all duration-200 rounded bg-dark-green-100 hover:bg-light-green-300">
                Pay Now <FaRegHandPointRight />
              </button>

              {socialLinks.map(({ url }) => (
                <div key={url} className="flex items-center p-2 text-xl rounded-lg bg-dark-green-100 hover:bg-light-green-300">
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
                  className="flex items-center p-2 hover:bg-dark-green-100 rounded-xl"
                >
                  {item.label}
                  {item.dropdown && <IoIosArrowDown className="ml-1" />}
                </NavLink>
                {item.dropdown && activeDropdown === item.label && renderDropdown(item.dropdown)}
              </div>
            ))}

            <NavLink to="/filter" className="cursor-pointer">
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#186d26", fontSize: "28px", fontWeight: "900" }} />
            </NavLink>

          </nav>
        </div>

        {/* Mobile Menu */}

        
        {isMenuOpen && (
          <div className="absolute top-0 left-0 z-50 w-full p-2 bg-white lg:hidden">
            <div className="flex justify-between mb-4">
              {/* Logo */}
              <NavLink to="/" className="text-xl font-bold">
                <img src={logo} alt="Logo" className="w-[120px]" />
              </NavLink>
              <button onClick={toggleMenu} className="text-2xl">
                <FaTimes />
              </button>
            </div>
            <nav className="space-y-4">
              <NavLink to="/filter" className="cursor:pointer">Search products<FontAwesomeIcon icon={faMagnifyingGlass} className="ml-1" style={{ color: "#186d26", fontSize: "24px", fontWeight: "900" }} /></NavLink>
              {navItems.map((item) => (
                <div key={item.label} className="relative p-1 border-2 border-dark-green-100 rounded-xl">
                  <NavLink
                    to={item.path}
                    onClick={() => handleMobileDropdownToggle(item.label)}
                    className="flex items-center justify-between w-full p-2 text-left hover:bg-dark-green-100 rounded-xl"
                  >
                    <span>{item.label}</span>
                    {item.dropdown && <IoIosArrowDown />}
                  </NavLink>
                  {item.dropdown && activeMobileDropdown === item.label && (
                    <div className="pl-4 pr-2">
                      {item.dropdown.map((dropdownItem) => (
                        <div key={dropdownItem.label}>
                          <NavLink
                            to= {dropdownItem.path}
                            onClick={() => handleMobileSubMouseEnter(dropdownItem.label)}
                            className="flex items-center justify-between w-full p-2 m-1 text-left bg-light-green-200 hover:bg-yellow-100 rounded-xl"
                          >
                            <span>{dropdownItem.label}</span>
                            {dropdownItem.subDropdown && <IoIosArrowForward />}
                          </NavLink>
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
              <div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

