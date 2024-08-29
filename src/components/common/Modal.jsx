import React, { useState } from 'react';
import { FaTimes, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from 'swiper/modules';
import '../../App.css'; // Import custom CSS for Swiper buttons

const Modal = ({ images, isOpen, onClose }) => {
  const [scale, setScale] = useState(1);

  if (!isOpen) return null;

  const handleZoomIn = () => setScale(prevScale => prevScale * 1.2);
  const handleZoomOut = () => setScale(prevScale => prevScale / 1.2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl max-h-full">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          className="h-[50vh] w-[50vw] mx-auto "
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center h-full">
              <img
                src={image}
                alt={`Full Screen ${index + 1}`}
                className="mx-auto object-contain py-2"
                style={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button 
          onClick={onClose} 
          className="absolute top-[-40px] right-4 text-white text-2xl bg-gray-800 p-2 rounded-full"
        >
          <FaTimes />
        </button>
        <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            onClick={handleZoomIn}
            className="text-white text-2xl bg-gray-800 p-2 rounded-full"
          >
            <FaSearchPlus />
          </button>
          <button
            onClick={handleZoomOut}
            className="text-white text-2xl bg-gray-800 p-2 rounded-full"
          >
            <FaSearchMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
