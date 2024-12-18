import React, { useState } from "react";
import CardStyles from "../Styles/Card.module.css";
import { useDentistState } from "../Context/Context";
import { Link, useLocation } from "react-router-dom";

const Card = ({ dentista }) => {
  const { name, username, id } = dentista;
  const { state, dispatch } = useDentistState();
  const location = useLocation();

  const isFav = state.fav.some((fav) => fav.id === id);

  const handleAddToFav = () => {
    if (!isFav) {
      dispatch({
        type: "ADD_FAVS",
        payload: dentista,
      });
    } else {
      alert("El odontologo elegido ya esta en tu lista de favoritos.");
    }
  };

  const handleRemoveFromFav = () => {
    dispatch({
      type: "REMOVE_FAVS",
      payload: dentista,
    });
  };

  return (
    <div className={CardStyles.cardContainer}>
      <Link to={`/detail/${id}`}>
        <img src="/images/doctor.jpg" alt="dentista" />
        <h2>{name}</h2>
        <h2>{username}</h2>
      </Link>
      {location.pathname === "/favoritos" ? (
        <button onClick={handleRemoveFromFav}>Eliminar de favoritos</button>
      ) : (
        <button onClick={handleAddToFav}>
          {" "}
          {isFav ? "Ya esta en favoritos" : "Agregar a favoritos"}
        </button>
      )}
    </div>
  );
};

export default Card;
