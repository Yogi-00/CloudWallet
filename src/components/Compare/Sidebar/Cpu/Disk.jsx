import React from "react";
import Range from "../../components/Range";

function Disk({ rangeDisk, handleDiskChange, maxValue }) {
  return (
    <>
      <Range
        rangeValue={rangeDisk}
        handleRangeChange={handleDiskChange}
        max={maxValue}
        name="Disk"
      />
    </>
  );
}

export default Disk;
