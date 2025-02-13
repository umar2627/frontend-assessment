import React, { createContext, useReducer, useContext, ReactNode } from "react";

const initialState = {
  user: null,
  mode: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

const GlobalStateContext = createContext([initialState, () => initialState]);

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
