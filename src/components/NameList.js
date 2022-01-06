import React from "react";
import Person from "./Person";

const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "Abdul Muqeet Arshad",
      age: 22,
      skill: "Software Engineering",
    },
    {
      id: 2,
      name: "Anish Nadeem",
      age: 22,
      skill: "Business Development",
    },
    {
      id: 3,
      name: "Amir Riaz",
      age: 22,
      skill: "Farming",
    },
  ];

  const personList = persons.map((person) => <Person key={person.id} person={person} />);

  return <div>{personList}</div>;
};

export default NameList;
