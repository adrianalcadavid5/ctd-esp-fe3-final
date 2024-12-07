import React, { createContext, useReducer, useEffect } from "react";
import { themeReducer } from "../Reducers/ThemeReducer";

// Estado inicial
const initialState = {
  theme: "light",
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    document.body.className = state.theme;
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ theme: state.theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
