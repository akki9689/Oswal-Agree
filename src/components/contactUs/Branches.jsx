import React , {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
// import { navbarData } from '../../data/nav-links'


import {branchItem} from '../../data/contactUs/branchData'

function Branches() {

    const [isHovered , setIsHovered] = useState(null);
    const [isBorder , setIsBorder] = useState(false);

    
    
    return (
        <section>
            <div className="w-full bg-gray-100 px-10 smd:px-32 py-6 ">
                <div className="flex flex-col gap-1 xlg:flex-row justify-center xlg:gap-32">

                    {/* COLUMN NUMBER-1  */}

                    <ul  className="flex flex-col text-gray-600">
                        {branchItem.map(({id , title}) => (
                            id >= 1 && id <= 6 && (
                                <li key={id} className={`flex items-center w-[90%] xsm:w-5/12 xlg:w-full py-2 ${id !== 1 ? 'border-t-2 border-gray-200':''}`}  
                                onMouseEnter={() => setIsHovered(id)} // Set hover state to true
                                onMouseLeave={() => setIsHovered(null)} // Set hover state to false
                                > 
                                   <FontAwesomeIcon 
                                   icon={ faPlay } 
                                   style={{fontSize: '12' ,color: isHovered === id ? "green" :  "black"}}  
                                   className="mr-2"
                                   /> <span className="text-start">{title}</span>
                                </li>
                            )
                        ))}

                    </ul>

                       {/* COLUMN NUMBER-2 */}

                   <ul className="flex flex-col text-gray-600">
                    {branchItem.map(({id , title})=>(
                       id>=7 && id<=12 && ( <li key={id} className={`flex items-center w-[90%] xsm:w-5/12  xlg:w-full py-2 border-t-2 border-gray-200 xsm:border-t-[40%] ${id ===7 ?'xlg:border-none':''}`}
                       onMouseEnter = {()=>setIsHovered(id)}
                       onMouseLeave = {()=> setIsHovered(null)}>
                          <FontAwesomeIcon 
                              icon={faPlay} 
                              style={{fontSize:'12',color: isHovered == id ? "green" : "black"}}
                              className="mr-2"/>
                          <span  className="text-start">{title}</span>
                        </li>)
                    ))}
                   </ul>

                </div>

            </div>

        </section>
    )
}

export default Branches
