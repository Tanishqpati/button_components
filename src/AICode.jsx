import React from "react";
import AIButton from "./Components/AIButton";

const AICode = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "1rem",
      }}
    >
      <AIButton type={"primary"} state={"enabled"} size={"medium"} />
      <AIButton type={"secondary"} state={"enabled"} size={"small"} />
      <AIButton type={"text"} state={"enabled"} size={"large"} />
    </div>
  );
};

export default AICode;
