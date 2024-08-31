import React from 'react'
import { IconSectionData } from '../../data/home/icon-section'
import IconCounts from './IconCounts'

const IconSection = () => {
  return (
    <section className='w-full pt-12 pb-20 bg-white-shade-200 '>

        {/* --------- container --------- */}

        <div data-aos="fade-up" className='xlg:w-10/12 mmd:w-11/12 w-10/12 mx-auto grid mmd:grid-cols-4 xs:grid-cols-2 gap-y-10 grid-cols-1 '>

        {
            IconSectionData.map((data) => (
               <IconCounts key={data.id} data={data}/>
            ))
        }



        </div>

    </section>
  )
}

export default IconSection