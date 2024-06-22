import React from "react";

const Range = ({ rangeValue, handleRangeChange, max, name }) => {
  return (
    <section className="sidebar">
      <div className="range-input">
        <h3>Filter by {name}</h3>
        <div className="flex">
          <div>
            <label>
              Max ID:
              {rangeValue}
            </label>
            <input
              type="range"
              name="max"
              value={rangeValue}
              min="1"
              max={max}
              onChange={handleRangeChange}
            />
          </div>
          <div>
            <input
              type="number"
              name="max"
              value={rangeValue}
              onChange={handleRangeChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Range;
