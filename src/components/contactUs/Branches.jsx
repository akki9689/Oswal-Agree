import React , {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
// import { navbarData } from '../../data/nav-links'


import {branchItem} from '../../data/contactUs/branchData'

function Branches() {

    const [isHovered , setIsHovered] = useState(null);

    
    
    return (
        <section>
            <div className="w-full px-16 py-6 bg-gray-100 ">
                <div className="flex flex-row justify-center gap-24">

                    {/* COLUMN NUMBER-1  */}

                    <ul  className="flex flex-col text-gray-600">
                        {branchItem.map(({id , title}) => (
                            id >= 1 && id <= 6 && (
                                <li key={id} className={`py-2 ${id !== 1 ? 'border-t-2 border-gray-300':''}`}  
                                onMouseEnter={() => setIsHovered(id)} // Set hover state to true
                                onMouseLeave={() => setIsHovered(null)} // Set hover state to false
                                >
                                   <FontAwesomeIcon 
                                   icon={ faPlay } 
                                   style={{fontSize: '14' ,color: isHovered === id ? "green" :  "black"}}  
                                   className="mr-2"
                                   /> {title}
                                </li>
                            )
                        ))}

                    </ul>

                       {/* COLUMN NUMBER-2 */}

                   <ul className="flex flex-col text-gray-600">
                    {branchItem.map(({id , title})=>(
                       id>=7 && id<=12 && ( <li key={id} className={`py-2 ${id!==7 ?'border-t-2 border-gray-300':''}`}
                       onMouseEnter = {()=>setIsHovered(id)}
                       onMouseLeave = {()=> setIsHovered(null)}>
                          <FontAwesomeIcon 
                              icon={faPlay} 
                              style={{fontSize:'14',color: isHovered == id ? "green" : "black"}}
                              className="mr-2"/>
                          {title}
                        </li>)
                    ))}
                   </ul>

                </div>

            </div>

        </section>
    )
}

export default Branches
