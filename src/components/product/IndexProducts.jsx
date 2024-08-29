export const indexProductsById = (products) => {
  const productIndex = {};

  products.forEach(category => {
    category.productName.forEach(product => {
      productIndex[product.id] = {
        ...product,
        categoryTitle: category.title,
      };
    });
  });

  return productIndex;
};
