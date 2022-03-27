import React from "react";
import ProductFilter from "./ProductFilter";
import "./productList.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../../context/wishlist/wishlist-context";

const ProductList = ({ products }) => {
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  return (
    <div className="product-page flex gap-1">
      <ProductFilter />
      <main className="main-container pl-1">
        <h2 className="main-heading">Showing Products ({products.length})</h2>
        <div className="products flex">
          {products.map((product) => (
            <div key={product._id} className="card-badge product rel bg-white">
              <div className="flex img-container">
                <img src={product.productImg} alt={product.categoryName} />
                <span
                  className="wishlist"
                  onClick={() => {
                    wishlistDispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: product,
                    });
                  }}
                >
                  {wishlist.filter((item) => item._id === product._id)
                    .length === 1 ? (
                    <FaHeart size="24" />
                  ) : (
                    <FaRegHeart size="24" />
                  )}
                </span>
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
                  <button
                    onClick={() =>
                      cartDispatch({ type: "ADD_TO_CART", payload: product })
                    }
                    className="product-cart-button btn-primary"
                  >
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
