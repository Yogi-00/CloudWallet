import React from "react";
import Range from "../../components/Range";

function NetworkSpeed({
  rangeNetworkSpeed,
  handleNetworkSpeedChange,
  maxValue,
}) {
  return (
    <>
      <Range
        rangeValue={rangeNetworkSpeed}
        handleRangeChange={handleNetworkSpeedChange}
        max={maxValue}
        name="Network Speed"
      />
    </>
  );
}

export default NetworkSpeed;
