import PropTypes from 'prop-types'
import Button from './Button'

const ProductDetails = ({
  imageUrl = null,
  title,
  subtitle,
  targetCrop,
  dose,
  pest,
  uses,
  advantages,
  applications
}) => {
  // Handler function to open the PDF in a new browser tab
  const handleOpenPDF = () => {
    window.open('/src/pdf/OSWAL-CROP-PROTECTION-CATALOGUE.pdf', '_blank'); // Replace with the actual path to your PDF
  };

  return (
    <div className='flex flex-col items-center p-6 mx-auto max-w-7xl md:p-7 lg:flex-row lg:p-8 lg:space-x-8 dsx:w-8/12'>
      {/* Left Side: Image */}
      <div className='flex justify-center w-full lg:w-1/3 lg:justify-start'>
        <img
          src={imageUrl}
          alt={title}
          className='
                        h-[40vh] w-auto   
                        sm:h-[45vh]      
                        md:h-[50vh]      
                        lg:h-[55vh]      
                        xl:h-[60vh]     
                        2xl:h-[65vh]    
                        max-h-[70vh]     
                        object-contain   
                    '
        />
      </div>

      {/* Right Side: Product Info */}
      <div className='w-full mt-6 text-justify lg:w-2/3 lg:pl-8 lg:mt-0'>
        {/* Product Title */}
        <h1 className='text-xl font-bold text-green-700 md:text-2xl lg:text-3xl'>
          {title}
        </h1>
        <p className='text-lg font-semibold text-green-700 md:text-xl lg:text-2xl'>
          {subtitle}
        </p>

        {/* Target Crop, Dose, Pest */}
        <div className='mt-6 text-sm md:text-base lg:text-lg'>
          <div className='grid grid-cols-[auto_auto_1fr] gap-x-4 gap-y-4'>
            <span className='font-bold'>TARGET CROP</span>
            <span>:</span>
            <span>{targetCrop}</span>

            <span className='font-bold'>DOSE</span>
            <span>:</span>
            <span>{dose}</span>

            <span className='font-bold'>PEST</span>
            <span>:</span>
            <span>{pest}</span>
          </div>
        </div>

        {/* Uses Section */}
        <div className='mt-6 text-sm md:text-base lg:text-lg'>
          <h2 className='font-bold text-green-700'>
            <span>USES</span>
            <span className='mx-2'>:</span>
          </h2>
          <p className='mt-2'>{uses}</p>
        </div>

        {/* Advantages Section */}
        <div className='mt-6 text-sm md:text-base lg:text-lg'>
          <h2 className='font-bold text-green-700'>ADVANTAGES:</h2>
          <p className='mt-2'>{advantages}</p>
        </div>

        {/* Time of Applications Section */}
        <div className='mt-6 text-sm md:text-base lg:text-lg'>
          <h2 className='font-bold text-green-700'>TIME OF APPLICATIONS:</h2>
          <p className='mt-2 text-blue-700'>{applications}</p>
        </div>

        {/* Buttons */}
        <div className='flex mt-6 space-x-4'>
          <Button
            buttonText='Send Query'
            showIcon={true}
            handlar={() => console.log('Button clicked!')} 
          />

          <Button
            buttonText='Download Catalog'
            showIcon={true}
            handlar={handleOpenPDF} // Use the open PDF handler here
          />
        </div>
      </div>
    </div>
  )
}

ProductDetails.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  targetCrop: PropTypes.string.isRequired,
  dose: PropTypes.string.isRequired,
  pest: PropTypes.string.isRequired,
  uses: PropTypes.string.isRequired,
  advantages: PropTypes.string.isRequired,
  applications: PropTypes.string.isRequired
}

export default ProductDetails
