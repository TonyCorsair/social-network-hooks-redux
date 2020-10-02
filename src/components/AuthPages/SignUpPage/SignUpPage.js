import React, { useState } from "react";
//////////authActions
import { postUserDataToServer } from "../../../API/AXIOS/authActions";
///////Context
import { useAuth } from "../../../AppContext/AuthContext";
import { useAlert } from "../../../AppContext/AlertContext";
/////Styles
import "./styles.scss";

export const SignUpPage = () => {
  const [email, setEmail] = useState("@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { getUserData } = useAuth();
  const { show } = useAlert();
  // console.log("getUserData", getUserData);

  return (
    <div className="signup">
      <h2>Sign UP! Join US!</h2>
      <form
        className="signup__form"
        onSubmit={(e) => {
          e.preventDefault();
          postUserDataToServer(email, password)(getUserData, show);
        }}
      >
        <p>Enter your email!</p>
        <input
          className="inputSignup"
          type="username"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
          required={true}
        />
        <p>create your password</p>
        <input
          className="inputSignup"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          required={true}
        />
        <p>Repeat your password :)</p>
        <input
          type="password"
          placeholder="repeat password"
          className="inputSignup"
          required={true}
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />

        <button className="btn btn-primary" style={{ marginTop: "30px" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};
