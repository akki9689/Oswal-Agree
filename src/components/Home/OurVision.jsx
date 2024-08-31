import React from 'react'
import India from '../../images/Home/Vision/india_icon.png'
import Export from '../../images/Home/Vision/export_icon.png'
import Vision from '../../images/Home/Vision/vision_mission.png'

const OurVision = () => {
  return (
    <section className='w-full py-20 flex flex-col  gap-y-10'>


      {/* --------- heading part ---------- */}

      <div data-aos="fade-up" className=' w-10/12 mx-auto flex flex-col gap-y-7  items-center'>

        <h1 className='xs:text-[40px] text-[28px] font-bold text-dark-green-200'>Vision & Mission</h1>

        {/* ------- small line ------ */}

        <div className='w-24 h-1 bg-richblack-500'></div>
      </div>

      {/* ------------- content part ------------ */}

      <div className='map-bg '>

        {/* --------- container ----------- */}

        <div className='w-10/12 mx-auto  flex mmd:flex-row flex-col gap-y-16 justify-between gap-x-4 '>

          {/* --------- left side  ------- */}

          <div data-aos="fade-right" className='xlg:w-[45%] mmd:w-[48%] flex flex-col gap-y-7'>

            {/* ------- vision ----- */}

            <div className='flex flex-col items-center mmd:items-start gap-y-4 '>

              <h1 className='text-2xl text-dark-green-200 font-bold '>Our Vision</h1>
              <p className='xxl:w-[85%] mmd:w-full xs:w-[85%] w-[95%] pr-2 xxl:pr-0 mmd:text-left text-center'>We are determined to be one of the companies
                working for the up-liftment of farmers. </p>

            </div>

            {/* ------- misison ----- */}

            <div className='flex flex-col items-center mmd:items-start  gap-y-4 '>

              <h1 className='text-2xl text-dark-green-200 font-bold '>Our Mission</h1>
              <p className='xxl:w-[85%] mmd:w-full xs:w-[85%] w-[95%]  pr-2 xxl:pr-0 mmd:text-left text-center'>To be a part of pesticides industry for complimenting
                sustainable agriculture in the country.</p>

            </div>

            {/* --------------- icons ----------------- */}

            <div className='lg:w-[80%] flex  lg:gap-x-20 mmd:gap-x-10 mmd:justify-center xs:justify-evenly justify-between gap-x-4 xsm:gap-x-0'>

              {/* -------- india -------- */}

              <div className='flex flex-col items-center gap-y-4 '>


                <div className='border-[6px] border-richblack-50 mmd:w-[110px] xs:w-[120px]  mmd:h-[110px] xs:h-[120px] w-[110px] h-[110px] rounded-full transition-all duration-700 hover:scale-90 hover:opacity-70'>
                  <img src={India} alt="india" className='w-full h-full object-cover' />
                </div>

                <p className='xmd:text-lg mmd:text-[16px] xs:text-lg font-bold text-center w-[80%]'>All India Presence </p>
              </div>

              {/* -------- Exports -------- */}

              <div className='flex flex-col items-center gap-y-4 '>


                <div className='border-[6px] border-richblack-50 mmd:w-[110px] xs:w-[120px]  mmd:h-[110px] xs:h-[120px] w-[110px] h-[110px] rounded-full transition-all duration-700 hover:scale-90 hover:opacity-70'>
                  <img src={Export} alt="export" className='w-full h-full object-cover' />
                </div>

                <p className='xmd:text-lg mmd:text-[16px] xs:text-lg font-bold text-center w-[80%]'>Exports of Pesticides</p>
              </div>
            </div>
          </div>

          {/* --------- right side ----------- */}

          <div data-aos="fade-left" className='xlg:w-[45%] mmd:w-[48%] w-full '>

            <img src={Vision} alt="vision" className='w-full h-full object-cover rounded-2xl' />

          </div>
        </div>
      </div>
    </section>
  )
}

export default OurVision
