import React from "react";
import March4Button from "./Components/March4Button/March4Button";

const March4ButtonPage = () => {
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
      <p>March4ButtonPage</p>
      <March4Button type="primary" size="medium">
        Button
      </March4Button>
      <March4Button type="secondary" size="medium">
        Button
      </March4Button>
      <March4Button type="text" size="medium">
        Button
      </March4Button>
    </div>
  );
};

export default March4ButtonPage;
