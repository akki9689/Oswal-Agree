import React from 'react';
import { useHistory } from 'react-router-dom';
import ProductCard from '../../components/common/ProductCard';
import { allProducts } from '../../data/products/all-products-data'; // Ensure correct import

const Products = () => {
  const history = useHistory();

  const handleReadMoreClick = (productId) => {
    history.push(`/product/${productId}`); // Navigate to the ProductPage with product ID
  };

  return (
    <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3">
      {allProducts.flatMap((category) => 
        category.productName.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.img}
            productName={product.name}
            productDescription={product.activeIngredient}
            onReadMoreClick={() => handleReadMoreClick(product.id)} // Pass the handler
          />
        ))
      )}
    </div>
  );
};

export default Products;
