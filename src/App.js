import React, { useEffect, useState } from "react";
import Alert from "./components/Alert";
import InputForm from "./components/InputForm";
import PersonList from "./components/PersonsList";

const API = "http://localhost:8000/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [update, setUpdate] = useState({ active: false, person: {} });
  const [alertm, setAlertm] = useState({ state: false, msg: "" });

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

    // eslint-disable-next-line
    persons.map((person) => {
      if (person.number === number && number !== update.person.number) {
        res = false;
      }
    });
    return res;
  };

  const addUser = async (person) => {
    console.log(person);
    const freeNumber = findNumber(person.number);

    if (!freeNumber) {
      setAlertm({ state: true, msg: "Please! That number is taken" });
      setTimeout(() => {
        setAlertm({ state: false, msg: "" });
      }, 5000);
      return;
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
      {alertm.state && <Alert msg={alertm.msg} />}
      <h1 className="main-title">CRUD Persons</h1>
      <InputForm
        functionsHandlers={functionsHandlers}
        update={update}
        setUpdate={setUpdate}
        setAlertm={setAlertm}
      />
      <PersonList
        persons={persons}
        functionsHandlers={functionsHandlers}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default App;
