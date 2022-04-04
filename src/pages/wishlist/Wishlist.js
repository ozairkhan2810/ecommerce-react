import React, { useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../../context/wishlist/wishlist-context";
import "../../components/products/productList.css";
import { useCart } from "../../context/cart/cart-context";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  const { cartDispatch } = useCart();

  useEffect(() => {
    document.title = "My Wishlist | CricKit";
  }, []);

  return (
    <section>
      <h1 className="p-1">My Wishlist ({wishlist.length})</h1>
      <p className="pl-1 pb-1 font-size-large">
        View favorite products you've saved to your wishlist.
      </p>
      <div className="wishlist-products flex ml-1 gap-1">
        {wishlist?.map((product) => (
          <div className="card-badge product rel bg-white">
            <div className="flex img-container">
              <img src={product.productImg} alt="card-pic" />
              <span
                className="wishlist"
                onClick={() =>
                  wishlistDispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: product,
                  })
                }
              >
                {wishlist.filter((item) => item._id === product._id).length ===
                1 ? (
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
    </section>
  );
};

export default Wishlist;
