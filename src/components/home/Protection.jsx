import React from 'react';
import oneside from '../../images/Home/oneside.png';
import secondside from '../../images/Home/secondside.png';

const parseText = (text) => {
  return text
    .replace(/Oswal Crop Protection Pvt. Ltd./g, '<strong>Oswal Crop Protection Pvt. Ltd.</strong>')
    .replace(/Mr. Ramesh Bansal/g, '<strong>Mr. Ramesh Bansal</strong>')
    .replace(/ISO 9001:2015 certified company/g, '<strong>ISO 9001:2015 certified company</strong>');
};

const Companyprotection = ({ data }) => {
  return (
    <section className="p-4">
      <div className="flex flex-col md:flex-row">
        {/* Left side: Two images positioned */}
        <div className="relative md:w-1/2 mb-4 md:mb-0">
          <img
            src={oneside}
            alt="First image"
            className="h-auto"
          />
          <img
            src={secondside}
            alt="Second image"
            className="absolute bottom-0 right-0 h-auto rounded-lg shadow-lg translate-x-8 translate-y-80"
            style={{ zIndex: 1 }}
          />
        </div>

        {/* Right side: Text content */}
        <div className="md:w-1/2 pl-4">
          {data.map(item => (
            <div
              key={item.id}
              dangerouslySetInnerHTML={{ __html: parseText(item.content) }}
              className="mb-4"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companyprotection;
