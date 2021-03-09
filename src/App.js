import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import InputForm from "./components/InputForm";
import PersonList from "./components/PersonsList";

const API = "http://localhost:8000/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    // fecth the initial state in the db
    const fetchPersons = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setPersons(data);
    };

    fetchPersons();
  }, []);

  const addUser = async (person) => {
    const freeNumber = findNumer(person.id);

    if (!freeNumber) {
      return alert("Numero ya esta elgindo");
    }

    const response = await fetch(API, {
      method: "POST",
      body: person,
    });

    setPersons([...persons, person]);

    console.log(response);
  };

  const deletUser = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DElETE",
    });

    const response = await fetch(API);
    const data = await response.json();
    setPersons(data);
  };

  const updateUser = async (id) => {};

  return (
    <PersonContext.Provider>
      <div>
        <h1>CRUD personas</h1>
        <InputForm />
        <Button text="Add Person" />
        <PersonList />
      </div>
    </PersonContext.Provider>
  );
};

export default App;
