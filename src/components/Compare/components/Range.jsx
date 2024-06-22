import React from "react";

const Range = ({ rangeValue, handleRangeChange, max, name }) => {
  return (
    <section className="sidebar p-4 text-white">
      <div className="range-input">
        <h3 className="text-lg text-orange-700 font-bold mb-2">{name}</h3>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col text-black">
            <label className="mb-2">
              Max ID:
              <span className="ml-2">{rangeValue}</span>
            </label>
            <input
              className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer range-orange-700"
              type="range"
              name="max"
              value={rangeValue}
              min="1"
              max={max}
              onChange={handleRangeChange}
            />
          </div>
          <div className="flex flex-col">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-orange-700"
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
