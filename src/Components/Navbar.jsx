import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {


  return (
    <nav className='navbar'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/"><h4>Home</h4></Link>
      <Link to="/envio"><h4>Contactanos</h4></Link>
      <Link to="/favoritos"><h4>Favoritos</h4></Link>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar;