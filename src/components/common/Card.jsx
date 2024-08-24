import PropTypes from 'prop-types';
import { ImPointRight } from 'react-icons/im';

const Card = ({ title, picture, buttonText, showIcon, className }) => {
  return (
    // ---------------Card Designing-------------------
    <div className={`relative ${className}`}>
      <div className='h-full shadow-lg bg-gradient-to-r from-darkGray via-lightGray to-darkGray rounded-3xl'>
        <div className='flex flex-col items-center gap-10 p-5'>
          <h1 className='text-[1.8rem] font-bold text-dark-green-200'>{title}</h1>
          <div className='flex justify-center w-full hover:scale-90 transition-all duration-700'>
            <img src={picture} alt='products' className='object-cover w-full h-full' />
          </div>
          <button className='flex px-4 py-2 text-white transition-transform duration-100 rounded-lg bg-light-green-200 hover:animate-float hover:shadow-lg hover:bg-richblack-500 hover:text-white-shade-100'>
            {buttonText}
            {showIcon && (
              <span className='p-1'>
                <ImPointRight />
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
// ---------------Defining Props-------------------
Card.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  picture: PropTypes.string,
  showIcon: PropTypes.bool,
  className: PropTypes.string, 
};
//----------------Defining Default props-----------------
Card.defaultProps = {
  showIcon: true,
  className: '', 
};

export default Card;
