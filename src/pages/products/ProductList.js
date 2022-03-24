import React from "react";
import ProductFilter from "./ProductFilter";
import { products } from "../../backend/db/products";
import "./productList.css";

const ProductList = () => {
  return (
    <div className="product-page flex gap-1">
      <ProductFilter />
      <main className="main-container p-1">
        <h2 className="main-heading">Showing All Products (8)</h2>
        <div className="products flex">
          {products.map((product) => (
            <div className="card-badge product rel bg-white">
              <div className="flex img-container">
                <img src={product.productImg} alt={product.categoryName} />
                <span className="material-icons wishlist">favorite_border</span>
              </div>
              <div className="card-body flex flex-column align-items">
                <div className="product-name px-1">{product.productName}</div>
                <div className="card-sub-content p-1 flex justify-between">
                  <span>&#8377;{product.price}/-</span>
                  <div className="rating-simple flex align-center">
                    {product.rating}
                    <span className="material-icons rating"> star </span>
                  </div>
                </div>
                <div className="card-sub-content flex justify-center">
                  <button className="product-cart-button btn-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductList;
