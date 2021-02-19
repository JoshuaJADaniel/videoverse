import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

import { selectPropTypes } from "data/propTypeValues";

import "./SelectDropdown.module.scss";

const SelectDropdown = ({ onChange, defaultValue, options }) => {
  const customStyles = {
    control: (styles) => ({
      ...styles,
      padding: "4px 8px",
      cursor: "pointer",
    }),
    option: (styles, state) => ({
      ...styles,
      cursor: "pointer",
      padding: "15px 8px",
      color: state.isSelected ? "#ffffff" : "var(--selectDropdownColor)",
    }),
  };

  return (
    <Select
      options={options}
      defaultValue={defaultValue}
      menuPortalTarget={document.body}
      onChange={(data) => onChange(data)}
      styles={customStyles}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: "var(--selectDropdownPrimary)",
          primary25: "var(--selectDropdownPrimaryHover)",
          primary50: "var(--selectDropdownPrimaryHover)",
          neutral0: "var(--selectDropdownBackground)",
          neutral20: "var(--selectDropdownBorder)",
          neutral30: "var(--selectDropdownBorder)",
          neutral80: "var(--selectDropdownColor)",
        },
      })}
    />
  );
};

SelectDropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: selectPropTypes.isRequired,
  options: PropTypes.arrayOf(selectPropTypes).isRequired,
};

export default SelectDropdown;
