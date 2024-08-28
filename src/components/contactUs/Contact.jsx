import React from 'react'
import image from '../../images/Common/world_map-bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section>
      <div className="w-10/12 px-10 py-6" style={{backgroundImage: `url(${image})`}}>
            <div className="flex flex-row">
               {/* ROW-1   ADDRESS && FORM*/}
                <div className="">
                     {/* ADDRESS */}
                    <div className="flex flex-col gap-10 text-dark-green-200">
                                  {/* CONTACT US HEADING */}
                      <div>
                      <h2 className="text-4xl font-bold "><span className="underline decoration-black underline-offset-[30px]" >Cont</span>act Us</h2>
                      </div>
                                     {/* ADDRESS */}
                      <div>
                      <FontAwesomeIcon icon={faLocationArrow} style={{fontSize:'56px'}} /><span className=" text-lg font-bold">310, Gupta Tower, Commercial Complex, Azadpur, Delhi - 110033 (India)</span>
                      </div>
                                      
                                      {/*PHONE */}
                      <div>
                        
                      </div>

                    </div>


                    {/* FORM */}
                    <div>

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
