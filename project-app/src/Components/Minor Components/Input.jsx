import React from "react";
import "./Input.css";

function Input({ Title, Type, handleChange }) {
  return (
    <div className="inputcontainer">
      <label>{Title}</label>
      <input type={Type} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}

export default Input;
