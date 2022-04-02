import React from "react";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import { useWishlist } from "../../context/wishlist/wishlist-context";
import { useCart } from "../../context/cart/cart-context";
import "./cart.css";

const CartItem = ({ product, quantity }) => {
  const { wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();
  return (
    <div className="card-horizontal cart-products product justify-center rel bg-white">
      <div className="img-container">
        <img src={product.productImg} alt={product.productName} />
      </div>
      <div className="card-body flex flex-column align-items">
        <div className="product-name pb-1">
          {product.productName}
          <button
            className="remove-from-cart-button"
            onClick={() =>
              cartDispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
              })
            }
          >
            <FaTrashAlt />
          </button>
        </div>
        <div className="card-sub-content font-size-large pb-1">
          ₹{product.price * quantity}
        </div>
        <div className="rating-simple flex align-center">
          {product.rating}
          <span className="material-icons rating"> star </span>
        </div>
        <div className="flex align-center">
          <span className="mr-1">Qty</span>
          <button
            className="cart-quantity flex align-center justify-center"
            onClick={() =>
              cartDispatch({
                type: "DECREMENT_CART_ITEM",
                payload: product,
              })
            }
          >
            <FaMinus />
          </button>
          <input
            type="text"
            placeholder={quantity}
            className={"cart-quantity-placeholder"}
          />
          <button
            className="cart-quantity"
            onClick={() =>
              cartDispatch({
                type: "INCREMENT_CART_ITEM",
                payload: product,
              })
            }
          >
            <FaPlus />
          </button>
        </div>
        <div className="card-sub-content flex flex-column">
          <div className="card-sub-content"></div>
          <button
            className="product-cart-button btn-secondary flex align-center justify-center gap-1 "
            onClick={() => {
              wishlistDispatch({
                type: "ADD_TO_WISHLIST",
                payload: product,
              });
              cartDispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
              });
            }}
          >
            <span className="material-icons wishlist"> favorite_border </span>
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
