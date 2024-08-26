import { footerData } from "../../data/home/footer-data";
import { FaSearch } from 'react-icons/fa';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {

  const countryCode = footerData.contactUs.countryCode
  const phoneNum = footerData.contactUs.phone
  const formattedPhone = `${countryCode}-${phoneNum}`
  


  return (
    <footer className="py-8 bg-light-green-200">
      <div className="container px-4 mx-auto text-justify md:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={footerData.description.img} alt="Company Logo" className="w-20 mb-4" />
            <p className="mb-2 font-normal text-richblack-400 text-sm tracking-wider text-justify leading-6" dangerouslySetInnerHTML={{ __html: footerData.description.details }}>
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
            <p className="mb-4 text-richblack-400 text-sm tracking-wide  text-justify leading-6">
              {footerData.sitesAndLocations.content}
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Advance Search ..."
                className="w-full px-3 py-2 rounded-md focus:border focus:outline-none focus:border-blue-400"
              />
              <button className="px-4 py-3 text-white duration-300 transform bg-blue-600 rounded-md hover:scale-110">
                <FaSearch className="text-white-shade-100" />
              </button>
            </div>
          </div>
          {/* Contact Us & Works */}
          <div className="lg:col-span-1 lg:flex lg:flex-col lg:items-end">
            {/* Contact Us */}
            <div className="w-full mb-6 lg:w-auto lg:text-left">
              <h3 className="mb-4 text-xl text-dark-green-200"><strong>{footerData.contactUs.title}</strong></h3>
              <p className="text-richblack-400 text-sm  text-justify leading-6 flex flex-col ">
               <span> {footerData.contactUs.address} </span>
                <span>Phone: <a href={`tel:${countryCode}${phoneNum}`} className="text-richblack-400 font-semibold hover:text-richblack-500  transition-all duration-300">{formattedPhone}</a></span>
               <span>Email: <a href={`mailto:${footerData.contactUs.email}`} className="font-semibold text-richblack-400 hover:text-richblack-500 transition-all duration-300">{footerData.contactUs.email} </a>
               
                </span>
              </p>
            </div>
            {/* Works */}
            <div className="w-full lg:w-auto lg:text-left">
              <h3 className="mb-4 text-xl text-dark-green-200"><strong>{footerData.works.title}</strong></h3>
              <p className="text-richblack-400 text-sm tracking-wide text-justify leading-6">
                {footerData.works.address}
              </p>
            </div>
          </div>
        </div>
        {/* Navigation Links */}
        <div className="p-2 pt-4 mx-2 mt-8 text-center border-t border-dark-green-200 lg:mx-4">
          <div className="flex flex-wrap justify-center text-sm divide-x divide-dark-green-200 text-dark-green-200">
            {footerData.navigation1.map((item) => (
              <Link key={item.id} to={item.url} className="px-2 hover:text-richblack-500 transition-all duration-200">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center mt-4 text-sm divide-x divide-dark-green-200 text-dark-green-200">
            {footerData.navigation2.map((item) => (
              <Link key={item.id} to={item.url} className="px-2 hover:text-richblack-500 transition-all duration-200">
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
