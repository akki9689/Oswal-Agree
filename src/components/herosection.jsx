import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';  // Import Cube effect CSS
import { Navigation, Pagination, Autoplay, EffectCube } from 'swiper/modules';

import image1 from '../images/Home/agro1.jpg';
import image2 from '../images/Home/agro2.jpg';
import image3 from '../images/Home/agro3.jpg';
import image4 from '../images/Home/agro4.jpg';
import image5 from '../images/Home/agro5.jpg';

const images = [image1, image2, image3, image4, image5];

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination, Autoplay, EffectCube]}  // Add EffectCube module
              className="rounded-lg overflow-hidden h-full"
              loop={true}
              autoplay={{ delay: 10000 }} // 10000ms = 10 seconds
              effect="cube"  // Enable cube effect
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 30,
                shadowScale: 0.94,
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
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
