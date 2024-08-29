import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../../components/common/ProductCard'; // Ensure correct path
import { allProducts } from '../../data/products/all-products-data'; // Ensure correct import
import Popupname from '../common/Popupname';
import { motion, useAnimation } from 'framer-motion';

const Products = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const controls = useAnimation();

  useEffect(() => {
    const getProducts = () => {
      if (category) {
        const categoryData = allProducts.find(cat => cat.title.toLowerCase() === category.toLowerCase());
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
    navigate(`/products/${category}/${encodeURIComponent(productName)}`);
  };

  return (
    <div className="container p-4 mx-auto">
      <motion.div animate={controls}>
        <Popupname title={category ? category : 'All Products'} />
      </motion.div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.name}
              imageSrc={product.img || 'default-image.png'} // Fallback image
              productName={product.name}
              productDescription={product.activeIngredient}
              onReadMoreClick={() => handleReadMoreClick(product.name)}
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
