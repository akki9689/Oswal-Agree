import PropTypes from 'prop-types';
import { FaRegHandPointLeft } from "react-icons/fa";

const Button = ({
  buttonText,
  showIcon = true, // Default value for showIcon
  className = '',  // Default value for className
  handlar         // Prop for handling click events
}) => {
  return (
    // ---------------Button Designing-------------------
    <div>
      <button 
        className={`flex px-4 py-2 text-black transition-transform duration-100 rounded-lg bg-light-green-200 hover:animate-float hover:shadow-lg hover:bg-richblack-500 hover:text-white-shade-100 ${className}`}
        onClick={handlar} 
      >
        {buttonText}
        {showIcon && (
          <span className='p-1'>
            <FaRegHandPointLeft />
          </span>
        )}
      </button>
    </div>
  );
};

// ---------------Defining Props-------------------
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
  className: PropTypes.string,
  handlar: PropTypes.func,
};

export default Button;
