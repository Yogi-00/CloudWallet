import React from "react";
import Range from "../../components/Range";

function Price({ rangeValue, handleRangeChange, maxValue }) {
  return (
    <>
      <Range
        rangeValue={rangeValue}
        handleRangeChange={handleRangeChange}
        max={maxValue}
      />
    </>
  );
}

export default Price;
