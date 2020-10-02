import axios from "./axiosApi";
import { history } from "../../index";

export const postUserDataToServer = (email, password) => (
  getUserData,
  show
) => {
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
};

export const getTokenAndLogin = (email, password, remember) => (
  setToken,
  show
) => {
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
};
