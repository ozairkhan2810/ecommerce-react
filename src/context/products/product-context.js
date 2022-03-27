import { createContext, useReducer, useContext } from "react";
import { productReducerFunc } from "../../reducer/product-reducer";
import { products } from "../../backend/db/products";
import { getSortedList } from "../../utils";

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const initialState = {
    sortBy: null,
    categories: [],
    priceRange: 2500,
    ratings: 0,
  };

  const getFilteredProducts = (state, sortedList) => {
    const filterList = sortedList
      .filter((item) =>
        state.categories.length === 0
          ? item
          : state.categories.includes(item.categoryName)
      )
      .filter((item) =>
        state.ratings > 0 ? item.rating >= state.ratings : item
      )
      .filter((item) => Number(item.price) <= Number(state.priceRange));
    return filterList;
  };

  const [state, dispatch] = useReducer(productReducerFunc, initialState);

  const sortedList = getSortedList(state, products);

  const filteredProducts = getFilteredProducts(state, sortedList);
  return (
    <productContext.Provider value={{ state, dispatch, filteredProducts }}>
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { useProduct, ProductProvider };
