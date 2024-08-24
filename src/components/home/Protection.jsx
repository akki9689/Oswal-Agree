import React from 'react';
import oneside from '../../images/Home/oneside.png'
import secondside from '../../images/Home/secondside.png'



const parseText = (text) => {
  return text
    .replace(/Oswal Crop Protection Pvt. Ltd./g, '<strong>Oswal Crop Protection Pvt. Ltd.</strong>')
    .replace(/Mr. Ramesh Bansal/g, '<strong>Mr. Ramesh Bansal</strong>')
    .replace(/ISO 9001:2015 certified company/g, '<strong>ISO 9001:2015 certified company</strong>');
};

const Companyprotection = ({ data }) => {
  return (
    <section className="">
      <div>
       <div className='flex flex-col'>
         {/* Left side: Two images stacked vertically */}
      <div className="flex flex-row">
        <img src={oneside} alt="First image" className="h-auto shadow-lg " />
        <img src={secondside} alt="Second image" className="w-full h-auto" />
      </div>

      {/* Right side: Text content */}
      <div className="text-emerald-500">
        {data.map(item => (
          <div key={item.id} dangerouslySetInnerHTML={{ __html: parseText(item.content) }} />
        ))}
      </div>
       </div>
      </div>
    </section>
  );
};

export default Companyprotection;
