import React from "react";

const Button = ({ text, onClick, primary }) => {
  return (
    <>
      <a href="#" className={`button ${primary}`} onClick={onClick}>
        {text}
      </a>
    </>
  );
};

export default Button;
