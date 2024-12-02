import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"
import { ThemeContext } from '../Context/ThemeContext';


const Navbar = () => {

  const {theme, dispatch} = useContext(ThemeContext);

  const toggleTheme = () => {
    dispatch ({type: "TOGGLE_THEME"});
  };

  return (
    <nav className={`navbar ${theme}`}>
      <Link to="/"><h4>Home</h4></Link>
      <Link to="/envio"><h4>Contactanos</h4></Link>
      <Link to="/favoritos"><h4>Favoritos</h4></Link>
      <button onClick={toggleTheme}>
          Cambiar a {theme === "light" ? "Oscuro" : "Claro"}
      </button>
    </nav>
  );
};

export default Navbar;