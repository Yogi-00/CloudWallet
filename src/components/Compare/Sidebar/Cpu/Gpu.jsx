import React from "react";
import Range from "../../components/Range";

function Gpu({ rangeGpu, handleGpuChange, maxValue }) {
  return (
    <>
      <Range
        rangeValue={rangeGpu}
        handleRangeChange={handleGpuChange}
        max={maxValue}
        name="Gpu"
      />
    </>
  );
}

export default Gpu;
