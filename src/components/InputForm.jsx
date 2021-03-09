import React, { useEffect, useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

const InputForm = ({ functionsHandlers, update, setUpdate }) => {
  useEffect(() => {
    if (update.active) {
      setPerson(update.person);
    }
  }, [update]);

  const { addUser, updateUser } = functionsHandlers;
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

    if (update.active === true) {
      personToAdd.id = update.person.id;
      updateUser(personToAdd);
      setUpdate({ active: false, person: {} });
    } else {
      addUser(personToAdd);
    }

    setPerson({
      id: "",
      name: "",
      age: 0,
      number: 0,
    });
  };

  const handleCancel = () => {
    setUpdate({ active: false, person: {} });
    setPerson({
      name: "",
      age: "",
      number: "",
    });
  };

  return (
    <>
      <section className="input-form">
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={person.name}
          placeholder="Name: example [Iron Man]"
          onChange={handleChange}
        />
        <label>Age: </label>
        <input
          type="number"
          min={0}
          max={100}
          name="age"
          value={person.age}
          placeholder="Age: example [20]"
          onChange={handleChange}
        />
        <label>Number: </label>
        <input
          type="number"
          name="number"
          min={0}
          value={person.number}
          placeholder="Number Person: example [100]"
          onChange={handleChange}
        />
        <Button text={update.active ? "Update" : "Add"} onClick={handleClick} />
        {update.active && <Button text="cancel" onClick={handleCancel} />}
      </section>
    </>
  );
};

export default InputForm;
