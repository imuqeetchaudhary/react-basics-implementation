import React from "react";
import ReactDOM from "react-dom";

const PortalDemo = () => {
  return ReactDOM.createPortal(
    <>
      <h3>Portal Demo</h3>
    </>,
    document.getElementById("portal-demo")
  );
};

export default PortalDemo;
