import React from "react";
import "./AIButtonStyle.css";

const AIButton = ({ type, state, size }) => {
  const buttonClass = `${type}-${state} ${size}`;
  return <button className={`button ${buttonClass}`}>Button</button>;
};

export default AIButton;
