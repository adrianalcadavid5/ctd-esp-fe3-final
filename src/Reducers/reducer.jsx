export const reducer = (state, action) => {
    switch(action.type){
      case "GET_DENTISTS":
        return {...state, data: action.payload};//con ... copio lo que trae el estado : paso lo que deseo modificar que lo traigo del dispatch
      case "ADD_FAVS":
        //verifico si el favorito ya ha sido agregado a la lista
        if (state.fav.some((fav) => fav.id === action.payload.id)) {
          return state; // No agrega duplicados
        }
        return {...state, fav: [...state.fav, action.payload]};//que me traiga el estado, luego a cart,,, con el state traigo a cart y que me traiga lo que tenia y luego lo nuevo
      default:
        throw new Error("Acción no existente");
    }
  
  };
  //indicamos que tipo de accion voy a realizar dentro de un switch
