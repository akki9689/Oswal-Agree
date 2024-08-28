import PropTypes from 'prop-types';
import Button from './Button';

const ProductCard = ({
    imageSrc,
    productName,
    productDescription,
}) => {
    return (
        <div className="w-full max-w-xs mx-auto">
            <div className="flex flex-col justify-between p-6 transition duration-300 transform bg-white rounded-xl hover:shadow-2xl hover:scale-105 h-[23rem] hover:shadow-richblack-500 ">
                <div className="flex justify-center mb-2">
                    <img src={imageSrc} alt={productName} className="object-contain h-40" />
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-green-700">
                        {productName}
                    </h3>
                    <p className="text-gray-600">{productDescription}</p>
                </div>
                <div className="flex justify-center mt-4">
                    <Button
                        buttonText="Read More"
                        showIcon={true}
                        handlar={() => console.log('Button clicked!')}
                    />
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    onReadMoreClick: PropTypes.func.isRequired,
};

export default ProductCard;
