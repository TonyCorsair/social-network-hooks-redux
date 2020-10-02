import axios from "./axiosApi";

export const getCurrentUserByToken = ({ getUserData, show }) => {
  axios
    .get("auth/user")
    .then((res) => {
      getUserData(res.data);
    })
    .catch((e) => {
      show({ text: "Failed to load User Data", variation: "red" });
    });
};
