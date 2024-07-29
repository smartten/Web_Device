import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "component/FilterComponent/style.scss";

const FilterComponent = () => {
  const [category, setCategory] = useState([]);
  const [color, setColor] = useState("");
  const [size, setSize] = useState([]);
  const [price, setPrice] = useState([0, 100]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleColorChange = (color) => {
    setColor(color);
  };

  const handleSizeChange = (e) => {
    const value = e.target.value;
    setSize((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handlePriceChange = (newPrice) => {
    const [min, max] = newPrice;
    if (min === max) {
      return;
    }
    setPrice(newPrice);
  };

  const onSliderChange = (value) => {
    const [min, max] = value;
    if (min === max) {
      setPrice([min - 1, max + 1]);
    } else {
      handlePriceChange(value);
    }
  };

  return (
    <>
      <div className="filter">
        <h5>Filter By Categories</h5>
        {[
          "Power Tools",
          "Hand Tools",
          "Cordless Kits",
          "Blades",
          "Safety Workwear",
          "Air Tools",
          "Staple Guns",
          "Pressure Washes",
          "Safety Equipment",
          "Abrasives",
          "Cutting Tools",
          "Nailers",
        ].map((cat) => (
          <div key={cat} className="filter-item">
            <input
              type="checkbox"
              value={cat}
              checked={category.includes(cat)}
              onChange={handleCategoryChange}
            />
            <label>{cat}</label>
          </div>
        ))}

        <h5>Filter By Color</h5>
        <div className="color-options">
          {["black", "blue", "gray", "green", "orange", "red", "yellow"].map(
            (col) => (
              <div
                key={col}
                className={`color-circle ${col}`}
                onClick={() => handleColorChange(col)}
                style={{
                  backgroundColor: col,
                  border: color === col ? "2px solid black" : "none",
                }}></div>
            )
          )}
        </div>

        <h5>Filter By Size</h5>
        {["Large", "Medium", "Small"].map((sz) => (
          <div key={sz} className="filter-item">
            <input
              type="checkbox"
              value={sz}
              checked={size.includes(sz)}
              onChange={handleSizeChange}
            />
            <label>{sz}</label>
          </div>
        ))}

        <h5>Filter By Price</h5>
        <div className="price-filter">
          <div className="price-inputs">
            <input
              type="text"
              name="min"
              value={price[0]}
              readOnly
              placeholder="Min"
            />
            <input
              type="text"
              name="max"
              value={price[1]}
              readOnly
              placeholder="Max"
            />
          </div>
          <Slider
            range
            min={122}
            max={500}
            value={price}
            onChange={onSliderChange}
            className="price-slider"
            allowCross={false}
          />
        </div>
      </div>

      <div className="filter-image">
        <img
          src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP01/wp-content/uploads/2023/06/left-banner-01-1.jpg"
          alt="Filter"
        />
      </div>
    </>
  );
};

export default FilterComponent;
