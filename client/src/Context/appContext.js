import React, { useContext, useReducer, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const userJson = localStorage.getItem("user");

const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  user: userJson ? JSON.parse(userJson) : null,
};

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setState({
      ...state,
      user,
    });
  };

  const removeUser = () => {
    setState({
      ...state,
      user: null,
    });
    localStorage.removeItem("user");
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setUser,
        removeUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
