import React from "react";

///////History
import { history } from "../../../index";
//////////Context
import { useAuth } from "../../../AppContext/AuthContext";
///////styles
import "./styles.scss";

export const AuthBlock = () => {
  const isAuthorized = useAuth();
  const { removeToken } = useAuth();
  const logOutRemoveToken = () => {
    removeToken();
    history.push("/login");
  };

  return (
    <div className="auth-block">
      {(!isAuthorized.token && (
        <div className="auth-block__is-authorized">
          <button
            className="btn btn-primary"
            onClick={() => history.push("/login")}
          >
            Log In
          </button>

          <button
            className="btn btn-primary"
            onClick={() => history.push("/signup")}
          >
            Sign In
          </button>
        </div>
      )) || (
        <button className="btn btn-primary" onClick={logOutRemoveToken}>
          Log Out
        </button>
      )}
    </div>
  );
};
