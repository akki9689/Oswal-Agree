import React from 'react';
import leaf from '../../images/Common/leaf.png';

const Popupname = ({ title = "VISION AND MISSION", border = "green" }) => {
  return (
    <div 
      className="flex justify-center" 
      data-aos="fade-up" 
      data-aos-duration="1000" 
      data-aos-easing="ease-in-out"
    >
      <div 
        className={`border-t-4 border-${border} p-4 text-center`} 
        data-aos="fade-in" 
        data-aos-delay="200" 
        data-aos-duration="1200" 
        data-aos-easing="ease-in-out"
      >
        <img 
          src={leaf} 
          alt="Leaf" 
          className="w-12 h-12 mx-auto mb-2" 
          data-aos="fade-down" 
          data-aos-delay="400" 
          data-aos-duration="1400" 
          data-aos-easing="ease-in-out"
        />
        <h1 
          className="text-2xl font-bold text-[rgb(19,158,40)]" 
          data-aos="zoom-out" 
          data-aos-delay="600" 
          data-aos-duration="1600" 
          data-aos-easing="ease-in-out"
        >
          {title}
        </h1>
        <span 
          className="block w-16 h-1 bg-[rgb(124,183,22)] mt-2 mx-auto" 
          data-aos="slide-right" 
          data-aos-delay="800" 
          data-aos-duration="1800" 
          data-aos-easing="ease-in-out"
        ></span>
      </div>
    </div>
  );
};

export default Popupname;
