// import React from 'react'
import India from '../../images/Home/india_icon.png'
import Export from '../../images/Home/export_icon.png'
import Vision from '../../images/Home/vision_mission.png'

const OurVision = () => {
  return (
    <section className='flex flex-col w-full py-20 gap-y-12 '>
      {/* --------- heading part ---------- */}

      <div className='flex flex-col items-center w-10/12 mx-auto gap-y-7'>
        <h1 className='text-[40px] font-bold text-dark-green-200'>
          Vision & Mission
        </h1>

        {/* ------- small line ------ */}

        <div className='w-24 h-1 bg-richblack-500'></div>
      </div>

      {/* ------------- content part ------------ */}

      <div className='map-bg'>
        {/* --------- container ----------- */}

        <div className='flex justify-between w-10/12 mx-auto gap-x-10'>
          {/* --------- left side  ------- */}

          <div className='w-[45%] border-richblack-300 flex flex-col gap-y-7'>
            {/* ------- vision ----- */}

            <div className='flex flex-col gap-y-4 '>
              <h1 className='text-2xl font-bold text-dark-green-200 '>
                Our Vision
              </h1>
              <p className='w-[85%]'>
                We are determined to be one of the companies working for the
                up-liftment of farmers.{' '}
              </p>
            </div>

            {/* ------- misison ----- */}

            <div className='flex flex-col gap-y-4 '>
              <h1 className='text-2xl font-bold text-dark-green-200 '>
                Our Mission
              </h1>
              <p className='w-[85%]'>
                To be a part of pesticides industry for complimenting
                sustainable agriculture in the country.
              </p>
            </div>

            {/* --------------- icons ----------------- */}

            <div className='w-[80%] flex gap-x-20 justify-center'>
              {/* -------- india -------- */}

              <div className='flex flex-col items-center gap-y-4'>
                <div className='border-[6px] border-richblack-50 w-[110px] h-[110px] rounded-full'>
                  <img
                    src={India}
                    alt='india'
                    className='object-cover w-full h-full'
                  />
                </div>

                <p className='text-lg font-bold'>All India Presence </p>
              </div>

              {/* -------- Exports -------- */}

              <div className='flex flex-col items-center gap-y-4'>
                <div className='border-[6px] border-richblack-50 w-[110px] h-[110px] rounded-full'>
                  <img
                    src={Export}
                    alt='export'
                    className='object-cover w-full h-full'
                  />
                </div>

                <p className='text-lg font-bold'>Exports of Pesticides</p>
              </div>
            </div>
          </div>

          {/* --------- right side ----------- */}

          <div className='w-[45%] '>
            <img
              src={Vision}
              alt='vision'
              className='object-cover w-full h-full rounded-2xl'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurVision
