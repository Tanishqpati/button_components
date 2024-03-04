import React from "react";
import "./GPT4Styles.css";

const GPT4Button = ({ type, label, size }) => {
  const className = `${type}-${size}`;
  return <button className={className}>{label}</button>;
};

export default GPT4Button;
