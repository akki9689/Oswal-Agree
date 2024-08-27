import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';
import { Navigation, Pagination, Autoplay, EffectCube } from 'swiper/modules';

import image1 from '../../images/Home/herosection/agro1.jpg';
import image2 from '../../images/Home/herosection/agro2.jpg';
import image3 from '../../images/Home/herosection/agro3.jpg';
import image4 from '../../images/Home/herosection/agro4.jpg';
import image5 from '../../images/Home/herosection/agro5.jpg';

const slides = [
  { 
    image: image1, 
    title: "One of the Leading Manufacturers of Agrochemicals in India", 
  },
  { 
    image: image2, 
    title: "Support for Sustainable Agriculture", 
  },
  { 
    image: image3, 
    title: "Har Kadam Par Kisaano Ka Humsafar", 
  },
  { 
    image: image4, 
    title: "Wide Range of Insecticides, Fungicides, Herbicide & PGRs", 
  },
  { 
    image: image5, 
    title: "Highest Quality Products & Solutions", 
  }
];

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full">
      <div className="p-0 container-fluid">
        <div className="row">
          <div className="col">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination, Autoplay, EffectCube]}
              className="h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden rounded-lg"
              loop={true}
              autoplay={{ delay: 10000 }}
              effect="cube"
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 40,
                shadowScale: 0.94,
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="">
                  <div className="relative w-full h-full">
                    <img 
                      src={slide.image} 
                      alt={`Slide ${index}`} 
                      className="object-cover w-full h-full" 
                    />
                    <div className="absolute bottom-8 left-4 rounded-md bg-richblack-500 bg-opacity-60 text-white p-2 md:bottom-12 md:left-10 md:p-4">
                      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-regular">{slide.title}</h2>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
