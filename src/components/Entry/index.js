import React from "react";

const Entry = ({ name, type, value, placeholder, handler }) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handler}
    />
  );
};

export default Entry;
