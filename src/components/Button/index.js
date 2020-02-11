import React from "react";

const Entry = ({ label, handler }) => {
  return <button onClick={handler}>
    <span>{label}</span>
  </button>;
};

export default Entry;
