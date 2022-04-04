import React from "react";
import { useCart } from "../../context/cart/cart-context";

const CartPriceDetails = ({ cart, price, mrp }) => {
  return (
    <section className="cart-price-details">
      <h3 className="mb-1">Order Summary</h3>
      <div>
        <p className="flex justify-between mb-1">
          Total Price (Inc GST){" "}
          <span>
            <span>₹</span>
            {price}
          </span>
        </p>
        <p className="flex justify-between mb-1">
          Estimated Delivery Fee
          <small>
            <span>₹</span> 99
          </small>
        </p>
      </div>
      <div className="flex justify-between mb-1">
        <span>Total </span>
        <span>₹{price + 99}</span>
      </div>
      <div className="checkout">CheckOut</div>
    </section>
  );
};

export default CartPriceDetails;
