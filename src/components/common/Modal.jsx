// Modal.js
import React, { useState } from 'react';
import { FaTimes, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper core CSS
import { Pagination, Navigation } from 'swiper/modules';

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
          className="h-[50vh] w-[40vw]"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center h-full">
              <img
                src={image}
                alt={`Full Screen ${index + 1}`}
                className="max-w-full max-h-full object-contain"
                style={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white text-2xl bg-gray-800 p-2 rounded-full"
        >
          <FaTimes />
        </button>
        <button
          onClick={handleZoomIn}
          className="absolute top-4 left-50 text-white text-2xl bg-gray-800 p-2 rounded-full"
        >
          <FaSearchPlus />
        </button>
        <button
          onClick={handleZoomOut}
          className="absolute top-4 left-16 text-white text-2xl bg-gray-800 p-2 rounded-full"
        >
          <FaSearchMinus />
        </button>
      </div>
    </div>
  );
};

export default Modal;
