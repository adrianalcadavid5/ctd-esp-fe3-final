import React from 'react'
import Card from '../Components/Card';
import { useDentistState } from '../Context/Context';
import HomeStyles from "../Styles/Home.module.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useDentistState();
  
  return (
    <>

      <h1>Especialistas en odontologia</h1>
      <div className={HomeStyles.gridContainer}>
        {state.data && state.data.length > 0 ? (
          state.data.map((dentista) => (
            <Card key={dentista.id} dentista={dentista} />
          ))
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>

    </>
  )
}

export default Home;


