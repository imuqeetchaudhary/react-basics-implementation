import React from "react";
import "./StyleSheet.css";

const StyleSheet = (props) => {
  const className = props.primary ? "primary" : "";

  const heading = {
    fontSize: "60px",
    color: "steelblue",
  };


  return (
    <div>
      {/* Because styles applied to Parent file by CSS StyleSheet also applis to child files */}
      <h3 className="error">error</h3>

      <h1 className={`${className} font-xl`}>CSS StyleSheet</h1>
      <h1 style={heading}>Inline Styling</h1>
    </div>
  );
};

export default StyleSheet;
