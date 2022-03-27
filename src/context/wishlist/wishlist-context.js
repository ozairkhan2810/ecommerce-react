import { createContext, useContext, useReducer } from "react";
import { wishlistReducerFunc } from "../../reducer/wishlist-reducer";

const defaultWishlistValue = {
  wishlist: [],
};

const WishlistContext = createContext(defaultWishlistValue);

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducerFunc, {
    wishlist: [],
  });
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};
const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
