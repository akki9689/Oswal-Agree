import React from 'react';
import oneside from '../../images/Home/Protection/oneside.png';
import secondside from '../../images/Home/Protection/secondside.png';

const parseText = (text) => {
  return text
    .replace(/Oswal Crop Protection Pvt. Ltd./g, '<strong>Oswal Crop Protection Pvt. Ltd.</strong>')
    .replace(/Mr. Ramesh Bansal/g, '<strong>Mr. Ramesh Bansal</strong>')
    .replace(/ISO 9001:2015 certified company/g, '<strong>ISO 9001:2015 certified company</strong>');
};

export const Protection = ({ data ,spanWidth = 'w-[80%]' }) => {
  return (
    <section className="w-full pt-20 py-10">
      <div className="mx-auto xl:w-10/12 mmd:w-11/12 w-10/12 flex flex-col mmd:flex-row mmd:gap-x-16 mmd:items-start">

        {/* Images - Above mmd */}
        <div className="relative flex-1 mmd:order-1 order-2 mmd:mt-36">
          <img
            src={oneside}
            alt="First image"
            className="w-2/3 mmd:w-2/3 mb-32 h-[50vh] rounded-tl-3xl rounded-tr-3xl"
          />
          <img
            src={secondside}
            alt="Second image"
            className="absolute h-[50vh] bottom-0 bg-white-shade-100 p-2 right-0 w-2/3 mmd:w-2/3 mb-32 rounded-tl-3xl rounded-tr-3xl transform translate-x-[-20px] translate-y-[180px]"
            style={{ zIndex: 1 }}
          />
        </div>

        {/* Text content (heading, subtitle, and paragraph) - Right side */}
        <div className="flex-1 mmd:order-2 order-1 mt-8 mmd:mt-0">
          {data.map((item, index) => (
            item.about && (
              <h2 key={index} className="text-[#EEA90E] font-[600] font-open-sans">
                About us
              </h2>
            )
          ))}
          <h3 className="text-[30px] font-[700] capitalize text-[#2f803c] mt-2 relative">
            OSWAL CROP PROTECTION PVT. LTD.
            <span className={`absolute left-0 bottom-[-10px] ${spanWidth} h-[2px] bg-[#040504]`}></span>
          </h3>

          <p className="text-lg italic p-2 mt-8 text-left text-[#0C0000] font-[600] text-[25px]">
            “Har Kadam Par Kisaano Ka Humsafar”
          </p>

          <div className="p-4 mt-8">
            {data.map((item, index) => (
              <div
                key={item.id}
                dangerouslySetInnerHTML={{ __html: parseText(item.content) }}
                className={`font-open-sans leading-[2rem] text-justify ${index !== 0 ? 'mt-2' : ''}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Protection;
