import React from "react";
import "./productFilter.css";
import { categories } from "../../backend/db/categories";
import { useProduct } from "../../context/products/product-context";

const ProductFilter = () => {
  const { state, dispatch } = useProduct();
  return (
    <aside className="aside-filter flex flex-column gap-1 ml-1 p-1 box-shadow">
      <div className="flex justify-between align-center ml-1">
        <h3 className="side-heading">Filters</h3>
        <button onClick={() => dispatch({ type: "CLEAR" })} className="clear">
          Clear
        </button>
      </div>
      <div className="side-heading ml-1">
        <h4>Price</h4>
        <div className="slider-value">
          <span>500</span>
          <span>2500</span>
          <span>5000</span>
        </div>
        <input
          type="range"
          min="500"
          max="5000"
          step="500"
          list="prices"
          value={state.priceRange}
          onChange={(e) => dispatch({ type: "RANGE", payload: e.target.value })}
        />
      </div>
      <div className="side-heading ml-1">
        <h4>Sort by</h4>
        <ul>
          <li className="flex align-center gap-1">
            <input
              type="radio"
              id="lowToHigh"
              name="price"
              checked={state.sortBy === "LOW_TO_HIGH"}
              onChange={() =>
                dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
              }
            />
            <label htmlFor="lowToHigh"> Price - Low to High </label>
          </li>
          <li className="flex align-center gap-1">
            <input
              id="highToLow"
              type="radio"
              name="price"
              checked={state.sortBy === "HIGH_TO_LOW"}
              onChange={() =>
                dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
              }
            />
            <label htmlFor="highToLow"> Price - High to Low </label>
          </li>
        </ul>
      </div>
      <div className="side-heading ml-1">
        <h4>Category</h4>
        <ul>
          {categories.map((category) => (
            <li key={category._id} className="flex gap-1 align-center">
              <input
                id={category._id}
                type="checkbox"
                checked={state.categories.includes(category.categoryName)}
                onChange={() =>
                  dispatch({
                    type: "CATEGORIES",
                    payload: category.categoryName,
                  })
                }
              />
              <label htmlFor={category._id}> {category.categoryName} </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="side-heading ml-1">
        <h4>Rating</h4>
        <ul>
          {[1, 2, 3, 4].map((item) => (
            <li className="flex align-center gap-1">
              <input
                id={item}
                type="radio"
                value={item}
                name="ratings"
                checked={state.ratings === item}
                onChange={() => dispatch({ type: "RATING", payload: item })}
              />
              <label htmlFor={item}> {item} * and above </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ProductFilter;
