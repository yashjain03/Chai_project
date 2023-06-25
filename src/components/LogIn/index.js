import React from "react";
import "./LogIn.css";

function LogIn(props) {
  const { children } = props;

  return (
    <div className="log-in">
      <div className="log-in-1 inter-normal-comet-48px">{children}</div>
    </div>
  );
}

export default LogIn;
