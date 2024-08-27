import React from 'react'
import { IoLeaf } from "react-icons/io5";

const Heading = ({text , isBorder}) => {
  return (
    <div className='w-full flex flex-col gap-y-7 items-center'>

      <div className=' flex flex-col items-center'>
            {/* ------- leaf img ------- */}
            <span className='text-light-green-300 text-4xl'><IoLeaf/></span>

            {/* Add heading text */}
            <h1 className='text-4xl font-bold text-dark-green-200 uppercase'>{text}</h1>
      </div>

     {/* if Border is true */}
      {
        isBorder && (
          <div className='w-28 h-1 bg-light-green-300'></div>
        )
      }

    </div>
  )
}

export default Heading