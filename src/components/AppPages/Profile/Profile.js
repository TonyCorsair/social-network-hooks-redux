import React, { useEffect } from "react";
import axios from "axios";

import { useAuth } from "../../../AppContext/AuthContext";
import { useAlert } from "../../../AppContext/AlertContext";

import "./styles.scss";

function getCurrentUserByToken(token, show) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return () =>
    axios
      .get("http://localhost:3001/api/v1/auth/user", config)
      .then((response) => {})
      .catch((e) => {
        show({ text: "Failed to load User Data", variation: "red" });
      });
}

export const Profile = () => {
  const { token } = useAuth();
  const { show } = useAlert();

  useEffect(() => {
    getCurrentUserByToken(token, show);
  }, [token, show]);

  return (
    <div className="profile">
      <div className="profile__user">
        <div className="user">
          <div className="user__avatar">avatar</div>
          <div className="user__name">name</div>
        </div>
      </div>
    </div>
  );
};
