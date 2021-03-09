import React from "react";
import { usePersonContext } from "../PersonContext.jsx";
import Person from "./Person";

const PersonList = () => {
  const { persons, setPersons } = usePersonContext();

  return (
    <section>
      {persons.map((data) => (
        <Person key={data.id} data={data} />
      ))}
    </section>
  );
};

export default PersonList;
