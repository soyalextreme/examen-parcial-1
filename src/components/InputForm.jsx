import React, { useEffect, useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

const InputForm = ({ functionsHandlers, update, setUpdate, setAlertm }) => {
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
  };

  const handleClick = () => {
    let personToAdd = {
      id: uuidv4(),
      name: person.name,
      number: parseInt(person.number),
      age: parseInt(person.age),
    };

    if (personToAdd.name.length === 0) {
      setAlertm({ state: true, msg: "Please! Fill the name" });
      setTimeout(() => {
        setAlertm({ state: false, msg: "" });
      }, 3000);
      return;
    }

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
      age: "",
      number: "",
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
      <section className="input-section">
        <label className="label">Name: </label>
        <input
          type="text"
          name="name"
          className="input"
          value={person.name}
          placeholder="Name: example [Iron Man]"
          onChange={handleChange}
        />
        <label className="label">Age: </label>
        <input
          type="number"
          min={0}
          max={100}
          name="age"
          className="input"
          value={person.age}
          placeholder="Age: example [20]"
          onChange={handleChange}
        />
        <label className="label">Number: </label>
        <input
          type="number"
          name="number"
          min={0}
          className="input"
          value={person.number}
          placeholder="Number Person: example [100]"
          onChange={handleChange}
        />
        <Button
          text={update.active ? "Update" : "Add"}
          onClick={handleClick}
          primary="primary"
        />
        {update.active && (
          <Button text="cancel" onClick={handleCancel} primary="cancel" />
        )}
      </section>
    </>
  );
};

export default InputForm;
