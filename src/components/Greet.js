import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello, {props.firstName} {props.lastName} {props.fatherName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
