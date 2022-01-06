import React, { forwardRef } from "react";

const FRInput = forwardRef((props, ref) => {
  return (
    <>
      <div>
        <label>Username: </label>
        <input type="text" ref={ref} />
      </div>
    </>
  );
});

export default FRInput;
