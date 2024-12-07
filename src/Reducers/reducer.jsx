export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, data: action.payload };
    case "ADD_FAVS":
      if (state.fav.some((fav) => fav.id === action.payload.id)) {
        return state;
      }
      return { ...state, fav: [...state.fav, action.payload] };
    case "REMOVE_FAVS":
      return {
        ...state,
        fav: state.fav.filter((fav) => fav.id !== action.payload.id),
      };
    default:
      throw new Error("Acción no existente");
  }
};
