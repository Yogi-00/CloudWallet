import React from "react";
import Range from "../../components/Range";

function Ram({ rangeRam, handleRamChange, maxValue }) {
  return (
    <>
      <Range
        rangeValue={rangeRam}
        handleRangeChange={handleRamChange}
        max={maxValue}
        name="Ram"
      />
    </>
  );
}

export default Ram;
