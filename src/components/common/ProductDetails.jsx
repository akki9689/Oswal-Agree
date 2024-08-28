
import PropTypes from "prop-types";
import Button from "./Button";

const ProductDetails = ({
    imageUrl=null,
    title,
    subtitle,
    targetCrop,
    dose,
    pest,
    uses,
    advantages,
    application,
}) => {
    return (
        <div className="flex flex-col items-center p-6 mx-auto max-w-7xl md:p-7 lg:flex-row lg:p-8 lg:space-x-8 dsx:w-8/12">
            {/* Left Side: Image */}
            <div className="flex justify-center w-full lg:w-1/3 lg:justify-start">
                <img
                    src={imageUrl}
                    alt={title}
                    className="
                        h-[40vh] w-auto   /* Default for small screens */
                        sm:h-[45vh]      /* For screens >= 640px */
                        md:h-[50vh]      /* For screens >= 768px */
                        lg:h-[55vh]      /* For screens >= 1024px */
                        xl:h-[60vh]      /* For screens >= 1280px */
                        2xl:h-[65vh]     /* For screens >= 1536px */
                        max-h-[70vh]     /* Maximum height */
                        object-contain   /* Maintain aspect ratio */
                    "
                />
            </div>

            {/* Right Side: Product Info */}
            <div className="w-full mt-6 text-left text-justify lg:w-2/3 lg:pl-8 lg:mt-0">
                {/* Product Title */}
                <h1 className="text-xl font-bold text-green-700 md:text-2xl lg:text-3xl">
                    {title}
                </h1>
                <p className="text-lg font-semibold text-green-700 md:text-xl lg:text-2xl">
                    {subtitle}
                </p>

                {/* Target Crop, Dose, Pest */}
                <div className="mt-4 text-sm md:text-base lg:text-lg">
                    <p>
                        <span className="font-bold">TARGET CROP :</span> {targetCrop}
                    </p>
                    <p>
                        <span className="font-bold">DOSE :</span> {dose}
                    </p>
                    <p>
                        <span className="font-bold">PEST :</span> {pest}
                    </p>
                </div>

                {/* Uses Section */}
                <div className="mt-4 text-sm md:text-base lg:text-lg">
                    <h2 className="font-bold text-green-700">USES:</h2>
                    <p className="mt-2">{uses}</p>
                </div>

                {/* Advantages Section */}
                <div className="mt-4 text-sm md:text-base lg:text-lg">
                    <h2 className="font-bold text-green-700">ADVANTAGES:</h2>
                    <p className="mt-2">{advantages}</p>
                </div>

                {/* Time of Applications Section */}
                <div className="mt-4 text-sm md:text-base lg:text-lg">
                    <h2 className="font-bold text-green-700">TIME OF APPLICATIONS:</h2>
                    <p className="mt-2 text-blue-700">{application}</p>
                </div>

                {/* Buttons */}
                <div className="flex mt-6 space-x-4">
                    <Button buttonText="Send Query" showIcon={true} />
                    <Button buttonText="Dowanload Cataloag" showIcon={true} />
                </div>
            </div>
        </div>
    );
};

ProductDetails.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    targetCrop: PropTypes.string.isRequired,
    dose: PropTypes.string.isRequired,
    pest: PropTypes.string.isRequired,
    uses: PropTypes.string.isRequired,
    advantages: PropTypes.string.isRequired,
    applications: PropTypes.string.isRequired,
};

export default ProductDetails;
