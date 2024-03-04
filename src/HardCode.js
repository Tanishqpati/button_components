import React from "react";
import Button from "./Components/Button.js";

const HardCode = () => {
  return (
    <div>
      <header
        className="App-header"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "#FFF",
        }}
      >
        <Button type="primary" size="small">
          Button
        </Button>
        <Button type="secondary" size="medium">
          Button
        </Button>
        <Button type="text" size="large">
          Button
        </Button>
        <Button type="elevated" size="medium">
          Button
        </Button>
        <Button type="elevated" size="large" disabled>
          Button
        </Button>
      </header>
    </div>
  );
};

export default HardCode;
