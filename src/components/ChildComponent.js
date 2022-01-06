import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.handleClick("Child")}>Greet Parent</button>
    </div>
  );
};

export default ChildComponent;
