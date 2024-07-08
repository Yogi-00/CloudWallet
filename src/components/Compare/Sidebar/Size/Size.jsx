import React from "react";
import Range from "../../components/Range";

function Size({ rangeSize, handleSizeChange, maxValue }) {
  return (
    <>
      <Range
        rangeValue={rangeSize}
        handleRangeChange={handleSizeChange}
        max={maxValue}
        name="Size (in Gb)"
      />
    </>
  );
}

export default Size;
