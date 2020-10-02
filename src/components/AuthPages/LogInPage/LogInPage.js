import React, { useState } from "react";
//////////authActions
import { getTokenAndLogin } from "../../../API/AXIOS/authActions";
/////Context
import { useAuth } from "../../../AppContext/AuthContext";
import { useAlert } from "../../../AppContext/AlertContext";

////STYLES
import "./styles.scss";

export const LogInPage = () => {
  const [email, setEmail] = useState("@gmail.com");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const { setToken } = useAuth();
  const { show } = useAlert();

  return (
    <div className="login">
      <h2>GOT AN ACCOUNT? LOG IN NOW!</h2>
      <form
        className="login__form"
        onSubmit={(e) => {
          e.preventDefault();
          getTokenAndLogin(email, password, remember)(setToken, show);
        }}
      >
        <p>Enter your e-mail</p>
        <input
          placeholder="em@il"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required={true}
        />
        <p>Enter your password</p>
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required={true}
        />
        <div>
          <input
            type="checkbox"
            id="remember"
            name="remember"
            onClick={() => {
              setRemember((prev) => !prev);
            }}
          />
          <span>Remember me</span>
        </div>
        <button className="btn btn-primary">Log IN</button>
      </form>
    </div>
  );
};
