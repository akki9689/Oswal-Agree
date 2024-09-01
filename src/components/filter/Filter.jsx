import { useNavigate } from 'react-router-dom';
import ProductCard from '../common/ProductCard';

const Filter = ({ products }) => {

    const navigate = useNavigate();

    const handleReadMoreClick = (title, productName) => {
        navigate(`/products/${title}/${productName}`);
    };

    return (
        <div className='relative w-full py-8 md:py-16'>
            <div  className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {products.length > 0 ? (
                    products.map((product) =>

                        <ProductCard
                            key={`${product.name} - ${product.id}`}
                            imageSrc={product.img}
                            productName={product.name}
                            productDescription={product.activeIngredient}
                            onReadMoreClick={() => handleReadMoreClick(product.productType.toLowerCase() , product.name.split(" ").join("-").toLowerCase())}
                        />

                    )
                ) : (
                    <p className='text-lg text-center text-gray-500'>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default Filter;