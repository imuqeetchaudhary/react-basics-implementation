import React from "react";

const Person = ({ person }) => {
  return (
    <div>
      <h3>
        I am {person.name}. My age is {person.age}, I know {person.skill}.
      </h3>
    </div>
  );
};

export default Person;
