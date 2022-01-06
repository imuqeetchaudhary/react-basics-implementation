import React from "react";

export const FunctionClick = () => {
  function handleClick() {
    console.log("Button Clicked");
  }

  return (
    <div>
      {/* <button onClick={handleClick}>Click</button> */}
      <button onClick={() => handleClick()}>Click</button>
    </div>
  );
};
