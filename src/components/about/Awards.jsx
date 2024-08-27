import React, { useState } from 'react';
import award1 from '../../images/About/Awards/Award-1.png';
import award2 from '../../images/About/Awards/Award-2.png';
import award3 from '../../images/About/Awards/Award-3.png';
import award4 from '../../images/About/Awards/Award-4.png';
import award5 from '../../images/About/Awards/Award-5-158x300.png';
import award6 from '../../images/About/Awards/Award-6-116x300.png';
import Modal from '../../components/common/Modal'; // Adjust the path as needed
import Popupname from '../common/Popupname';
const Awards = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const awardsData = [award1, award2, award3, award4, award5, award6];

  const openModal = () => setSelectedImage(awardsData);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="bg-white p-6 px-24">
      <div className='mb-8'>
        <Popupname title='Awards and Recognition'/>
      </div>
      <div className="grid grid-cols-1 mmd:grid-cols-3 gap-8">
        {awardsData.map((award, index) => (
          <div
            key={index}
            className="w-full h-[50vh] flex items-center justify-center"
            onClick={() => openModal()}
          >
            <img
              src={award}
              alt={`Award ${index + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg bg-transparent border border-gray-200 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Render modal if an image is selected */}
      {selectedImage && (
        <Modal images={selectedImage} isOpen={!!selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default Awards;
