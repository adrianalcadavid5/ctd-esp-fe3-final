import React, {useState} from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [message, setMessage] = useState(''); // Estado para el mensaje de contacto

  return (
    <div>
      <h2>¿Deseas más información?</h2>
      {/* Si hay un mensaje en el estado, se muestra; de lo contrario, mostramos el mensaje predeterminado */}
      <p>{message || 'Envíanos tus consultas y nos pondremos en contacto contigo!'}</p>
      {/* Pasamos setMessage al componente Form para que pueda actualizar el mensaje */}
      <Form setMessage={setMessage} />
    </div>
  );
}

export default Contact