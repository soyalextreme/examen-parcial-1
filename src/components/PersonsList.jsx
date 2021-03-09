import React from "react";
import Person from "./Person";

const PersonList = ({ persons, functionsHandlers, setUpdate }) => {
  const { deleteUser, updateUser } = functionsHandlers;

  return (
    <section className="section-list">
      {persons.map((data) => (
        <Person
          key={data.id}
          data={data}
          deleteFn={deleteUser}
          setUpdateFn={setUpdate}
        />
      ))}
    </section>
  );
};

export default PersonList;
