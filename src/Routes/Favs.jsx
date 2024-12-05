import React from "react";
import Card from "../Components/Card";
import { useDentistState } from "../Context/Context";


const Favs = () => {
  const {state} = useDentistState();

  return (
    <>
      <h1>Favoritos</h1>
      <div>
        {state.fav.length === 0 ? (
          <p>No tienes odontologos en tu lista de favoritos aún.</p>
        ) : (
          state.fav.map((fav) => (
            <Card key={fav.id} dentista={fav} />
          ))
        )}
      </div>
    </>
  );
};

export default Favs;
