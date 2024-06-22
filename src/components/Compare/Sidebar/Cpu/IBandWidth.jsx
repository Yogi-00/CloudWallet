import React from "react";
import Range from "../../components/Range";

function IBandWidth({ rangeBandWidth, handleBandWidthChange, maxValue }) {
  return (
    <>
      <Range
        rangeValue={rangeBandWidth}
        handleRangeChange={handleBandWidthChange}
        max={maxValue}
        name="BandWidth"
      />
    </>
  );
}

export default IBandWidth;
