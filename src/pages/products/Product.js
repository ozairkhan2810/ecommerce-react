import React, { useEffect } from "react";

import ProductList from "../../components/products/ProductList";

import { useProduct } from "../../context/products/product-context";

const Product = () => {
  const { filteredProducts } = useProduct();

  useEffect(() => {
    document.title = "All Products | CricKit";
  });

  return (
    <>
      <ProductList products={filteredProducts} />
    </>
  );
};

export default Product;
