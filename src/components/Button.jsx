import React from "react";

const Button = ({ text, onClick, primary }) => {
  return (
    <>
      <span href="#" className={`button ${primary}`} onClick={onClick}>
        {text}
      </span>
    </>
  );
};

export default Button;
