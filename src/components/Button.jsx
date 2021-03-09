import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <>
      <a href="#" onClick={onClick}>
        {text}
      </a>
    </>
  );
};

export default Button;
