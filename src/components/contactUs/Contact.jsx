import React from 'react';
import image from '../../images/Common/world_map-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import {Tooltip} from 'react-tooltip';





const CustomInput = ({ id, label, placeholder, register, errors = {}, validation }) => {
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
        className={`w-full p-2 border-2 ${
          isError ? 'border-gray-300' : 'border-gray-300'
        } hover:outline-none focus:outline-none`}
        {...register(id, validation)}
        data-tip
        data-for={`${id}-tooltip`}
      />
      {isRequiredError && (
        <div
          id={`${id}-tooltip`}
          style={tooltipStyles}
          role="tooltip"
        >
          <span style={iconStyles}>!</span>
          {isError.message}
          <div style={tooltipArrowStyles} />
        </div>
      )}
      {!isRequiredError && isError && (
        <p className="mt-1 text-sm text-red-600 z-10">{isError.message}</p>
      )}
    </div>
  );
};

function Contact() {
  const { register, handleSubmit, formState: { errors } , reset} = useForm();
  const notify = (data) => {
    console.log(data);
  }
  return (
    <section>
      <div className="w-full py-6" style={{ backgroundImage: `url(${image})` }}>
        <div className="w-full flex flex-row space-x-2">
          {/* ROW-1   ADDRESS && FORM*/}
          <div className="w-full flex justify-center gap-8 px-20">
            {/* ADDRESS */}
            <div className="w-[40%] flex flex-col gap-10 text-dark-green-200">
              {/* CONTACT US HEADING */}
              <div>
                <h2 className="text-4xl font-bold "><span className="underline decoration-black underline-offset-[30px]" >Cont</span>act Us</h2>
              </div>
              {/* ADDRESS HEADING */}
              <div className="flex items-center">
                <FontAwesomeIcon icon={faLocationArrow} style={{ fontSize: '50px' }} /><span className="text-lg font-bold ml-3  max-w-md">310, Gupta Tower, Commercial Complex, Azadpur, Delhi - 110033 (India)</span>
              </div>

              {/*PHONE HEADING */}
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} style={{ fontSize: '50px' }} /><span className=" text-lg font-bold ml-3">+91-011-49072043</span>
              </div>

              {/* EMAIL HEADING */}
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '50px' }} /><span className=" text-lg font-bold ml-3">info@oswalcrop.com</span>
              </div>

            </div>


            {/* FORM */}
            <div className="w-[45%] flex flex-col gap-10">
              {/* ENQUIRY FROM HEADING */}
              <div>
                <h2 className="text-4xl font-bold text-dark-green-200 "><span className="underline decoration-black underline-offset-[30px]" >Enqu</span>iry Form</h2>
              </div>
              {/* FORM CODE*/}

              <form onSubmit = {handleSubmit(notify)}>
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
                        validation={{required:'Please fill out this field'}} />
                     

                    </div>

                    {/* Phone */}

                    <div className="w-full">
                      
                      <CustomInput
                        id="phone"
                        aria-label='phone'
                        placeholder="Phone"
                        register={register}
                        errors={errors}
                        validation={{required: 'Please out this fill field', pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Phone number must be 10 digits',}}}
                        // className="w-full p-2 border-2 border-gray-300  hover:outline-none focus:outline-none "
                       
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
                        validation={{required:'Please fill out this field',
                          pattern: {
                          value:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Invalid email format',
                        }}}/>
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
                        validation={{required:'Please fill out this field'
                                     
                        }}/>
                      {/* {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>} */}
                    </div>
                  </div>

                  <div className="flex flex-row gap-4">
                    {/* State */}
                    <div className="w-full">
                      
                      <select
                        id="state"
                        className="w-full p-2 border-2 border-gray-300  hover:outline-none focus:outline-none "
                        {...register('state', { required: 'Please select the option' })}>
                        <option value="">State</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands (UT)</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh (UT)</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu (UT)</option>
                        <option value="Delhi">Delhi (UT)</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir (UT)</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Ladakh">Ladakh (UT)</option>
                        <option value="Lakshadweep">Lakshadweep (UT)</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Puducherry">Puducherry (UT)</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>

                      {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>}

                    </div>
                    {/* City */}
                    <div className="w-full">
                      
                      <CustomInput
                      id="city"
                      aria-label="city"
                      placeholder="City"
                      register={register}
                      errors={errors}
                      validation={{required:'Please fill out this field'}}
                      
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
                    className="w-full p-2 border-2 border-gray-300  hover:outline-none focus:outline-none "
                    {...register('message')}
                    />
                     {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                  </div>

                  <div>
                    <button
                    type='submit'
                    className="px-5 py-3 bg-light-green-300 rounded-3xl text-white-shade-100 font-bold hover:bg-dark-green-200">SEND MESSAGE</button>
                  </div>

                </div>
              </form> 



            </div>
          </div>

          {/* ROW-2  MAP*/}
          <div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact;
