import React, { useEffect } from "react";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProductList from "../../components/products/ProductList";

import { useProduct } from "../../context/products/product-context";

const Product = () => {
  const { filteredProducts } = useProduct();

  useEffect(() => {
    document.title = "All Products | CricKit";
  });

  return (
    <>
      <Navbar />
      <ProductList products={filteredProducts} />
      <Footer />
    </>
  );
};

export default Product;
