import React, { useState } from "react";
import CardStyles from "../Styles/Card.module.css";
import { useDentistState } from "../Context/Context";
import { Link, useLocation } from "react-router-dom";



const Card = ({ dentista }) => {
  const {name, username, id} = dentista;
  const {state, dispatch} = useDentistState();
  const location = useLocation();

  //verifico si la card elegida ya esta en favoritos para no duplicarla
  const isFav = state.fav.some((fav)=> fav.id === id);

  const handleAddToFav = () => {
    if (!isFav) {
      dispatch({
        type: "ADD_FAVS", payload: dentista, //agrega el destista completo
      });
    }else {
      alert("El odontologo elegido ya esta en tu lista de favoritos.");
    }
  };

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

            <button onClick={handleAddToFav}>Agregar a favoritos</button>

    )}
</div>
);
};

export default Card;

