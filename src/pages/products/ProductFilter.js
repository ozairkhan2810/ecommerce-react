import React from 'react'

const ProductFilter = () => {
    return (
        <aside className="sidebar flex flex-column gap-1 ml-1 p-1 box-shadow">
            <div className="flex justify-between align-center ml-1">
                <h3 className="side-heading">Filters</h3>
                <button className="clear">Clear</button>
            </div>
            <div className="side-heading font-size-large ml-1 bold-500">
                <h4 className="pb-1">Price</h4>
                <div className="slider-value">
                    <span>100</span>
                    <span>500</span>
                    <span>1000</span>
                </div>
                <input
                    type="range"
                    id="vol"
                    name="vol"
                    min="100"
                    max="1000"
                    step="100"
                    value="500"
                />
            </div>
            <div className="side-heading ml-1">
                <h4>Category</h4>
                <ul>
                    <li className="flex gap-1 align-center pb-1">
                        <input id="bat" type="checkbox" />
                        <label for="bat"> Bat </label>
                    </li>
                    <li className="flex gap-1 align-center pb-1">
                        <input id="ball" type="checkbox" />
                        <label for="ball"> Ball </label>
                    </li>
                    <li className="flex gap-1 align-center pb-1">
                        <input id="jersey" type="checkbox" />
                        <label for="jersey"> Jersey </label>
                    </li>
                    <li className="flex gap-1 align-center pb-1">
                        <input id="cap" type="checkbox" />
                        <label for="cap"> Cap </label>
                    </li>
                    <li className="flex gap-1 align-center pb-1">
                        <input id="helmet" type="checkbox" />
                        <label for="helmet"> Helmet </label>
                    </li>
                </ul>
            </div>
            <div className="side-heading ml-1">
                <h4>Rating</h4>
                <ul>
                    <li className="flex align-center gap-1 pb-1">
                        <input id="four-star" type="radio" name="rating" className="filter-rating" />
                        <label for="four-star"> 4* and above </label>
                    </li>
                    <li className="flex align-center gap-1 pb-1">
                        <input id="three-star" type="radio" name="rating" className="filter-rating" />
                        <label for="three-star"> 3* and above </label>
                    </li>
                    <li className="flex align-center gap-1 pb-1">
                        <input id="two-star" type="radio" name="rating" className="filter-rating" />
                        <label for="two-star"> 2* and above </label>
                    </li>
                    <li className="flex align-center gap-1">
                        <input id="one-star" type="radio" name="rating" className="filter-rating" />
                        <label for="one-star"> 1* and above </label>
                    </li>
                </ul>
            </div>
            <div className="side-heading ml-1">
                <h4>Sort by</h4>
                <ul>
                    <li className="flex align-center gap-1 pb-1">
                        <input type="radio" name="sort" />
                        <label for="bat"> Price - Low to High </label>
                    </li>
                    <li className="flex align-center gap-1 pb-1">
                        <input type="radio" name="sort" />
                        <label for="ball"> Price - High to Low </label>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default ProductFilter