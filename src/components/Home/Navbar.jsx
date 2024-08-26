import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { FaBars, FaTimes, FaRegHandPointRight, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'; // Importing React Icons
import { FaFilter } from "react-icons/fa6";
import logo from '../../images/Home/oswal-crop-logo.jpg'
const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeMobileSubDropdown, setActiveMobileSubDropdown] = useState(null);
  let hideDropdownTimeout;


  const handleMouseEnter = (dropdownId) => {
    clearTimeout(hideDropdownTimeout);  // Clear any existing timeout
    setActiveDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    hideDropdownTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 400);  // Delay before hiding the dropdown
  };

  let hideSubDropdownTimeout;

  const handleSubMouseEnter = (dropdownId) => {
    clearTimeout(hideSubDropdownTimeout);  // Clear any existing timeout
    setActiveSubDropdown(dropdownId);
  };

  const handleSubMouseLeave = () => {
    hideSubDropdownTimeout = setTimeout(() => {
      setActiveSubDropdown(null);
    }, 400);
  }


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleMobileDropdownToggle = (dropdownId) => {
    if (activeMobileDropdown === dropdownId) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(dropdownId);
    }
  };

  const handleMobileSubMouseEnter = (SubdropdownId) => {
    if (activeMobileSubDropdown === SubdropdownId) {
      setActiveMobileSubDropdown(null);
    } else {
      setActiveMobileSubDropdown(SubdropdownId);
    }
  };


  return (
    <header className="bg-white shadow-lg">
      <div className="w-10/12 container flex justify-between mx-auto px-6 md:px-20 py-4">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold ">
          <img src={logo} alt="Logo" className="w-[120px]" />
        </NavLink>
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`hidden smd:flex flex-col items-center gap-4`}>

          <div className="flex justify-end">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <button className="bg-dark-green-100 text-white py-2 px-4 rounded flex justify-center gap-2 items-center hover:bg-light-green-300 transition-all duration-200 ">Pay Now<span><FaRegHandPointRight /></span></button>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg flex items-center">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg flex items-center">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg flex items-center">
                <FaYoutube />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg flex items-center">
                <FaWhatsapp />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg flex items-center">
                <FaLinkedinIn />
              </a>
            </div>
          </div>


          {/* Navbar Links */}
          <nav className="flex space-x-6">
            <NavLink to="/" className="p-2 hover:bg-dark-green-100 rounded-xl">Home</NavLink>

            <div className="relative"
              onMouseEnter={() => handleMouseEnter('aboutUs')}
              onMouseLeave={handleMouseLeave}>
              <NavLink
                to="/about"
                className="p-2 flex items-center hover:bg-dark-green-100 rounded-xl"
              >
                About Us <IoIosArrowDown className="ml-1" />
              </NavLink>
              {activeDropdown === 'aboutUs' && (
                <ul className="absolute left-0 top-full mt-2 w-56 bg-light-green-200 shadow-md z-40" >
                  <li>
                    <NavLink to="/about/companyprofile" className="block px-4 py-2 hover:bg-yellow-200 border-b-2 border-b-dark-green-100">Company Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="block px-4 py-2   hover:bg-yellow-200 border-b-2 border-b-dark-green-100">Vision and Mission</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about/" className="block px-4 py-2  hover:bg-yellow-200 border-b-2 border-b-dark-green-100">Awards and Recognition</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about/" className="block px-4 py-2   hover:bg-yellow-200 border-b-2 border-b-dark-green-100">Terms and Condition</NavLink>
                  </li>
                  <li className="w-full">
                    <NavLink to="/about/" className="block px-4 py-2  hover:bg-yellow-200">FAQ</NavLink>
                  </li>
                </ul>
              )}
            </div>

            <div className="relative"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => handleMouseEnter('products')}>
              <NavLink
                to="/products"
                className="p-2 flex items-center hover:bg-dark-green-100 rounded-xl">
                Product Range<IoIosArrowDown className="ml-1" />
              </NavLink>
              {activeDropdown === 'products' && (
                <ul className="absolute left-0 top-full mt-2  w-56 bg-light-green-200 shadow-md z-40">
                  <li>
                    <NavLink to="/products/" className="block px-4 py-2 border-b-2 border-b-dark-green-100 hover:bg-yellow-100 ">Insecticides</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/" className="block px-4 py-2 border-b-2 border-b-dark-green-100 hover:bg-yellow-100">Fungicides</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/" className="block px-4 py-2 border-b-2 border-b-dark-green-100 hover:bg-yellow-100">Herbicides</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/" className="block px-4 py-2 border-b-2 border-b-dark-green-100 hover:bg-yellow-100">Fertilizers</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/" className="block px-4 py-2 border-b-2 border-b-dark-green-100 hover:bg-yellow-100">Bio Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/" className="block px-4 py-2 border-b-2 border-b-dark-green-100 hover:bg-yellow-100">Micro Nutrients</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/" className="block px-4 py-2 hover:bg-yellow-100">Plant Growth Regulators</NavLink>
                  </li>

                </ul>
              )}
            </div>

            <div
              className="relative"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => handleMouseEnter('gallery')}
            >
              <NavLink
                to="/gallery"
                className="p-2 flex items-center hover:bg-dark-green-100 rounded-xl">
                Gallery <IoIosArrowDown className="ml-1" />
              </NavLink>
              {activeDropdown === 'gallery' && (
                <ul className="absolute left-0 top-full mt-2 w-40 bg-light-green-200 shadow-md z-40">
                  <li>
                    <NavLink to="/gallery/photos" className="block px-4 py-2 border-b-2 border-b-dark-green-100 hover:bg-yellow-100">Video Gallery</NavLink>
                  </li>
                  <li className="relative"
                    onMouseLeave={handleSubMouseLeave}
                    onMouseEnter={() => handleSubMouseEnter('photos')}>
                    <NavLink
                      to="/gallery/"
                      className="flex px-4 py-2  items-center hover:bg-yellow-100"
                    >
                      Photo Gallery <IoIosArrowForward className="ml-1" />
                    </NavLink>
                    {activeSubDropdown === 'photos' && (
                      <ul className="absolute left-full top-0 mt-0 w-48 bg-light-green-200 shadow-md">
                        <li>
                          <NavLink to="/gallery/" className="block px-4 py-2 border-b-2 border-b-dark-green-200 hover:bg-yellow-100">Sales Achievement</NavLink>
                        </li>
                        <li>
                          <NavLink to="/gallery/" className="block px-4 py-2  hover:bg-yellow-100">Photo Factory</NavLink>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </div>


            <div className="relative"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => handleMouseEnter('career')}>
              <NavLink
                to="/career"
                className="p-2 flex items-center hover:bg-dark-green-100 rounded-xl">Career<IoIosArrowDown className="ml-1" /></NavLink>
              {activeDropdown === 'career' && (
                <ul className="absolute left-0 mt-2 top-full w-48 bg-light-green-200 shadow-md z-40">
                  <li><NavLink to="/career/" className="block px-4 py-2 border-b-2 border-b-dark-green-100 hover:bg-yellow-100">Life at Oswal</NavLink></li>
                  <li><NavLink to="/career/" className="block px-4 py-2  hover:bg-yellow-100">Vacancy</NavLink></li>
                </ul>)}
            </div>



            <div className="relative"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => handleMouseEnter('contact')}>
              <NavLink
                to="/contact"
                className="p-2 flex items-center hover:bg-dark-green-100 rounded-xl">Contact Us<IoIosArrowDown className="ml-1" /></NavLink>
              {activeDropdown === 'contact' && (
                <ul className="absolute left-0 mt-2 top-full w-48 bg-light-green-200 shadow-md z-40">
                  <li><NavLink to="/contactUs/" className="block px-4 py-2 border-b-2 border-b-dark-green-100 hover:bg-yellow-100">Contact</NavLink></li>
                  <li><NavLink to="/contactUs/" className="block px-4 py-2  hover:bg-yellow-100">Branches</NavLink></li>
                </ul>)}
            </div>

            <div className="relative"><NavLink className="text-sm p-2 flex items-center hover:bg-dark-green-100 rounded-xl"><FaFilter className="mr-1 text-lg" />Filter</NavLink></div>

            {/* Sliding Menu for Smaller Screens */}
            {/* Sliding Mobile Menu */}
            <nav className={`lg:hidden fixed top-0 right-0 h-full w-3/4 bg-light-green-200 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
              <ul className="flex flex-col space-y-4 mt-24 mx-4 justify-center items-center">
                <li>
                  <NavLink to="/" className="block text-xl font-bold text-center p-4 bg-dark-green-100 rounded-xl">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="block text-xl font-bold text-center p-4 bg-dark-green-100 rounded-xl">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/products" className="block text-xl font-bold text-center p-4 bg-dark-green-100 rounded-xl">Product Range</NavLink>
                </li>
                <li>
                  <NavLink to="/gallery" className="block text-xl font-bold text-center p-4 bg-dark-green-100 rounded-xl">Gallery</NavLink>
                </li>
                <li>
                  <button className="bg-dark-green-100 text-white py-2 px-4 rounded-lg flex justify-center gap-2 items-center mx-auto hover:bg-light-green-300 transition-all duration-200">
                    Pay Now<span><FaRegHandPointRight /></span>
                  </button>
                </li>
              </ul>
            </nav>

          </nav>


        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden fixed top-0 left-0 w-full h-full z-50 bg-white-shade-100 text-richblack-500 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold">Menu</h1>
          <button onClick={toggleMenu} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col items-start space-y-2 px-6">
          <li>
            <NavLink to="/" className="p-2 block hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Home</NavLink>
          </li>
          <li className="relative">
            <button onClick={() => handleMobileDropdownToggle('aboutUs')} className="w-full text-left p-2 flex items-center hover:bg-gray-700 rounded-xl">
              About Us <IoIosArrowDown className="ml-1" />
            </button>
            {activeMobileDropdown === 'aboutUs' && (
              <ul className="pl-4 space-y-2 bg-gray-800">
                <li>
                  <NavLink to="/about/companyprofile" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Company Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Vision and Mission</NavLink>
                </li>
                <li>
                  <NavLink to="/about/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Awards and Recognition</NavLink>
                </li>
                <li>
                  <NavLink to="/about/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Terms and Condition</NavLink>
                </li>
                <li>
                  <NavLink to="/about/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>FAQ</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button onClick={() => handleMobileDropdownToggle('products')} className="w-full text-left p-2 flex items-center hover:bg-gray-700 rounded-xl">
              Product Range <IoIosArrowDown className="ml-1" />
            </button>
            {activeMobileDropdown === 'products' && (
              <ul className="pl-4 space-y-2 bg-gray-800">
                <li>
                  <NavLink to="/products/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Insecticides</NavLink>
                </li>
                <li>
                  <NavLink to="/products/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Fungicides</NavLink>
                </li>
                <li>
                  <NavLink to="/products/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Herbicides</NavLink>
                </li>
                <li>
                  <NavLink to="/products/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Fertilizers</NavLink>
                </li>
                <li>
                  <NavLink to="/products/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Bio Products</NavLink>
                </li>
                <li>
                  <NavLink to="/products/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Micro Nutrients</NavLink>
                </li>
                <li>
                  <NavLink to="/products/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Plant Growth Regulators</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button onClick={() => handleMobileDropdownToggle('gallery')} className="w-full text-left p-2 flex items-center hover:bg-gray-700 rounded-xl">
              Gallery <IoIosArrowDown className="ml-1" />
            </button>
            {activeMobileDropdown === 'gallery' && (
              <ul className="pl-4 space-y-2 bg-gray-800">
                <li>
                  <NavLink to="/gallery/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Video Gallery</NavLink>
                </li>
                <li className="relative">
                  <button onClick={() => handleMobileSubMouseEnter('photoGallery')} className="w-full text-left p-2 flex items-center hover:bg-gray-700 rounded-xl">
                    Photo Gallery <IoIosArrowDown className="ml-1" />
                  </button>
                  {activeMobileSubDropdown === 'photoGallery' && (
                    <ul className="pl-4 space-y-2 bg-gray-800">
                      <li>
                        <NavLink to="/gallery/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Sales Achievement</NavLink>
                      </li>
                      <li>
                        <NavLink to="/gallery/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Photo Factory</NavLink>
                      </li>

                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button onClick={() => handleMobileDropdownToggle('career')} className="w-full text-left p-2 flex items-center hover:bg-gray-700 rounded-xl">
              Career <IoIosArrowDown className="ml-1" />
            </button>
            {activeMobileDropdown === 'career' && (
              <ul className="pl-4 space-y-2 bg-gray-800">
                <li>
                  <NavLink to="/career/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Life at Oswal</NavLink>
                </li>
                <li>
                  <NavLink to="/career/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Vacancy</NavLink>
                </li>

              </ul>
            )}
          </li>

          <li className="relative">
            <button onClick={() => handleMobileDropdownToggle('contact')} className="w-full text-left p-2 flex items-center hover:bg-gray-700 rounded-xl">
              Career <IoIosArrowDown className="ml-1" />
            </button>
            {activeMobileDropdown === 'contact' && (
              <ul className="pl-4 space-y-2 bg-gray-800">
                <li>
                  <NavLink to="/contact/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/contact/" className="block px-4 py-2 hover:bg-gray-700 rounded-xl" onClick={toggleMenu}>Branches</NavLink>
                </li>

              </ul>
            )}
          </li>
          <li>
            <NavLink to="/filter" className="p-2 flex justify-center items-center hover:bg-gray-700 rounded-xl" onClick={toggleMenu}><FaFilter classname="ml-2" />Filter</NavLink>
          </li>
          <li>

            <ul className="flex justify-center gap-2 text-richblack-500">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg flex items-center">
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg flex items-center">
                  <FaInstagram />
                </a>

              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg flex items-center">
                  <FaYoutube />
                </a>

              </li>
              <li>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg flex items-center">
                  <FaWhatsapp />
                </a>

              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg flex items-center">
                  <FaLinkedinIn />
                </a>

              </li>
            </ul>

            <li>
              <button className="bg-dark-green-100 text-white mt-2 py-2 px-4 rounded flex justify-center gap-2 items-center text-richblack-500 hover:bg-light-green-300 transition-all duration-200 ">Pay Now<span><FaRegHandPointRight /></span></button>
            </li>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;


