import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducers/reducer";

const DentistStates = createContext();

const initialState = {
  fav: (() => {
    try {
      const storedFavs = localStorage.getItem("favs");
      return storedFavs ? JSON.parse(storedFavs) : [];
    } catch (error) {
      console.warn("Error al parsear favoritos desde localStorage:", error);
      return [];
    }
  })(),
  data: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log("Datos recibidos de la API:", res.data);
        dispatch({ type: "GET_DENTISTS", payload: res.data });
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.fav));
  }, [state.fav]);
  return (
    <div>
      <DentistStates.Provider value={{ state, dispatch }}>
        {children}
      </DentistStates.Provider>
    </div>
  );
};
export default Context;

export const useDentistState = () => useContext(DentistStates);
