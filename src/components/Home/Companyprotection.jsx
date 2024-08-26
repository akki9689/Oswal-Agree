import React from 'react';
import { motion } from 'framer-motion';
import oneside from '../../images/Home/oneside.png';
import secondside from '../../images/Home/secondside.png';

const parseText = (text) => {
  return text
    .replace(/Oswal Crop Protection Pvt. Ltd./g, '<strong>Oswal Crop Protection Pvt. Ltd.</strong>')
    .replace(/Mr. Ramesh Bansal/g, '<strong>Mr. Ramesh Bansal</strong>')
    .replace(/ISO 9001:2015 certified company/g, '<strong>ISO 9001:2015 certified company</strong>');
};

export const Companyprotection = ({ data }) => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <section className="w-full pt-20 py-10 border border-red-600 ">
      <div className="mx-auto xl:w-10/12 md:w-11/12 w-10/12 flex flex-col  md:flex-row md:gap-x-16 md:items-start">

        {/* Text content (heading, subtitle, and paragraph) - Below md */}
        <motion.div
          className="flex-1 order-1 mt-8 md:mt-0 "
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {data.map((item, index) => (
            item.about && (
              <h2 key={index} className="text-[#EEA90E] font-[600] font-open-sans">
                About us
              </h2>
            )
          ))}
          <h3 className="text-[30px] font-[700] capitalize text-[#2f803c] mt-2 relative">
            OSWAL CROP PROTECTION PVT. LTD.
            <span className="absolute left-0 bottom-[-10px] w-[80%] h-[2px] bg-[#040504]"></span>
          </h3>

          <p className="text-lg italic p-4 mt-12 text-left text-[#0C0000] font-[600] text-[25px]">
            “Har Kadam Par Kisaano Ka Humsafar”
          </p>

          {/* Images below heading and subtitle - Below md */}
          <motion.div
            className="relative mt-8 md:hidden mx-auto"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
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
          </motion.div>

          <div className="p-4 mt-8">
            {data.map(item => (
              <div
                key={item.id}
                dangerouslySetInnerHTML={{ __html: parseText(item.content) }}
                className="mb-4 font-open-sans leading-[1.8rem] first:mt-40 first:md:mt-0 text-justify"
              />
            ))}
          </div>
        </motion.div>

        {/* Images - Above md */}
        <motion.div
          className="relative flex-1 hidden md:block md:order-1 border border-red-400"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={oneside}
            alt="First image"
            className="w-full md:w-2/3 h-[35vh]  rounded-tl-3xl rounded-tr-3xl"
          />
          <img
            src={secondside}
            alt="Second image"
            className="absolute h-[35vh]  bottom-0 bg-white-shade-100 p-2 right-0 w-full md:w-2/3 rounded-tl-3xl rounded-tr-3xl transform translate-x-[-20px] translate-y-[180px]"
            style={{ zIndex: 1 }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Companyprotection;
