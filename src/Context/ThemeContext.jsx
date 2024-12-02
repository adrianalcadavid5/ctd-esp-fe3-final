import React, { createContext, useReducer, useEffect } from "react";

// Estado inicial
const initialState = {
  theme: 'light',
};

// Reducer para manejar el cambio de tema
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

// Crear el contexto
export const ThemeContext = createContext();

// Proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Actualiza la clase del body cada vez que cambia el tema
  useEffect(() => {
    document.body.className = state.theme; // Agrega la clase 'light' o 'dark' al body
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ theme: state.theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};