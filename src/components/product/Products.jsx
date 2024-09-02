import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../../components/common/ProductCard'; 
import { allProducts } from '../../data/products/all-products-data'; 
import Popupname from '../common/Popupname';
import { motion, useAnimation } from 'framer-motion';
// ---------------------added
const Products = () => {
  const { category } = useParams();
 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const controls = useAnimation();

  let title;
  let matchTitle;

  if (category.includes("_")) {

    title = category
      .split('_')   //splt by hyphen
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //capitalize first letter of each word
      .join(' ')  //join words with spaces

      matchTitle = category.split('_').join("-")
  }else{
    title = category;
    matchTitle = category;
  }

  useEffect(() => {
    const getProducts = () => {
      if (category) {
        const categoryData = allProducts.find(cat => cat.title.toLowerCase() === matchTitle.toLowerCase());
        if (categoryData) {
          setFilteredProducts(categoryData.productName || []);
        } else {
          setFilteredProducts([]);
        }
      } else {
        const allProductsList = allProducts.flatMap(cat => cat.productName || []);
        setFilteredProducts(allProductsList);
      }
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      scale: [0.9, 1],
      transition: { duration: 0.5 },
    });
  }, [category, controls]);

 

  const handleReadMoreClick = (productName) => {
    navigate(`/products/${category}/${productName}`);
  };


  return (
    <div className="container p-4 mx-auto">
      
      <motion.div animate={controls}>
        <Popupname title={category ? title : 'All Products'} />
      </motion.div>
      <div data-aos="fade-up" className="grid grid-cols-1 gap-8 pt-10 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.name}
              imageSrc={product.img } 
              productName={product.name}
              productDescription={product.activeIngredient}
              onReadMoreClick={() => handleReadMoreClick(product.name.split(" ").join("_").toLowerCase())}
            />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
