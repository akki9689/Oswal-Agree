import React from 'react';
import VisionImage from '../../images/Home/Vision/vision_mission.png';

const Vision2 = () => {
  // Data for vision and mission
  const visionData = [
    {
      heading: 'Our Vision',
      text: [
        'Our vision is to provide quality pesticides & fertilizers for plant protection, to help farmers by finding appropriate solutions for their problems, and offering optimum use of inputs. Our ultimate aim is to increase agricultural output, help farmers and enable them to contribute to the nation’s economy',
      ],
    },
    {
      heading: 'Our Mission',
      text: [
        'Our mission is to provide comprehensive agricultural solutions right from sowing to harvest.',
        'To manufacture high quality products with continuous improvement by innovation and commitment to health, safety, and the environment.',
      ],
    },
  ];

  return (
    <section className='w-full py-20 flex flex-col gap-y-10'>
      {/* --------- heading part ---------- */}
      <div className='w-10/12 mx-auto flex flex-col gap-y-7 items-center'>
        
      </div>

      {/* ------------- content part ------------ */}
      <div className='map-bg'>
        {/* --------- container ----------- */}
        <div className='w-10/12 mx-auto flex mmd:flex-row flex-col gap-y-16 justify-between gap-x-4'>
          {/* --------- left side  ------- */}
          <div className='xlg:w-[45%] mmd:w-[48%] flex flex-col gap-y-7'>
            {/* ------- vision & mission ----- */}
            {visionData.map((item, index) => (
              <div key={index} className='flex flex-col items-center mmd:items-start gap-y-4'>
                <h1 className='text-2xl text-dark-green-200 font-bold'>{item.heading}</h1>
                {item.text.map((paragraph, idx) => (
                  <p key={idx} className='xxl:w-[85%] mmd:w-full xs:w-[85%] w-[95%] pr-2 xxl:pr-0 mmd:text-left text-center'>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* --------- right side ----------- */}
          <div className='xlg:w-[45%] mmd:w-[48%] w-full'>
            <img src={VisionImage} alt="vision" className='w-full h-full object-cover rounded-2xl' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision2;
