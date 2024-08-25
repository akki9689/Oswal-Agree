import React from 'react';
import oneside from '../../images/Home/oneside.png';
import secondside from '../../images/Home/secondside.png';

const parseText = (text) => {
  return text
    .replace(/Oswal Crop Protection Pvt. Ltd./g, '<strong>Oswal Crop Protection Pvt. Ltd.</strong>')
    .replace(/Mr. Ramesh Bansal/g, '<strong>Mr. Ramesh Bansal</strong>')
    .replace(/ISO 9001:2015 certified company/g, '<strong>ISO 9001:2015 certified company</strong>');
};

export const Companyprotection = ({ data }) => {
  return (
    <section className="p-8 h-auto mx-auto  w-11/12">
      <div className="flex flex-col md:flex-row md:items-start">

        {/* Text content (heading, subtitle, and paragraph) - Below md */}
        <div className="flex-1 order-1 mt-8 md:mt-0">
          {/* <h2 className="text-[#EEA90E] font-[600] font-open-sans">
            About us
          </h2> */}
          <h3 className="text-[30px] font-[700] capitalize text-[#2f803c] mt-2">
            OSWAL CROP PROTECTION PVT. LTD.
          </h3>
          <p className="text-lg italic p-4 mt-12 text-left">
            “Har Kadam Par Kisaano Ka Humsafar”
          </p>

          {/* Images below heading and subtitle - Below md */}
          <div className="relative mt-8 md:hidden">
            <img
              src={oneside}
              alt="First image"
              className="w-full h-[480px] rounded-tl-3xl rounded-tr-3xl"
            />
            <img
              src={secondside}
              alt="Second image"
              className="absolute h-[480px] bottom-0 bg-white-shade-100 p-2 right-0 w-full rounded-tl-3xl rounded-tr-3xl transform translate-x-[-20px] translate-y-[180px]"
              style={{ zIndex: 1 }}
            />
          </div>

          <div className="p-4 mt-8">
            {data.map(item => (
              <div
                key={item.id}
                dangerouslySetInnerHTML={{ __html: parseText(item.content) }}
                className="mb-4 leading-8 first:mt-40 first:md:mt-0"
              />
            ))}
          </div>
        </div>

        {/* Images - Above md */}
        <div className="relative flex-1 hidden md:block md:order-1">
          <img
            src={oneside}
            alt="First image"
            className="w-full md:w-2/3 h-[480px] rounded-tl-3xl rounded-tr-3xl"
          />
          <img
            src={secondside}
            alt="Second image"
            className="absolute h-[480px] bottom-0 bg-white-shade-100 p-2 right-0 w-full md:w-2/3 rounded-tl-3xl rounded-tr-3xl transform translate-x-[-20px] translate-y-[180px]"
            style={{ zIndex: 1 }}
          />
        </div>

      </div>
    </section>
  );
};

export default Companyprotection;
