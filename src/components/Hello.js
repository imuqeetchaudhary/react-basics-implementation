import React from "react";

export const Hello = () => {
  // using JSX

  return (
    <div>
      <h1>Hello, Abdul Muqeet Arshad</h1>
    </div>
  );

  // Without Using JSX

  // return React.createElement(
  //   "div",
  //   { className: "hello" },
  //   React.createElement("h1", null, "Hello, Abdul Muqeet Arshad")
  // );
};
