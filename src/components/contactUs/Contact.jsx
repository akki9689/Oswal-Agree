import React, { useEffect, useState } from 'react';
import image from '../../images/Common/world_map-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { stateData } from "../../data/contactUs/contactData"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Popupname from '../common/Popupname';





function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [mapSize, setMapSize] = useState({ width: '80%' });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1024) {
        setMapSize({ width: '75%' })
      }
      else {
        setMapSize({ width: '100%' })
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => {
      window.addEventListener('resize', handleResize);
    }

  }, []);


  const CustomInput = ({ id, label, placeholder, register, errors = {}, validation, required = false }) => {

    const isError = errors[id];
    const isRequiredError = isError && isError.type === 'required';


    return (
      <div className="relative w-full">
        <input
          id={id}
          aria-label={label}
          placeholder={placeholder}
          className={`w-full p-2 border-2 ${isError ? 'border-gray-300' : 'border-gray-300'
            } hover:outline-none focus:outline-none`}
          {...register(id, validation)}
          required={required}
        />
        {isError && (
          <p className="mt-1 text-sm text-red-600">
            {isRequiredError ? isError.message : isError.message}
          </p>
        )}
      </div>
    );
  };

  const notify = (data) => {
   
    toast.success('Message Send!', {
      position: 'top-center',
      autoClose: 4000
    })
    reset() // Clear the form fields
  }
  return (
    <section>
      <div className="w-full px-2 pb-24  xl:px-6 flex flex-col gap-y-12" >


<Popupname title='Contact Us'/>

        <div className="flex flex-col md:w-full w-11/12 mx-auto gap-6 smd:space-x-2  ">
          {/* ROW-1   ADDRESS && FORM*/}
          <div style={{ backgroundImage: `url(${image})`, backgroundColor: 'white' }} className="flex flex-wrap w-full gap-8 px-3 md:justify-center md:px-1 xl:px-20">
            {/* ADDRESS */}
            <div data-aos="fade-right" className="w-full md:w-[40%] flex flex-col gap-10 text-dark-green-200">
              {/* CONTACT US HEADING */}
              <div className='flex flex-col gap-y-3'>
                <h2 className="text-2xl font-bold ">Contact Us</h2>
                <div className='w-[80px] h-[3px] bg-black'></div>
              </div>
              {/* ADDRESS HEADING */}
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                <FontAwesomeIcon icon={faLocationArrow} style={{ fontSize: '40px' }} /><span className="text-lg font-bold md:ml-3  max-w-md">310, Gupta Tower, Commercial Complex, Azadpur, Delhi - 110033 (India)</span>
              </div>

              {/*PHONE HEADING */}
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                <FontAwesomeIcon icon={faPhone} style={{ fontSize: '40px' }} /><span className=" text-lg font-bold md:ml-3">+91-011-49072043</span>
              </div>

              {/* EMAIL HEADING */}
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '40px' }} /><span className=" text-lg font-bold md:ml-3">info@oswalcrop.com</span>
              </div>

            </div>


            {/* FORM */}
            <div data-aos="fade-left" className="w-full  md:px-1 md:w-[50%] smd:w-[45%] flex flex-col gap-10">
              {/* ENQUIRY FROM HEADING */}
              <div className='flex flex-col gap-y-3 text-dark-green-200'>
                <h2 className="text-2xl font-bold ">Enquiry Form</h2>
                <div className='w-[80px] h-[3px] bg-black'></div>
              </div>
              {/* FORM CODE*/}

              <form onSubmit={handleSubmit(notify)}>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-4 md:flex-row">
                    {/* Name */}
                    <div className="w-full">

                      <CustomInput
                        id="name"
                        aria-label='Name'
                        placeholder="Name"
                        register={register}
                        errors={errors}
                        validation={{}
                        }
                        required={true}
                      />



                    </div>

                    {/* Phone */}

                    <div className="w-full">

                      <CustomInput
                        id="phone"
                        aria-label='phone'
                        placeholder="Phone"
                        register={register}
                        errors={errors}
                        validation={{
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Phone number must be 10 digits',
                          }
                        }}
                        required={true}


                      />

                      {/* {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>} */}
                    </div>
                  </div>


                  <div className="flex flex-col gap-4 md:flex-row">
                    {/* Email */}
                    <div className="w-full">

                      <CustomInput
                        id="email"
                        aria-label='Email'
                        placeholder="Email"
                        register={register}
                        errors={errors}
                        validation={{
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email format',
                          }
                        }}
                        required={true} />
                     

                    </div>

                    {/* Company */}

                    <div className="w-full">

                      <CustomInput
                        id="company"
                        aria-label='company'
                        placeholder="Company"
                        register={register}
                        errors={errors}
                        validation={{}}
                        required={true} />
                     
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 md:flex-row">
                    {/* State */}
                    <div className="w-full">

                      <select
                        id="state"
                        className="w-full p-2 border-2 border-gray-300 hover:outline-none focus:outline-none"
                        {...register('state', { required: 'Please select the option' })}
                        required={true}
                      >
                        <option value="">State</option>
                        {stateData.map(({ id, value, label }) => (
                          <option key={id} value={value}>{label}</option>
                        ))}

                      </select>
                    </div>
                    {/* City */}
                    <div className="w-full">

                      <CustomInput
                        id="city"
                        aria-label="city"
                        placeholder="City"
                        register={register}
                        errors={errors}
                        validation={{}}
                        required={true}
                      />

                    </div>
                  </div>

                  {/*Message*/}
                  <div className="w-full">
                  
                    <textarea
                       id="message"
                      rows="4"
                      aria-label="Message"
                      placeholder="Message"
                      className="w-full p-2 border-2 border-gray-300 hover:outline-none focus:outline-none "
                      {...register('message')}
                      required={true}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                  </div>

                  <div>
                    <button
                      type='submit'
                      className="px-5 py-3  bg-light-green-300 rounded-3xl text-white-shade-100 font-bold hover:bg-dark-green-200">SEND MESSAGE</button>
                    <ToastContainer className="align-center" />
                  </div>

                </div>
              </form>



            </div>
          </div>

          {/* ROW-2  MAP*/}
          <div data-aos="fade-up" className="flex justify-center items-center relative overflow-hidden   pb-[80%] md:pb-[40%] lg:pb-[30%] xlg:pb-[20%]" style={{ width: '100%', maxWidth: mapSize.width, height: '0', margin: '0 auto' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3053020156417!2d77.17508367474034!3d28.710420680540768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d021de362cfcd%3A0x68e9dde54c15a87a!2sGupta%20Tower%2C%20Commercial%20Complex%2C%20Gopal%20Nagar%2C%20Azadpur%2C%20Delhi%2C%20110033!5e0!3m2!1sen!2sin!4v1725025585841!5m2!1sen!2sin"
              style={{ border: '0', height: '100%', width: '100%', left: '0', top: '0', position: 'absolute' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Contact;
