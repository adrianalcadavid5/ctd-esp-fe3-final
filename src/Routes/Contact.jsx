import React, { useState } from "react";
import Form from "../Components/Form";
import ContactStyles from "../Styles/Contact.module.css";

const Contact = () => {
  const [message, setMessage] = useState("");

  return (
    <div className={ContactStyles.cardContainer}>
      <h2>¿Deseas más información?</h2>

      <p>
        {message ||
          "Envíanos tus consultas y nos pondremos en contacto contigo!"}
      </p>

      <Form setMessage={setMessage} />
    </div>
  );
};

export default Contact;
