import React from "react";
import ProductFilter from "./ProductFilter";
import { products } from '../../backend/db/products'
import './productList.css'

const ProductList = () => {
    return (
        <div class="content-container mt-1 flex gap-1">
            <ProductFilter />
            <main class="main-container p-1 box-shadow">
                <h2>Showing All Products (8)</h2>
                <div class="products flex">
                    {products.map(product => (
                        <div class="card-badge product rel bg-white">
                            <div class="flex img-container">
                                <img src={product.productImg} alt={product.categoryName} />
                                <span class="material-icons wishlist">favorite_border</span>
                            </div>
                            <div class="card-body flex flex-column align-items">
                                <div class="product-name px-1">
                                    {product.productName}
                                </div>
                                <div class="card-sub-content p-1 flex justify-between">
                                    <span>&#8377;{product.price}/-</span>
                                    <div class="rating-simple flex align-center">
                                        {product.rating}<span class="material-icons rating"> star </span>
                                    </div>
                                </div>
                                <div class="card-sub-content flex justify-center">
                                    <button class="product-cart-button btn-primary">
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
