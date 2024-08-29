import React from 'react';
import image from '../../images/Common/world_map-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
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
            <div className="w-[45%] flex flex-col gap-10 text-dark-green-200 ">
              {/* ENQUIRY FROM HEADING */}
              <div>
                <h2 className="text-4xl font-bold "><span className="underline decoration-black underline-offset-[30px]" >Enqu</span>iry Form</h2>
              </div>
              {/* FORM CODE*/}

              <form>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row gap-4">
                    {/* Name */}
                    <div className="w-full">

                      <input
                        id="name"
                        aria-label='Name'
                        placeholder="Name"
                        className="w-full p-2 border-2 border-gray-300"
                        {...register('name', { required: 'This field is required' })} />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}

                    </div>

                    {/* Phone */}

                    <div className="w-full">
                      <label htmlFor="phone"></label>
                      <input
                        id="phone"
                        placeholder="Phone"
                        className="w-full p-2 border-2 border-gray-300"
                        {...register('phone', {
                          required: 'This field is required', pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: 'Please enter a valid Indian phone number',
                          }
                        })} />
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                    </div>
                  </div>


                  <div className="flex flex-row gap-4">
                    {/* Email */}
                    <div className="w-full">

                      <input
                        id="email"
                        aria-label='Email'
                        placeholder="Email"
                        className="w-full p-2 border-2 border-gray-300 "
                        {...register('name', {
                          required: 'This field is required', pattern: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
                        })} />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}

                    </div>

                    {/* Company */}

                    <div className="w-full">
                      <label htmlFor="company"></label>
                      <input
                        id="company"
                        placeholder="Company"
                        className="w-full p-2 border-2 border-gray-300"
                        {...register('company', { required: 'This field is required' })} />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="flex flex-row gap-4">
                    {/* State */}
                    <div className="w-full">
                      <label htmlFor="state"></label>
                      <select
                        id="state"
                        className="w-full p-2 border-2 border-gray-300 text-gray-400"
                        {...register('state', { required: 'Please select an option' })}>
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

                    </div>
                    {/* City */}
                    <div className="w-full">
                      <label htmlFor="city"></label>
                      <input
                      id="city"
                      placeholder="City"
                      className="w-full p-2 border-2 border-gray-300"
                      />

                    </div>
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

export default Contact
