<<<<<<< HEAD
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
=======
import React from 'react'
import India from '../../images/Home/Vision/india_icon.png'
import Export from '../../images/Home/Vision/export_icon.png'
import Vision from '../../images/Home/Vision/vision_mission.png'

const OurVision = () => {
  return (
    <section className='w-full py-20 flex flex-col  gap-y-10'>


      {/* --------- heading part ---------- */}

      <div className=' w-10/12 mx-auto flex flex-col gap-y-7  items-center'>

        <h1 className='xs:text-[40px] text-[28px] font-bold text-dark-green-200'>Vision & Mission</h1>
>>>>>>> d86106b1db49a7ca9a63105867bac8caecd62446

        {/* ------- small line ------ */}

        <div className='w-24 h-1 bg-richblack-500'></div>
      </div>

      {/* ------------- content part ------------ */}

<<<<<<< HEAD
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
=======
      <div className='map-bg '>

        {/* --------- container ----------- */}

        <div className='w-10/12 mx-auto  flex mmd:flex-row flex-col gap-y-16 justify-between gap-x-4 '>

          {/* --------- left side  ------- */}

          <div className='xlg:w-[45%] mmd:w-[48%] flex flex-col gap-y-7'>

            {/* ------- vision ----- */}

            <div className='flex flex-col items-center mmd:items-start gap-y-4 '>

              <h1 className='text-2xl text-dark-green-200 font-bold '>Our Vision</h1>
              <p className='xxl:w-[85%] mmd:w-full xs:w-[85%] w-[95%] pr-2 xxl:pr-0 mmd:text-left text-center'>We are determined to be one of the companies
                working for the up-liftment of farmers. </p>

>>>>>>> d86106b1db49a7ca9a63105867bac8caecd62446
            </div>

            {/* ------- misison ----- */}

<<<<<<< HEAD
            <div className='flex flex-col gap-y-4 '>
              <h1 className='text-2xl font-bold text-dark-green-200 '>
                Our Mission
              </h1>
              <p className='w-[85%]'>
                To be a part of pesticides industry for complimenting
                sustainable agriculture in the country.
              </p>
=======
            <div className='flex flex-col items-center mmd:items-start  gap-y-4 '>

              <h1 className='text-2xl text-dark-green-200 font-bold '>Our Mission</h1>
              <p className='xxl:w-[85%] mmd:w-full xs:w-[85%] w-[95%]  pr-2 xxl:pr-0 mmd:text-left text-center'>To be a part of pesticides industry for complimenting
                sustainable agriculture in the country.</p>

>>>>>>> d86106b1db49a7ca9a63105867bac8caecd62446
            </div>

            {/* --------------- icons ----------------- */}

<<<<<<< HEAD
            <div className='w-[80%] flex gap-x-20 justify-center'>
              {/* -------- india -------- */}

              <div className='flex flex-col items-center gap-y-4'>
                <div className='border-[6px] border-richblack-50 w-[110px] h-[110px] rounded-full'>
                  <img
                    src={India}
                    alt='india'
                    className='object-cover w-full h-full'
                  />
=======
            <div className='lg:w-[80%] flex  lg:gap-x-20 mmd:gap-x-10 mmd:justify-center xs:justify-evenly justify-between gap-x-4 xsm:gap-x-0'>

              {/* -------- india -------- */}

              <div className='flex flex-col items-center gap-y-4 '>


                <div className='border-[6px] border-richblack-50 mmd:w-[110px] xs:w-[120px]  mmd:h-[110px] xs:h-[120px] w-[110px] h-[110px] rounded-full transition-all duration-700 hover:scale-90 hover:opacity-70'>
                  <img src={India} alt="india" className='w-full h-full object-cover' />
>>>>>>> d86106b1db49a7ca9a63105867bac8caecd62446
                </div>

                <p className='xmd:text-lg mmd:text-[16px] xs:text-lg font-bold text-center w-[80%]'>All India Presence </p>
              </div>

              {/* -------- Exports -------- */}

<<<<<<< HEAD
              <div className='flex flex-col items-center gap-y-4'>
                <div className='border-[6px] border-richblack-50 w-[110px] h-[110px] rounded-full'>
                  <img
                    src={Export}
                    alt='export'
                    className='object-cover w-full h-full'
                  />
=======
              <div className='flex flex-col items-center gap-y-4 '>


                <div className='border-[6px] border-richblack-50 mmd:w-[110px] xs:w-[120px]  mmd:h-[110px] xs:h-[120px] w-[110px] h-[110px] rounded-full transition-all duration-700 hover:scale-90 hover:opacity-70'>
                  <img src={Export} alt="export" className='w-full h-full object-cover' />
>>>>>>> d86106b1db49a7ca9a63105867bac8caecd62446
                </div>

                <p className='xmd:text-lg mmd:text-[16px] xs:text-lg font-bold text-center w-[80%]'>Exports of Pesticides</p>
              </div>
            </div>
          </div>

          {/* --------- right side ----------- */}

<<<<<<< HEAD
          <div className='w-[45%] '>
            <img
              src={Vision}
              alt='vision'
              className='object-cover w-full h-full rounded-2xl'
            />
=======
          <div className='xlg:w-[45%] mmd:w-[48%] w-full '>

            <img src={Vision} alt="vision" className='w-full h-full object-cover rounded-2xl' />

>>>>>>> d86106b1db49a7ca9a63105867bac8caecd62446
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurVision
