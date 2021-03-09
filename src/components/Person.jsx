import React, { useState } from "react";

const Person = ({ data, deleteFn, setUpdateFn }) => {
  const { name, number, age, id } = data;

  return (
    <>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>Number: {number}</p>
      <div>
        <span onClick={() => setUpdateFn({ active: true, person: data })}>
          Editar
        </span>
        <span onClick={() => deleteFn(id)}>Eliminar</span>
      </div>
    </>
  );
};

export default Person;
