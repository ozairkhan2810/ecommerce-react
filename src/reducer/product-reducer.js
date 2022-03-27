export const productReducerFunc = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return {
        ...state,
        sortBy: "",
        categories: [],
        priceRange: 2500,
        ratings: 0,
      };
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "RANGE":
      return { ...state, priceRange: action.payload };
    case "RATING":
      return { ...state, ratings: action.payload };
    case "CATEGORIES":
      if (state.categories.includes(action.payload)) {
        return {
          ...state,
          categories: state.categories.filter(
            (item) => item !== action.payload
          ),
        };
      }
      return { ...state, categories: [...state.categories, action.payload] };
    default:
      return state;
  }
};
