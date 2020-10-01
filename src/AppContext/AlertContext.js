import React, { useContext, useReducer } from "react";

const AlertContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

///////////////TYPES
const SHOW_ALERT = "SHOW_ALERT";
const HIDE_ALERT = "HIDE_ALERT";
////////////////////

//////мб вместо action сделать деструктуризацию {data.type / data.variation }
const alertReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        visible: true,
        text: action.text,
        variation: action.variation,
      };

    case HIDE_ALERT:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, {
    visible: false,
    text: "",
    variation: "",
  });

  const show = async (data) => {
    dispatch({ type: SHOW_ALERT, ...data });
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT });
    }, 3000);
  };

  const hide = () => dispatch({ type: HIDE_ALERT });

  return (
    <AlertContext.Provider
      value={{
        visible: state.visible,
        text: state.text,
        variation: state.variation,
        show,
        hide,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
