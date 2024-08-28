import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useOnclickOutside } from '../../hooks/useOnclickOutside';

const SendQueryModal = ({queryModal , setQueryModal}) => {

    const closeHandler = () => {
        setQueryModal("");
      }
    
      const modalRef = useRef(null);
    
      useOnclickOutside(modalRef, closeHandler)


      const modalVariants = {
        hidden: { opacity: 0, scale: 0.4 }, // Modal starts off-screen (above the viewport)
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.4
    
          },
        },
        exit: { opacity: 0, scale: 0, transition: { duration: 0.3 } }, // Exit animation
      };


  return (
    <motion.div className='fixed inset-0 z-[99999] grid mmd:place-items-center justify-center bg-black bg-opacity-70 overflow-auto mmd:pt-6 smd:pt-24 sm:pt-32 xs:pt-36 pt-40 pb-6 px-2'>

    {/* <p className='absolute right-10 top-6 text-4xl cursor-pointer text-white' onClick={closeHandler}><MdOutlineClose /></p> */}


    {/* -------------- modal ----------------- */}
    <AnimatePresence>
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        ref={modalRef} onClick={(events) => events.stopPropagation()} className=' w-[600px] h-[500px] bg-white '>

        

      </motion.div>
    </AnimatePresence>
  </motion.div>
  )
}

export default SendQueryModal