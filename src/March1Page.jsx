import React from "react";
import March1Button from "./Components/March1Button";

const March1Page = () => {
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
      <p>March1Page</p>
      <March1Button type="primary" size="medium">
        Button
      </March1Button>
      <March1Button type="secondary" size="large">
        Button
      </March1Button>
      <March1Button type="text" size="small">
        Button
      </March1Button>
      <March1Button type="elevated" size="medium">
        Button
      </March1Button>
    </div>
  );
};

export default March1Page;
