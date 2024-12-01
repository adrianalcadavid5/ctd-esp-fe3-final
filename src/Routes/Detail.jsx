import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailStyles from "../Styles/Detail.module.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const [dentista, setDentista] = useState({})
  const {id} = useParams();
  console.log(id); //para ver la información que me trae.

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(()=>{
    axios(url).then((res)=>{
      console.log(res.data);
      setDentista(res.data)
    })
  },[]);

  return (
    <div className={DetailStyles.cardContainer}>
      <h1>Información del odontologo seleccionado: </h1>
      <img src="/images/doctor.jpg" alt="" />
      <h3>Nombre: {dentista.name}</h3>
      <h3>email: {dentista.email}</h3>
      <h3>Telefono de contacto: {dentista.phone}</h3>
      <h3>{dentista.website}</h3>
    </div>
  )
}

export default Detail