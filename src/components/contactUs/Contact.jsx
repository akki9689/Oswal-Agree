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



//---
const CustomInput = ({ id, label, placeholder, register, errors = {}, validation, required = false }) => {

  const isError = errors[id];
  const isRequiredError = isError && isError.type === 'required';

  // Tooltip styles
  const tooltipStyles = {
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid #ddd',
    borderRadius: '4px',
    padding: '8px',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '110%', // Position the tooltip just below the input
    left: '50%',
    transform: 'translateX(-50%)',
    whiteSpace: 'nowrap',
    zIndex: 10, // Ensure the tooltip is on top
    paddingLeft: '20px', // Adjust for spacing between the icon and text
    paddingBottom: '20px', // Space for the arrow
  };

  // Tooltip icon styles
  const iconStyles = {
    marginRight: '5px',
    display: 'inline-block',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: 'orange',
    color: 'white',
    textAlign: 'center',
    lineHeight: '16px',
    fontSize: '14px',
    fontWeight: 'bold',

  };

  // Arrow styles
  const tooltipArrowStyles = {
    content: "''",
    position: 'absolute',
    bottom: '100%', // Position the arrow just below the tooltip
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '8px solid white', // Arrow background color
    borderBottom: '6px solid black', // Arrow border color


  };

  return (
    <div className="relative w-full">
      <input
        id={id}
        aria-label={label}
        placeholder={placeholder}
        className={`w-full p-2 border-2 ${isError ? 'border-gray-300' : 'border-gray-300'
          } hover:outline-none focus:outline-none`}
        {...register(id, validation)}
        data-tip
        data-for={`${id}-tooltip`}
        required={required}
      />

    </div>
  );
};

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

  const notify = (data) => {
    console.log(data);
    toast.success('Message Send!', {
      position: 'top-center',
      autoClose: 4000
    })
    reset() // Clear the form fields
  }
  return (
    <section>
      <div className="w-full px-2 py-6 xl:px-6" style={{ backgroundImage: `url(${image})`, backgroundColor: 'white' }}>
        <div className="flex flex-col w-full gap-6 smd:space-x-2">
          {/* ROW-1   ADDRESS && FORM*/}
          <div className="flex flex-wrap w-full gap-8 px-3 md:justify-center md:px-1 xl:px-20">
            {/* ADDRESS */}
            <div className="w-full md:w-[40%] flex flex-col gap-10 text-dark-green-200">
              {/* CONTACT US HEADING */}
              <div>
                <h2 className="text-4xl font-bold "><span className="underline decoration-black underline-offset-[30px]" >Cont</span>act Us</h2>
              </div>
              {/* ADDRESS HEADING */}
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                <FontAwesomeIcon icon={faLocationArrow} style={{ fontSize: '50px' }} /><span className="max-w-md text-lg font-bold md:ml-3">310, Gupta Tower, Commercial Complex, Azadpur, Delhi - 110033 (India)</span>
              </div>

              {/*PHONE HEADING */}
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                <FontAwesomeIcon icon={faPhone} style={{ fontSize: '50px' }} /><span className="text-lg font-bold md:ml-3">+91-011-49072043</span>
              </div>

              {/* EMAIL HEADING */}
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '50px' }} /><span className="text-lg font-bold md:ml-3">info@oswalcrop.com</span>
              </div>

            </div>


            {/* FORM */}
            <div className="w-full  md:px-1 md:w-[50%] smd:w-[45%] flex flex-col gap-10">
              {/* ENQUIRY FROM HEADING */}
              <div>
                <h2 className="text-4xl font-bold text-dark-green-200 "><span className="underline decoration-black underline-offset-[30px]" >Enqu</span>iry Form</h2>
              </div>
              {/* FORM CODE*/}

              <form onSubmit={handleSubmit(notify)}>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row gap-4">
                    {/* Name */}
                    <div className="w-full">

                      <CustomInput
                        id="name"
                        aria-label='Name'
                        placeholder="Name"
                        register={register}
                        errors={errors}
                        validation={{ required: 'Please fill out this field' }
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
                          required: 'Please out this fill field', pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Phone number must be 10 digits',
                          }
                        }}
                        required={true}
                      // className="w-full p-2 border-2 border-gray-300 hover:outline-none focus:outline-none "

                      />

                      {/* {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>} */}
                    </div>
                  </div>


                  <div className="flex flex-row gap-4">
                    {/* Email */}
                    <div className="w-full">

                      <CustomInput
                        id="email"
                        aria-label='Email'
                        placeholder="Email"
                        register={register}
                        errors={errors}
                        validation={{
                          required: 'Please fill out this field',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email format',
                          }
                        }}
                        required={true} />
                      {/* {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>} */}

                    </div>

                    {/* Company */}

                    <div className="w-full">

                      <CustomInput
                        id="company"
                        aria-label='company'
                        placeholder="Company"
                        register={register}
                        errors={errors}
                        validation={{
                          required: 'Please fill out this field'

                        }}
                        required={true} />
                      {/* {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>} */}
                    </div>
                  </div>

                  <div className="flex flex-row gap-4">
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
                        validation={{ required: 'Please fill out this field' }}
                        required={true}
                      />
                      {/* {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>} */}
                    </div>
                  </div>

                  {/*Message*/}
                  <div className="w-full">
                    <label htmlFor="message"></label>
                    <textarea
                      rows="4"
                      id="message"
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
                      className="px-5 py-3 font-bold bg-light-green-300 rounded-3xl text-white-shade-100 hover:bg-dark-green-200">SEND MESSAGE</button>
                       <ToastContainer className="align-center" />
                  </div>

                </div>
              </form>



            </div>
          </div>

          {/* ROW-2  MAP*/}
          <div className="flex justify-center items-center relative overflow-hidden   pb-[80%] md:pb-[40%] lg:pb-[30%] xlg:pb-[20%]" style={{ width: '100%', maxWidth: mapSize.width, height: '0', margin: '0 auto' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22771.658681247576!2d77.17803811614137!3d28.710394768348912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d021fcf000001%3A0xd5d5de14a71e1f1d!2sAzadpur%20Transport%20Centre!5e0!3m2!1sen!2sin!4v1724965332109!5m2!1sen!2sin"
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
