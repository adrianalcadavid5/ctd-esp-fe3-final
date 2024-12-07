export const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

//No aplique cambio del theme al footer para que esteticamente se viera bonito con el bonton Cambiar del theme los conserve del mismo color
//No se si esto es posible, solo lo vi bonito.
