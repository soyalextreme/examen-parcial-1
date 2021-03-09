import React, { useState } from "react";
import Button from "./Button";

const Person = ({ data, deleteFn, setUpdateFn }) => {
  const { name, number, age, id } = data;

  return (
    <>
      <div className="information-section mb-2">
        <h1 className="text-font text-bold mb-2">Name: {name}</h1>
        <p className="text-font mb-2">Age: {age}</p>
        <p className="text-font mb-2">Number: {number}</p>
        <div className="btn-section">
          <Button
            onClick={() => setUpdateFn({ active: true, person: data })}
            text="Editar"
          />
          <Button
            onClick={() => deleteFn(id)}
            text="Eliminar"
            primary="cancel"
          />
        </div>
      </div>
    </>
  );
};

export default Person;
