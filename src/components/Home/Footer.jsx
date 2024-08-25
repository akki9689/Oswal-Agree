import { footerData } from "../../data/home/footer-data";
import { FaSearch } from 'react-icons/fa';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8 bg-light-green-200">
      <div className="container px-6 mx-auto text-justify">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={footerData.description.img} alt="Company Logo" className="w-20 mb-4" />
            <p className="mb-2 font-semibold text-dark-green-100" dangerouslySetInnerHTML={{ __html: footerData.description.details }}>
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 font-bold transition-transform duration-200 text-dark-green-100 hover:text-dark-green-200 hover:scale-110"
            >
              <span>More</span>
              <FaRegArrowAltCircleRight />
            </Link>
          </div>
          {/* Sites & Locations */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-xl text-dark-green-200"><strong>{footerData.sitesAndLocations.title}</strong></h3>
            <p className="mb-4 text-dark-green-200">
              {footerData.sitesAndLocations.content}
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Advance Search ..."
                className="w-full px-3 py-2 rounded-md focus:border focus:outline-none focus:border-blue-400"
              />
              <button className="px-4 py-3 text-white duration-300 transform bg-blue-600 rounded-md hover:scale-110 ">
                <FaSearch className="text-white-shade-100" />
              </button>
            </div>
          </div>
          {/* Contact Us & Works */}
          <div className="lg:col-span-1 lg:flex lg:flex-col lg:items-end">
            {/* Contact Us */}
            <div className="w-full mb-6 lg:w-auto lg:text-left">
              <h3 className="mb-4 text-xl text-dark-green-200"><strong>{footerData.contactUs.title}</strong></h3>
              <p className="text-dark-green-100">
                {footerData.contactUs.address}<br />
                {footerData.contactUs.phone}<br />
                {footerData.contactUs.email}
              </p>
            </div>
            {/* Works */}
            <div className="w-full lg:w-auto lg:text-left">
              <h3 className="mb-4 text-xl text-dark-green-200"><strong>{footerData.works.title}</strong></h3>
              <p className="text-dark-green-100">
                {footerData.works.address}
              </p>
            </div>
          </div>
        </div>
        {/* Navigation Links */}
        <div className="pt-4 mt-8 text-center border-t border-dark-green-200">
          <div className="flex flex-wrap justify-center space-x-4 text-sm text-dark-green-100">
            {footerData.navigation1.map((item) => (
              <Link key={item.id} to={item.url} className="hover:text-black">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center mt-2 space-x-4 text-sm text-dark-green-100">
            {footerData.navigation2.map((item) => (
              <Link key={item.id} to={item.url} className="hover:text-black">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
