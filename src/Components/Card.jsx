import React, { useState } from "react";
import CardStyles from "../Styles/Card.module.css";
import { useDentistState } from "../Context/Context";
import { Link, useLocation } from "react-router-dom";



const Card = ({ dentista }) => {
  const {name, username, id} = dentista;
  const {dispatch} = useDentistState();
  const [fav, setFavorito] = useState(0)
  const location = useLocation();

  return (
    <div className={CardStyles.cardContainer}>
      <Link  to={`/detail/${id}`}>
      <img src="/images/doctor.jpg" alt="dentista" />
      <h2>{name}</h2>
      <h2>{username}</h2>
      </Link>
      {location.pathname === "/favoritos" ? (
        <h2>Odontologos Favoritos : </h2>
      ) : (
        <>
            <button
                
                onClick={() =>
                    dispatch({
                        type: "ADD_FAVS",
                        payload: { ...dentista, fav: fav },
                    })
                }
            >
                Agregar a favoritos
            </button>
        </>
    )}
</div>
);
};

export default Card;

/*
const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  */
