import React from "react";
import Range from "../../components/Range";

function Cpu({ rangeCpu, handleCpuChange, maxValue }) {
  return (
    <>
      <Range
        rangeValue={rangeCpu}
        handleRangeChange={handleCpuChange}
        max={maxValue}
        name="Cpu"
      />
    </>
  );
}

export default Cpu;
