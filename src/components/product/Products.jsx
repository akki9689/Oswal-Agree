import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/common/ProductCard'; // Make sure this path is correct
import { allProducts } from '../../data/products/all-products-data'; // Ensure correct import

const Products = () => {
  const { category } = useParams(); // Get the category from the URL
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      if (category) {
        // Find the category data from allProducts
        const categoryData = allProducts.find(cat => cat.title.toLowerCase() === category.toLowerCase());
        if (categoryData) {
          setFilteredProducts(categoryData.productName || []);
        } else {
          setFilteredProducts([]);
        }
      } else {
        // If no category is selected, display all products
        const allProductsList = allProducts.flatMap(categoryData => categoryData.productName || []);
        setFilteredProducts(allProductsList);
      }
    };

    getProducts();
  }, [category]);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-semibold">{category ? category : 'All Products'}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.img}
              productName={product.name}
              productDescription={product.activeIngredient}
              onReadMoreClick={() => console.log(`Clicked on product ${product.id}`)}
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
