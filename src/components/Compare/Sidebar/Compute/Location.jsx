import React from "react";
import MultiSelect from "../../components/MultiSelect";
import locations from "../../db/locations";

function Location({
  selectedLocation,
  handleLocationChange,
  location = locations,
}) {
  return (
    <>
      <MultiSelect
        selectedOption={selectedLocation}
        handleChange={handleLocationChange}
        options={location}
        name="Location"
        placeholder="select Location"
      />
    </>
  );
}

export default Location;
