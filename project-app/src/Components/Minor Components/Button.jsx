import React from "react";

function Button({ Title, Type, onClick }) {
  return (
    <div className="button-container">
    <button type={Type} onClick={onClick}>
      {Title}
    </button>
    </div>
  );
}

export default Button;
