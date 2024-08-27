import React from 'react'
import Heading from '../common/Heading'
import { photoGallery } from '../../data/gallery/photo-gallery'
import { useState } from 'react'
import { useEffect } from 'react'

const PhotoGallery = () => {

    // const dataforAll = photoGallery.forEach((item) => item.images)

    
    // console.log(dataforAll);


    const categories = [ "All" , "Our Factory" , "Festivals" , "Marketing Sales"]

    const [category , setCategory] = useState('all');
    const [modalData , setModalData] = useState("");
    


  return (
    <section className='w-full py-16 relative'>

        {/* ----------- container ----------- */}
        
        <div className='w-10/12 mx-auto border-2 border-dark-green-200 flex flex-col gap-y-10'>

        {/* ------- heading --------- */}

        <Heading text="Photo Gallery" isBorder={false}/>

        {/* ---------- filter title ---------- */}

        <div className='flex gap-x-10 justify-center text-lg font-bold'>
            
      

            {
                categories.map((item , index) => (
                    <button key={index} 
                    onClick={()=> setCategory(item.toLowerCase())}
                    className={`
                    px-4 py-2 rounded-lg
                    ${
                        category === item.toLowerCase() ? " border-2  border-dark-green-200 bg-light-green-200 " : ""
                    }
                    `}>
                    {item}    
                    </button>
                ))
            }

        </div>

           {/* --------- Photos ---------------- */}

           <div className='grid grid-cols-4 gap-x-4 gap-y-6'>

            {
                category === "all" ?

                 photoGallery.flatMap((item) => item.images).map((image , index) => (
                    <div key={index} className=' h-[280px] relative group hover:brightness-75 transition-all duration-300 cursor-pointer overflow-hidden rounded-md'
                    onClick={() => setModalData(image)}
                    >
                    <img src={image} alt={category} className='h-full w-full object-cover rounded-md transition-all group-hover:scale-105 duration-700  ' />
                    {/* <div className='absolute top-0 bottom-0 right-0 left-0 bg-richblack-500 opacity-40'></div> */}
                    </div>
                )) : 
                photoGallery.find((item)=> item.title.toLowerCase() === category).images.map((image,index) => (
                    <div key={index}>
                    <img src={image} alt={category} className='border border-red-500 ' />
                    </div>
                ))

            }

           </div>

        </div>

    </section>
  )
}

export default PhotoGallery