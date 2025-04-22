import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useOnclickOutside } from '../../hooks/useOnclickOutside';
import { useForm } from 'react-hook-form';
import {toast} from 'react-hot-toast'



const SendQueryModal = ({ queryModal, setQueryModal,  }) => {

  const
    { register, handleSubmit, reset, formState: { errors } } = useForm();


  const submitHandler = (data) => {

    if(data){

      toast.success("Your query has been submitted. We will get back to you soon");
      reset()
      setQueryModal("");
      

    }

  }

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

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];


  return (
    <motion.div className='fixed inset-0 z-[99999] grid lg:place-items-center justify-center bg-black bg-opacity-70 pt-20 lg:pt-0  '>




      {/* -------------- modal ----------------- */}
      <AnimatePresence>
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          ref={modalRef} onClick={(events) => events.stopPropagation()} className='query-container xmd:w-[650px] smd:w-[600px] md:[550px] sm:w-[500px] xs:w-[420px] xsm:w-[380px] xxs:w-[350px] w-[300px] h-max sm:h-[550px] bg-white  rounded-2xl relative px-6 border border-dark-green-100'>

          {/* -------------- back filter ------------- */}

          <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-1 rounded-2xl'></div>

          <form className='flex flex-col gap-y-6 w-full h-full py-6 relative z-[10] ' onSubmit={handleSubmit(submitHandler)}>

            {/* ----------- heading and close ------------- */}

            <div className='flex flex-row items-center justify-between'>

              <h1 className='text-center text-xl sm:text-3xl uppercase font-bold text-white-shade-200 drop-shadow-lg mb-4'>Send Your Query</h1>
              <p className=' text-2xl cursor-pointer text-white ' onClick={closeHandler}><MdOutlineClose /></p>

            </div>


            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-x-2 gap-y-6 w-full '>


              {/* ------------ name ---------- */}

              <label htmlFor="name" className=' w-[95%] sm:w-[47%]'>

                <input type="text"
                  placeholder='Name'
                  className='w-full px-3 py-2 outline-none focus:border focus:border-dark-green-100  rounded-lg'
                  {...register('name', { required: 'Name is required', })}
                />

                {errors.name && <span className='text-red-500 text-sm'> {errors.name.message}</span>}

              </label>


              {/* --------- phone number ------------- */}

              <label htmlFor="number" className=' w-[95%] sm:w-[47%]'>
                <input type="number"
                  placeholder='Number'
                  className='w-full px-3 py-2 outline-none focus:border focus:border-dark-green-100  rounded-lg'
                  {...register('phoneNumber', {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9+\-() ]+$/,
                      message: 'Please enter a valid phone number'
                    }
                  })}
                />
                {errors.phoneNumber && <span className='text-red-500 text-sm'> {errors.phoneNumber.message}</span>}

              </label>

            </div>



            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-x-2 gap-y-6  w-full '>

              {/* -------- email ------------ */}

              <label htmlFor="email" className=' w-[95%] sm:w-[47%]'>

                <input type="email"
                  placeholder='Email'
                  className='w-full px-3 py-2 outline-none focus:border focus:border-dark-green-100  rounded-lg'
                  {...register('email', {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                />

                {errors.email && <span className='text-red-500 text-sm'> {errors.email.message}</span>}

              </label>


              {/* ---------- product name ---------- */}

              <label htmlFor="product" className=' w-[95%] sm:w-[47%]'>

                <input type="text"
                  defaultValue={queryModal}

                  className='w-full px-3 py-2 outline-none focus:border focus:border-dark-green-100  rounded-lg'
                  {...register('product', { required: 'Product name is required', })}
                />

                {errors.product && <span className='text-red-500 text-sm'> {errors.product.message}</span>}

              </label>



            </div>




            <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-x-2 gap-y-6  w-full '>


              {/* ------------ states dropdown ------------ */}


              <label htmlFor="state" className=' w-[95%] sm:w-[47%]'>

                {/* Dropdown for selecting Indian states */}
                <select id="state"
                  {...register('state')}
                  className='w-full px-3 py-2 outline-none focus:border focus:border-dark-green-100  rounded-lg'
                >
                  <option value="">State</option>

                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                  
                </select>

              </label>

              {/* ---------- city name---------- */}

              <label htmlFor="city" className=' w-[95%] sm:w-[47%]'>

                <input type="text"
                  placeholder='City'
                  className='w-full px-3 py-2 outline-none focus:border focus:border-dark-green-100  rounded-lg'
                  {...register('city')}
                />

              </label>

            </div>

            <div className='w-full flex justify-center '>

              <label htmlFor="message" className='sm:w-full w-[95%]'>
                <textarea type="text" placeholder='Message' className='w-full px-3 py-2 outline-none focus:border focus:border-dark-green-100  rounded-lg h-[120px]'
                  {...register('message', { required: 'Message is required' })}></textarea>
                {errors.message && <span className='text-red-500 text-sm'> {errors.message.message}</span>}
              </label>

            </div>


            <div className='w-full flex justify-center'>
              <button type='submit' className='w-max bg-dark-green-100 transition-all duration-200 hover:bg-light-green-200 hover:text-black font-semibold text-white px-5 py-3 rounded-2xl'> Send Message</button>
            </div>

          </form>



        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

export default SendQueryModal