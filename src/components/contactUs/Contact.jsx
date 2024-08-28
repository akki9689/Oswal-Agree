import React from 'react'
import image from '../../images/Common/world_map-bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section>
      <div className="w-10/12  px-16 py-6" style={{backgroundImage: `url(${image})`}}>
            <div className="flex flex-row mx-24">
               {/* ROW-1   ADDRESS && FORM*/}
                <div className="flex flex-row gap-8 px-4">
                     {/* ADDRESS */}
                    <div className="flex flex-col gap-10 text-dark-green-200">
                                  {/* CONTACT US HEADING */}
                      <div>
                      <h2 className="text-4xl font-bold "><span className="underline decoration-black underline-offset-[30px]" >Cont</span>act Us</h2>
                      </div>
                                     {/* ADDRESS */}
                      <div className="flex items-center">
                      <FontAwesomeIcon icon={faLocationArrow} style={{fontSize:'50px'}}/><span className="text-lg font-bold ml-2  max-w-md">310, Gupta Tower, Commercial Complex, Azadpur, Delhi - 110033 (India)</span>
                      </div>
                                      
                                      {/*PHONE */}
                      <div className="flex items-center">
                      <FontAwesomeIcon icon={faPhone} style={{fontSize:'50px'}} /><span className=" text-lg font-bold ml-2">+91-011-49072043</span>
                      </div>

                                         {/* EMAIL */}
                      <div className="flex items-center">
                      <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'50px'}} /><span className=" text-lg font-bold ml-2">info@oswalcrop.com</span>
                      </div>

                    </div>


                    {/* FORM */}
                    <div className="text-dark-green-200 px-6">
                                   {/* ENQUIRY FROM HEADING */}
                      <div>
                      <h2 className="text-4xl font-bold "><span className="underline decoration-black underline-offset-[30px]" >Enqu</span>iry Form</h2>
                      </div>


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
