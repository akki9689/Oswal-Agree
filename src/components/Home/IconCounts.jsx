import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useEffect , useState } from 'react';

const IconCounts = ({data}) => {

  const target = data.count;

  const [count , setCount] = useState(0);

  const {ref , inView} = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {

    if(inView){
       let start = 0;
       const duration = 1200;
       const increment = target / (duration / 10);

       const timer = setInterval(()=>{

        start = start + increment

        if(start >= target){
          clearInterval(timer);
          start = target;
        }

        setCount(Math.ceil(start));

       } , 10)
    }

  } , [inView , target])



  return (
    <div ref={ref} className='flex flex-col lg:gap-y-4 gap-y-2 items-center'>

      {/* --------- Icon ------ */}

      <div className='lg:w-[100px] w-[80px] '>
        <img src={data.icon} alt={data.title} className='w-full h-full object-cover' />
      </div>

      {/* --------- count --------- */}

      <p className='text-dark-green-200 xl:text-4xl lg:text-3xl xs:text-2xl text-3xl font-bold text-center'>{`${count.toLocaleString()}+`}</p>

      {/* ------- title ------- */}

      <h2 className='xl:text-[22px] lg:text-xl xs:text-lg text-xl capitalize font-medium tracking-wide text-center lg:w-full mmd:w-[80%] w-full '>{data.title}</h2>


    </div>
  )
}

export default IconCounts