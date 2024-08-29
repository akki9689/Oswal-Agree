import { allProducts } from '../../data/products/all-products-data'
import Card from '../common/Card'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 }
}

function Product () {
  return (
    <section className='relative w-full overflow-y-hidden'>
      <div className='w-10/12 pt-20 mx-auto mb-20 '>
        {/* ----------------Animation form Heading--------------------- */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          exit='hidden'
          variants={cardVariants} //this is use for when the object or card is on screen view then animate while starts
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='px-10 py-2'
        >
          <h1 className='font-bold text-[2.5rem] text-dark-green-100 py-5'>
            Our Product
          </h1>
          <div className='w-[70px] h-1 bg-dark-green-100 mb-10'></div>
        </motion.div>
        <div className='grid grid-cols-1 smd:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
          {/* ----------------Mapping  Card---------------------*/}
          {allProducts.map((data, index) => (
            // {/* ----------------Animation form Card---------------------*/}
            <motion.div
              key={index}
              initial='hidden'
              whileInView='visible' //this is use for when the object or card is on screen view then animate while starts
              exit='hidden'
              variants={cardVariants}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className='flex justify-center mb-10'
            >
              {/* -----------Card-------------------- */}
              <Card
                title={data.title}
                picture={data.image}
                showIcon={true}
                className='w-full max-w-[22rem] h-[25rem] md:max-w-[20rem] lg:max-w-[22rem] mb-10 border-light-green-200 border rounded-3xl'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Product
