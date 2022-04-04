export const cartReducer = (state, action) => {
  const { cart } = state;
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      if (cart.some(({ product }) => product._id === payload._id))
        return {
          ...state,
          cart: cart.filter(({ product }) => product._id !== payload._id),
        };

      return {
        ...state,
        cart: [...cart, { product: payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: cart.filter(({ product }) => product._id !== payload._id),
      };

    case "INCREMENT_CART_ITEM":
      return {
        ...state,
        cart: cart.map(({ product, quantity }) =>
          product._id === payload._id
            ? { product, quantity: quantity + 1 }
            : { product, quantity }
        ),
      };

    case "DECREMENT_CART_ITEM":
      return {
        ...state,
        cart: cart.map(({ product, quantity }) =>
          product._id === payload._id
            ? { product, quantity: quantity > 1 ? quantity - 1 : quantity }
            : { product, quantity }
        ),
      };

    default:
      return state;
  }
};
