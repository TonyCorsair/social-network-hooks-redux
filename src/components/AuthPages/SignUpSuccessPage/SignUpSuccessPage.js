import React from "react";
import { history } from "../../../index";

export const SignUpSuccessPage = () => {
  return (
    <div className="signup">
      <h2>Registration success ! Now Log IN ! </h2>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/login")}
      >
        Log In
      </button>
    </div>
  );
};
