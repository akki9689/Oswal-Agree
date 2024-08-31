import React from 'react';
import image1 from '../../../images/About/Wide-Range-of-Insecticides.png';
import image2 from '../../../images/About/Highest-Quality-Products-Solutions-2.png';
import image3 from '../../../images/About/Focussed-on-100-Farmers-Satisfaction.png';

const Whyoswal = () => {
  const profileData = [
    {
      heading: "Why Buy Oswal Products?",
      card: [
        { img: image1, tag: "Wide Range of Insecticides, Fungicides, Herbicide & PGRs" },
        { img: image2, tag: "Highest Quality Products & Solutions" },
        { img: image3, tag: "Focussed on 100% Farmer’s Satisfaction" }
      ]
    }
  ];

  return (
    <div data-aos="fade-up" className="bg-[rgb(196,221,191)] h-auto p-24 flex flex-wrap items-center justify-center mt-20">
      {profileData.map((item, index) => (
        <div key={index} className="text-center w-full">
          <h2 className="text-3xl font-bold mb-4">{item.heading}</h2>
          <span className="block w-[20%] mx-auto bg-green-500 h-1 mb-12"></span>
          <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
            {item.card.map((cardItem, cardIndex) => (
              <div
                key={cardIndex}
                className="flex flex-col items-center w-full md:w-[30vw] h-[300px] p-6 bg-lightGray rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={cardItem.img}
                  alt={cardItem.tag}
                  className="w-full h-2/3 object-cover rounded-lg"
                />
                <h3 className="mt-4 text-center break-words font-bold text-[rgb(48,163,100)] text-base md:text-lg">
                  {cardItem.tag}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Whyoswal;
