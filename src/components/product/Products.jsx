import React from 'react';
import ProductCard from '../../components/common/ProductCard';

const Products = () => {
    return (
        <div className="grid grid-cols-1 gap-4 p-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center" style={{ maxWidth: '1200px' }}>
            <ProductCard
                imageSrc="https://via.placeholder.com/150"
                productName="Fila Plus"
                productDescription="Alphacypermethrin 10% SC"
            />
            <ProductCard
                imageSrc="https://via.placeholder.com/150"
                productName="Borohit Plus"
                productDescription="Alphacypermethrin 10% SC"
            />
            <ProductCard
                imageSrc="https://via.placeholder.com/150"
                productName="Borohit Plus"
                productDescription="Alphacypermethrin 10% SC"
            />
            <ProductCard
                imageSrc="https://via.placeholder.com/150"
                productName="Borohit Plus"
                productDescription="Alphacypermethrin 10% SC"
            />
            {/* Add more ProductCard components here */}
        </div>
    );
};

export default Products;
