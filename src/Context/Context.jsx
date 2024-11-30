import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducers/reducer";

const DentistStates = createContext();

const initialState = {
  fav: [],
  data: []
}


const Context = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(()=>{
    axios(url)
    .then((res)=>{
      console.log(res.data);
      dispatch({type: "GET_DENTISTS", payload: res.data})

    })
  }, []);

  return (
    <DentistStates.Provider value={{state, dispatch}}>
      {children}
    </DentistStates.Provider>
  );
};
export default Context;
