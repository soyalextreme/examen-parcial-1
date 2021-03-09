import React from "react";

const Person = ({ data }) => {
  const { name, number, age } = data;

  return (
    <>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>Number: {number}</p>
      <div>
        <span>Editar</span>
        <span>Eliminar</span>
      </div>
    </>
  );
};

export default Person;
