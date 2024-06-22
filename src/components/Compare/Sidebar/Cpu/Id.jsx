import React from "react";
import Range from "../../components/Range";

function Id({ rangeCpu, handleCpuChange }) {
  return (
    <>
      <Range rangeCpu={rangeCpu} handleCpuChange={handleCpuChange} max={896} />
    </>
  );
}

export default Id;
