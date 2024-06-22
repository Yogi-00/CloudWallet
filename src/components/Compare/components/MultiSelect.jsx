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
      <h3 className="text-lg text-orange-700 font-bold mb-2">{name}</h3>
      <Select
        isMulti
        name={name}
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <div>
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
