import React from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../../data/products/all-products-data'; // Ensure correct import
import ProductDetails from './ProductDetails';

const ProductPage = () => {
  const { productId } = useParams();
  const product = allProducts.flatMap(category => category.productName)
                              .find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <ProductDetails
      imageUrl={product.img}
      title={product.name}
      subtitle={product.activeIngredient}
      targetCrop={product.details.targetCrops.join(', ')}
      dose={product.details.dose}
      pest={product.details.pests.join(', ')}
      uses={product.details.uses}
      advantages={product.details.advantages.join(' ')}
      applications={product.details.application}
    />
  );
};

export default ProductPage;
