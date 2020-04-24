import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FunctionComponent = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "24px", margin: "16px" }}>404 Not Found</h1>
      <div>
        <Link to="/home">Let's go home</Link>
      </div>
    </div>
  );
};
