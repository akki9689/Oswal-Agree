import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../../data/products/all-products-data'; 
import ProductDetails from '../common/ProductDetails';
import Popupname from '../common/Popupname';
import Loader from '../../components/common/Loader';

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
    return<div> <Loader /></div>;
  }

  return (
    <div>
      <Popupname title={category ? category : 'All Products'} />
      
      <div className='pt-10 pb-10'>
        
        <ProductDetails
          imageUrl={product.img } 
          title={product.name}
          subtitle={product.activeIngredient}
          targetCrop={product.details.targetCrops?.length ? product.details.targetCrops.join(', ') : ''}
          dose={product.details.dose}
          pest={product.details.pest && product.details.pest.length ? product.details.pest.join(', ') : ''}
          uses={product.details.uses}
          advantages={product.details.advantages?.length ? product.details.advantages.join(', ') : ''}
          applications={product.details.application}
        />
      </div>
    </div>
  );
};

export default ProductPage;
