import PropTypes from 'prop-types';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Card = ({
  title,
  picture = null,  // Default value for picture
  className = ''   // Default value for className
}) => {

  let newTitle;

  if (title.includes("_")) {

    newTitle = title
      .split('_')   //splt by hyphen
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //capitalize first letter of each word
      .join(' ')  //join words with spaces

  }else if(title.includes("-")){
    newTitle = title
    .split('-')   //splt by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //capitalize first letter of each word
    .join(' ')  //j
  }
  else{
    newTitle = title;
  }

  const navigate = useNavigate();

  const handleClickMore = () => {
    navigate(`/products/${title.toLowerCase()}`)
  }



  return (
    // ---------------Card Designing-------------------
    <div className={`relative ${className}`}>
      <div className='h-full shadow-lg bg-gradient-to-r from-darkGray via-lightGray to-darkGray rounded-3xl'>
        <div className='flex flex-col items-center gap-10 p-5'>
          <h1 className='text-2xl text-center font-bold text-dark-green-200 uppercase'>{newTitle}</h1>
          <div className='flex justify-center w-full transition-all duration-700 hover:scale-90'>
            <img src={picture} alt='products' className='object-cover w-full h-full' />
          </div>
          <Button
            buttonText='Click More'
            showIcon={true}
            handlar={handleClickMore}
          />
        </div>
      </div>
    </div>
  );
};

// ---------------Defining Props-------------------
Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
