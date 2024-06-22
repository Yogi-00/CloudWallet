import React from "react";
import Select from "react-select";

const SingleSelect = ({
  selectedOption = [],
  handleChange,
  options,
  name,
  placeholder,
}) => {
  return (
    <div>
      <Select
        name={name}
        options={options}
        value={selectedOption}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {selectedOption && (
        <div>
          <h3>{name}</h3>
          <p>{selectedOption.label}</p>
        </div>
      )}
    </div>
  );
};

export default SingleSelect;
