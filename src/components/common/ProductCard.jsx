import PropTypes from 'prop-types';
import Button from './Button';

const ProductCard = ({
    imageSrc,
    productName,
    productDescription,
}) => {
    return (
        <div className="max-w-xs p-4 duration-300 transform bg-gray-50 rounded-xl hover:shadow-2xl hover:scale-100 hover:shadow-black">
            <div className="flex justify-center mb-6">
                <img src={imageSrc} alt={productName} className="object-contain h-40" />
            </div>
            <h3 className="text-lg font-semibold text-center text-green-700">
                {productName}
            </h3>
            <p className="text-center text-gray-600">{productDescription}</p>
            <div className="flex justify-center mt-4">
                <Button
                    buttonText="Read More"
                    showIcon={true}
                    handlar={() => console.log('Button clicked!')}
                />
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
};

export default ProductCard;
