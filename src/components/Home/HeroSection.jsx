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

const images = [image1, image2, image3, image4, image5];

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full">
      <div className="p-0 container-fluid">
        <div className="row">
          <div className="col ">
            <Swiper
              spaceBetween={30} // Adjusted space between slides for responsiveness
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination, Autoplay, EffectCube]}
              className="h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] overflow-hidden rounded-lg"
              loop={true}
              autoplay={{ delay: 10000 }}
              effect="cube"
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 30,
                shadowScale: 0.94,
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className=''>
                  <img 
                    src={image} 
                    alt={`Slide ${index}`} 
                    className="object-cover w-full h-full" 
                  />
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
