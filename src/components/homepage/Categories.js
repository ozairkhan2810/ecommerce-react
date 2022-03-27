import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../backend/db/categories";

const Categories = () => {
  return (
    <div class="deal-container p-1 border-radius bg-white box-shadow">
      <h2 class="center-text pb-1">Categories</h2>
      <div class="category flex gap-1 mb-1">
        {categories.map((category, index) => (
          <Link to="/products">
            <div
              key={category._id}
              class="category-list flex flex-column gap-1 justify-center align-center bg-white box-shadow"
            >
              <img
                class="img-category"
                src={category.categoryImg}
                alt={category.categoryName}
              />
              <span class="bold-500">{category.categoryName}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
