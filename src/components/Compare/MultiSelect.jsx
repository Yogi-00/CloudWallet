import React from "react";
import Select from "react-select";

const MultiSelect = ({
  selectedOptions = [],
  handleChange,
  options,
  name,
  placeholder,
}) => {
  // console.log(options);
  return (
    <div>
      <Select
        isMulti
        name={name}
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <div>
        <h3>{name}</h3>
        <ul>
          {selectedOptions.map((options) => (
            <li key={options.value}>
              {options.label}
              {/* {console.log(options)} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiSelect;
