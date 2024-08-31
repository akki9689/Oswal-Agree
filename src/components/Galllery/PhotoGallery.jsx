import React from 'react'
import Popupname from '../common/Popupname'
import { photoGallery } from '../../data/gallery/photo-gallery'
import { useState } from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import PhotoModal from './PhotoModal'


const PhotoGallery = () => {

    const categories = ["All", "Our Factory", "Festivals", "Marketing Sales"]

    const [category, setCategory] = useState('all');
    const [modalData, setModalData] = useState("");
    

    useEffect(() => {
        if (modalData) {

            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"
        }


    }, [modalData]);

    const photoVariant = {
        hidden: { scale: 0.7, opacity: 0.5 },
        visible: { scale: 1, opacity: 1 },
        exit: { scale: 0.7, opacity: 0.5 },
    };


    return (
        <section className='w-full pt-8 pb-16 relative'>

            {/* ----------- container ----------- */}

            <div className=' w-11/12 xl:w-10/12 mx-auto  flex flex-col gap-y-10'>

                {/* ------- heading --------- */}

                <Popupname title="PHOTO GALLERY" isBorder={false} />

                {/* ---------- filter title ---------- */}

                <div className='flex md:gap-x-10 sm:gap-x-6 gap-x-4 gap-y-4  xs:flex-nowrap flex-wrap  items-center justify-center md:text-lg font-bold '>



                    {
                        categories.map((item, index) => (
                            <button key={index}
                                onClick={() => setCategory(item.toLowerCase())}
                                className={`
                    sm:px-4 px-3 py-2 rounded-lg hover:bg-light-green-200 transition-all duration-300
                    ${category === item.toLowerCase() ? " border-2  border-dark-green-200 bg-light-green-200 " : ""
                                    }
                    `}>
                                {item}
                            </button>
                        ))
                    }

                </div>

                {/* --------- Photos ---------------- */}

                <div  className='grid xlg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 px-4 py-4'>

                    {
                        category === "all" ?


                            photoGallery.flatMap((item) => item.images).map((image, index) => (

                                <motion.div
                               
                                    key={`${category}-${index}`} // Unique key to trigger re-render
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: index * 0.2 }}
                                     className=' xs:h-[280px] h-[350px] relative group hover:brightness-75 transition-all duration-300 cursor-pointer overflow-hidden rounded-md'
                                    onClick={() => setModalData(image)}
                                >
                                    <img src={image} alt={category} className='h-full w-full object-cover rounded-md transition-all group-hover:scale-105 duration-700  ' />

                                </motion.div>

                            )) :

                            photoGallery.find((item) => item.title.toLowerCase() === category).images.map((image, index) => (

                                <motion.div
                                    key={`${category}-${index}`} // Unique key to trigger re-render
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: index * 0.2 }}

                                    className=' xs:h-[280px] h-[350px] relative group hover:brightness-75 transition-all duration-300 cursor-pointer overflow-hidden rounded-md'
                                    onClick={() => setModalData(image)}
                                >
                                    <img src={image} alt={category} className='h-full w-full object-cover rounded-md transition-all group-hover:scale-105 duration-700  ' />

                                </motion.div>

                            ))

                    }

                </div>

             
            </div>

            {
                modalData && <PhotoModal modalData={modalData} setModalData={setModalData} />
            }

           
           
            

        </section>
    )
}

export default PhotoGallery