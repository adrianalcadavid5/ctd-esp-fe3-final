import axios from "axios";
import { createContext, useContext, useEffect, useReducer} from "react";
import { reducer } from "../Reducers/reducer";

const DentistStates = createContext();

//inicalizamos los datos seguros desde LocalStorage
const initialState = {
  fav: (() => {
    try {
      const storedFavs = localStorage.getItem("favs");
      return storedFavs ? JSON.parse(storedFavs) : []; // Manejo seguro de localStorage
    } catch (error) {
      console.warn("Error al parsear favoritos desde localStorage:", error);
      return [];
    }
  })(),
  data: [], // Inicialización de los datos de la API
};


const Context = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  
  const url = "https://jsonplaceholder.typicode.com/users";
  
  //Para obtener los datos de la api.
  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log("Datos recibidos de la API:", res.data);
        dispatch({ type: "GET_DENTISTS", payload: res.data });
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  //Para actualizar el localStorage cada vez que cambie el estado de favoritos

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.fav));
  }, [state.fav]); // Observa `state.fav` para guardar favoritos

  return (
    <div>
      <DentistStates.Provider value={{state, dispatch}}>
        {children}
      </DentistStates.Provider>
    </div>
  );
};
export default Context;

// Hook para acceder al contexto
export const useDentistState = () => useContext(DentistStates);