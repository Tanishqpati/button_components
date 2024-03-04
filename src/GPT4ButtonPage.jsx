import React from "react";
import GPT4Button from "./Components/GPT4Button";

const GPT4ButtonPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#FFF",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <p>GPT4ButtonPage</p>
      <GPT4Button type="primary" label="Button" size="medium" />
      <GPT4Button type="secondary" label="Click me" size="large" />
      <GPT4Button type="text" label="Click me" size="small" />
      <GPT4Button type="elevated" label="Click me" size="medium" />
    </div>
  );
};

export default GPT4ButtonPage;
