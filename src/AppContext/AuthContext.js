import React, { useContext, useReducer } from "react";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
  // const a = useContext(AuthContext);
  // console.log("a", a);
  // return a;
};

//////////////////////TYPES
const GET_USER_DATA = "GET_USER_DATA";
const SET_TOKEN = "SET_TOKEN";
const LOG_OUT = "LOG_OUT";
/////////////////////

const authReducer = (state, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, userData: action.data };
    case SET_TOKEN:
      return { ...state, token: action.data };
    case LOG_OUT:
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      return { ...state, token: "" };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  //////////////////////////////
  const [state, dispatch] = useReducer(authReducer, {
    userData: {},
    token:
      localStorage.getItem("token") || sessionStorage.getItem("token") || "",
  });

  const getUserData = (data) => {
    dispatch({ type: GET_USER_DATA, data });
  };

  const setToken = (data) => {
    dispatch({ type: SET_TOKEN, data });
  };

  const removeToken = () => {
    dispatch({ type: LOG_OUT });
  };

  const authActions = {
    userData: state.userData,
    getUserData,
    token: state.token,
    setToken,
    removeToken,
  };

  return (
    <AuthContext.Provider value={{ ...authActions }}>
      {children}
    </AuthContext.Provider>
  );
};
