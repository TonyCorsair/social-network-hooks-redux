import React, { useState } from "react";

import axios from "../../../API/AXIOS/axiosApi";

///////History
import { history } from "../../../index";

////////Context
import { useAlert } from "../../../AppContext/AlertContext";
import { useAuth } from "../../../AppContext/AuthContext";

/////Styles
import "./styles.scss";

export const SignUpPage = () => {
  const [email, setEmail] = useState("@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { show } = useAlert();
  const { getUserData } = useAuth();
  // console.log("getUserData", getUserData);

  function postUserDataToServer(e) {
    e.preventDefault();

    axios
      .post("/users", {
        email: email,
        password: password,
        name: email,
      })
      .then((res) => {
        getUserData(res.data);
        // console.log("res.data", res.data);
        history.push(`/signup-success`);
      })
      .catch((e) => {
        console.log("e", e);
        show({
          text:
            "REGISTRATION ERROR! Check if e-mail was valid , also check that password must have at least 5 symbols",
          variation: "red",
        });
      });
  }

  return (
    <div className="signup">
      <h2>Sign UP! Join US!</h2>
      <form className="signup__form" onSubmit={postUserDataToServer}>
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
