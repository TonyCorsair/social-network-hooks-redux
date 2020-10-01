import React, { useState } from "react";
import axios from "../../../API/AXIOS/axiosApi";

///////History
import { history } from "../../../index";

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

  function getTokenAndLogin(e) {
    e.preventDefault();

    axios
      .post("/auth", {
        email: email,
        password: password,
      })
      .then((res) => {
        // console.log(res);
        setToken(res.data);
        remember && localStorage.setItem("token", res.data.token);
        !remember && sessionStorage.setItem("token", res.data.token);
        history.push("/profile");
      })

      .catch((e) => {
        show({
          text: "ERR! No such user, your data is invalid :(",
          variation: "orange",
        });
      });
  }

  return (
    <div className="login">
      <h2>GOT AN ACCOUNT? LOG IN NOW!</h2>
      <form className="login__form" onSubmit={getTokenAndLogin}>
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
