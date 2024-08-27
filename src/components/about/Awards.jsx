import React from 'react';
import award1 from '../../images/About/Awards/Award-1.png';
import award2 from '../../images/About/Awards/Award-2.png';
import award3 from '../../images/About/Awards/Award-3.png';
import award4 from '../../images/About/Awards/Award-4.png';
import award5 from '../../images/About/Awards/Award-5-158x300.png';
import award6 from '../../images/About/Awards/Award-6-116x300.png';

const Awards = () => {
  const awardsData = [award1, award2, award3, award4, award5, award6];

  return (
    <div className="bg-white p-6">
      <div className="grid grid-cols-1 mmd:grid-cols-3 gap-16">
        {awardsData.map((award, index) => (
          <div key={index} className="w-full h-[80vh] ">
            <img
              src={award}
              alt={`Award ${index + 1}`}
              className="w-full h-full object-contain rounded-lg bg-transparent border border-gray-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
