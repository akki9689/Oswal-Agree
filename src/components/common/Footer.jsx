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
            <p className="mb-2 text-sm font-normal leading-6 tracking-wider text-justify text-richblack-400" dangerouslySetInnerHTML={{ __html: footerData.description.details }}>
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
          <div className="dsx:pt-0 lg:pt-9 lg:col-span-1">
            <h3 className="mb-4 text-xl text-dark-green-200"><strong>{footerData.sitesAndLocations.title}</strong></h3>
            <p className="text-sm leading-6 tracking-wide text-justify text-richblack-400">
              {footerData.sitesAndLocations.content}
            </p>

          </div>
          {/* Contact Us & Works */}
          <div className="dsx:pt-0 lg:pt-9 lg:col-span-1 lg:flex lg:flex-col lg:items-end">
            {/* Contact Us */}
            <div className="w-full mb-4 lg:w-auto lg:text-left">
              <h3 className="mb-4 text-xl text-dark-green-200"><strong>{footerData.contactUs.title}</strong></h3>
              <p className="flex flex-col text-sm leading-6 text-justify text-richblack-400 ">
                <span> {footerData.contactUs.address} </span>
                <span>Phone: <a href={`tel:${countryCode}${phoneNum}`} className="font-semibold transition-all duration-300 text-richblack-400 hover:text-richblack-500">{formattedPhone}</a></span>
                <span>Email: <a href={`mailto:${footerData.contactUs.email}`} className="font-semibold transition-all duration-300 text-richblack-400 hover:text-richblack-500">{footerData.contactUs.email} </a>

                </span>
              </p>
            </div>
            {/* Works */}
            <div className="w-full lg:w-auto lg:text-left">
              <h3 className="mb-4 text-xl text-dark-green-200"><strong>{footerData.works.title}</strong></h3>
              <p className="text-sm leading-6 tracking-wide text-justify text-richblack-400">
                {footerData.works.address}
              </p>
            </div>
          </div>
        </div>
        {/* Navigation Links */}
        <div className="p-2 pt-4 mx-2 mt-8 text-center border-t border-dark-green-200 lg:mx-4">
          <div className="flex flex-wrap justify-center text-sm divide-x divide-dark-green-200 text-dark-green-200">
            {footerData.navigation1.map((item) => (
              <Link key={item.id} to={item.url} className="px-2 transition-all duration-200 hover:text-richblack-500">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center mt-4 text-sm divide-x divide-dark-green-200 text-dark-green-200">
            {footerData.navigation2.map((item) => (
              <Link key={item.id} to={item.url} className="px-2 transition-all duration-200 hover:text-richblack-500">
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
