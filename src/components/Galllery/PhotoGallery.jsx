import React from 'react'
import Heading from '../common/Heading'
import { photoGallery } from '../../data/gallery/photo-gallery'
import { useState } from 'react'

const PhotoGallery = () => {


    const categories = [ "All" , "Our Factory" , "Festivals" , "Marketing Sales"]

    const [category , setCategory] = useState('all');


  return (
    <section className='w-full py-16 relative'>

        {/* ----------- container ----------- */}
        
        <div className='w-10/12 mx-auto border-2 border-dark-green-200 flex flex-col gap-y-10'>

        {/* ------- heading --------- */}

        <Heading text="Photo Gallery" isBorder={false}/>

        {/* ---------- filter title ---------- */}

        <div className='flex gap-x-10 justify-center text-lg font-semibold'>
            
      

            {
                categories.map((item , index) => (
                    <button key={index} className='bg-red-500 px-4 py-2 rounded-lg'>
                    {item}    
                    </button>
                ))
            }

        </div>

           {/* --------- Photos ---------------- */}

        </div>

    </section>
  )
}

export default PhotoGallery