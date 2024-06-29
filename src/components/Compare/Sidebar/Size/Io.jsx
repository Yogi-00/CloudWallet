import React from "react";
import Range from "../../components/Range";

function Io({ rangeIo, handleIoChange, maxValue }) {
  return (
    <>
      <Range
        rangeValue={rangeIo}
        handleRangeChange={handleIoChange}
        max={maxValue}
        name="Io"
      />
    </>
  );
}

export default Io;
