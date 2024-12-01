import React from "react";
import Card from "../Components/Card";
import { useDentistState } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useDentistState();

  return (
    <>
      <h1>Favoritos</h1>
      <div >
        {state.fav?.map((fav)=>(
          <Card
          key={fav.id}
          dentista={fav}/>
        ))}
      </div>
    </>
  );
};

export default Favs;
