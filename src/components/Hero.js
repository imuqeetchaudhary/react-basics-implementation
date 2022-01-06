import React from "react";

const Hero = ({ heroname }) => {
  if (heroname === `Joker`) throw new Error(`Not a Hero!`);
  return <h3>{heroname}</h3>;
};

export default Hero;
