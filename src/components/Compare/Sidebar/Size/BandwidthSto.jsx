import React from "react";
import Range from "../../components/Range";

function BandWidthSto({
  rangeBandWidthSto,
  handleBandWidthStoChange,
  maxValue,
}) {
  return (
    <>
      <Range
        rangeValue={rangeBandWidthSto}
        handleRangeChange={handleBandWidthStoChange}
        max={maxValue}
        name="BandWidthSto"
      />
    </>
  );
}

export default BandWidthSto;
