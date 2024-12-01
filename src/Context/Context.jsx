import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducers/reducer";

const DentistStates = createContext();

const initialState = {
  fav: [],
  data: []
}


const Context = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log("Datos recibidos de la API:", res.data); // Verifica aquí los datos
        dispatch({ type: "GET_DENTISTS", payload: res.data });
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  return (
    <div>
      <DentistStates.Provider value={{state, dispatch}}>
        {children}
      </DentistStates.Provider>
    </div>
  );
};
export default Context;

export const useDentistState = () => useContext(DentistStates);
