import React, { useEffect } from "react";
import { useCart } from "../../context/cart/cart-context";
import CartItem from "../../components/cart/CartItem";
import CartPriceDetails from "../../components/cart/CartPriceDetails";
import { FaCartPlus } from "react-icons/fa";
import "./cart.css";

const Cart = () => {
  const { cartState } = useCart();
  const { cart } = cartState;

  const priceDetailsReducer = (acc, cur) => {
    return cart.length
      ? {
          ...acc,
          price: acc.price + Number(cur.product.price) * Number(cur.quantity),
          mrp: acc.mrp + Number(cur.product.mrp) * Number(cur.quantity),
        }
      : acc;
  };

  const totalPriceDetails = cart.reduce(priceDetailsReducer, {
    price: 0,
    mrp: 0,
  });

  console.log(totalPriceDetails);

  useEffect(() => {
    document.title = "My Cart | CricKit";
  }, []);

  return (
    <section>
      <h1 className="p-1 center-text">
        {cart.length ? (
          <main>
            My Cart {cart.length}
            <p className="pl-1 pb-1 font-size-large">View your cart.</p>
            <div className="flex justify-between ml-1 mr-1">
              <div className="wishlist-products flex wrap ml-1 gap-1">
                {cart?.map(({ product, quantity }) => (
                  <CartItem product={product} quantity={quantity} />
                ))}
              </div>
              <CartPriceDetails cart={cart} {...totalPriceDetails} />
            </div>
          </main>
        ) : (
          <div>
            <FaCartPlus size="256" style={{ color: "#007dbc" }} />
            <div className="cart-empty">Your Cart is empty</div>
          </div>
        )}
      </h1>
    </section>
  );
};

export default Cart;
