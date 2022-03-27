export const getSortedList = (state, productList) => {
  if (state.sortBy === "LOW_TO_HIGH") {
    return [...productList].sort((a, b) => Number(a.price) - Number(b.price));
  }
  if (state.sortBy === "HIGH_TO_LOW") {
    return [...productList].sort((a, b) => Number(b.price) - Number(a.price));
  }
  return productList;
};
