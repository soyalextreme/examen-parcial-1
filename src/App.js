import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import InputForm from "./components/InputForm";
import PersonList from "./components/PersonsList";

const API = "http://localhost:8000/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [update, setUpdate] = useState({ active: false, person: undefined });

  useEffect(() => {
    // fecth the initial state in the db
    const fetchPersons = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setPersons(data);
    };

    fetchPersons();
  }, []);

  const findNumber = (number) => {
    let res = true;

    persons.map((person) => {
      if (person.number === number) {
        res = false;
      }
    });
    return res;
  };

  const addUser = async (person) => {
    console.log(person);
    const freeNumber = findNumber(person.number);

    if (!freeNumber) {
      return alert("Numero ya esta elgindo");
    }

    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });

    setPersons([...persons, person]);

    console.log(response);
  };

  const deleteUser = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DElETE",
    });

    const response = await fetch(API);
    const data = await response.json();
    setPersons(data);
  };

  const updateUser = async (person) => {
    const numberFree = findNumber(person.number);
    if (!numberFree) {
      return alert("Ese numero ya esta elegido");
    }

    await fetch(`${API}/${person.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });

    const response = await fetch(API);
    const data = await response.json();
    setPersons(data);
  };

  const functionsHandlers = {
    deleteUser,
    updateUser,
    addUser,
  };

  return (
    <div>
      <h1>CRUD personas</h1>
      <InputForm functionsHandlers={functionsHandlers} update={update} />
      <PersonList
        persons={persons}
        functionsHandlers={functionsHandlers}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default App;
