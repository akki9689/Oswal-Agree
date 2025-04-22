import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../../data/products/all-products-data'; 
import ProductDetails from '../common/ProductDetails';
import Popupname from '../common/Popupname';
import Loader from '../../components/common/Loader';

const ProductPage = () => {
  const { category, productName } = useParams();
  const [product, setProduct] = useState(null);

  let modifyProductName ;

  if (productName.includes("_")) {

    modifyProductName = productName
      .split('_')   //splt by hyphen
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //capitalize first letter of each word
      .join(' ')  //join words with spaces

  }else{
    modifyProductName = productName;
  }



  let productTitle ;
  let matchTitle;



  if (category.includes("_")) {

    productTitle = category
      .split('_')   //splt by hyphen
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //capitalize first letter of each word
      .join(' ')  //join words with spaces

      matchTitle = category.split('_').join("-");

  }else{
    productTitle = category;
    matchTitle = category;
  }


  useEffect(() => {
    const getProductDetails = () => {
      let foundProduct = null;
      const categoryData = allProducts.find(cat => cat.title.toLowerCase() === matchTitle.toLowerCase());
      if (categoryData) {
        foundProduct = categoryData.productName.find(prod => prod.name.toLowerCase() === decodeURIComponent(modifyProductName.toLowerCase()));
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
      <Popupname title={category ? productTitle : 'All Products'} />
      
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
