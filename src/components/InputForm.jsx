import React, { useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

const InputForm = ({ functionsHandlers }) => {
  const { addUser } = functionsHandlers;
  const [person, setPerson] = useState({
    id: "",
    name: "",
    age: 0,
    number: 0,
  });

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });

    console.log(person);
  };

  const handleClick = () => {
    let personToAdd = {
      id: uuidv4(),
      name: person.name,
      number: parseInt(person.number),
      age: parseInt(person.age),
    };

    addUser(personToAdd);
    setPerson({
      id: "",
      name: "",
      age: 0,
      number: 0,
    });
  };

  return (
    <>
      <section className="input-form">
        <input
          type="text"
          name="name"
          value={person.name}
          placeholder="Name: example [Iron Man]"
          onChange={handleChange}
        />
        <input
          type="number"
          min={0}
          max={100}
          name="age"
          value={person.age}
          placeholder="Age: example [20]"
          onChange={handleChange}
        />
        <input
          type="number"
          name="number"
          min={0}
          value={person.number}
          placeholder="Number Person: example [100]"
          onChange={handleChange}
        />
        <Button text="Add Person" onClick={handleClick} />
      </section>
    </>
  );
};

export default InputForm;
