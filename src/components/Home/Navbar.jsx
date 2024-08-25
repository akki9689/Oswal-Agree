import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { FaRegHandPointRight, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'; // Importing React Icons
import { FaFilter } from "react-icons/fa6";
import logo from '../../images/Home/oswal-crop-logo.jpg'
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
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

  return (
    <header className="bg-white shadow-lg">
      <div className="w-10/12 container flex justify-between mx-auto px-20 py-4">
       {/* Logo */}
       <NavLink to="/" className="text-xl font-bold">
            <img src={logo} alt="Logo" className="w-[120px]" />
          </NavLink>
       
        <div className=" flex flex-col items-center gap-4">

        <div className="flex justify-end">
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <button className="bg-dark-green-100 text-white py-2 px-4 rounded flex justify-center gap-2 items-center hover:bg-light-green-300">Pay Now<span><FaRegHandPointRight /></span></button>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg">
              <FaYoutube />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg">
              <FaWhatsapp />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl bg-dark-green-100 hover:bg-light-green-300 p-2 rounded-lg">
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
             
            <div className="relative"><NavLink className="text-sm p-2 flex items-center hover:bg-dark-green-100 rounded-xl"><FaFilter className="mr-1 text-lg"/>Filter</NavLink></div>


          </nav>


        </div>
      </div>
    </header>
  );
};

export default Navbar;
