import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../../data/products/all-products-data'; // Ensure correct import
import ProductDetails from '../common/ProductDetails'; // Ensure correct path
import Popupname from '../common/Popupname';

const ProductPage = () => {
  const { category, productName } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetails = () => {
      let foundProduct = null;
      const categoryData = allProducts.find(cat => cat.title.toLowerCase() === category.toLowerCase());
      if (categoryData) {
        foundProduct = categoryData.productName.find(prod => prod.name.toLowerCase() === decodeURIComponent(productName.toLowerCase()));
      }
      setProduct(foundProduct || null);
    };

    getProductDetails();
  }, [category, productName]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div >
         <Popupname title={category ? category : 'All Products'} />
     <div className='pt-10 pb-10'>
     <ProductDetails
      imageUrl={product.img || 'default-image.png'} // Fallback image
      title={product.name}
      subtitle={product.activeIngredient}
      targetCrop={product.details.targetCrops ? product.details.targetCrops.join(', ') : 'Information not available'}
      dose={product.details.dose}
      pest={product.details.pests ? product.details.pests.join(', ') : 'Information not available'}
      uses={product.details.uses}
      advantages={product.details.advantages ? product.details.advantages.join(', ') : 'Information not available'}
      applications={product.details.application}
    />
     </div>
    </div>
  );
};

export default ProductPage;
