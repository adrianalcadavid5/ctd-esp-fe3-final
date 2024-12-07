import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Message from "./Message";

const Form = ({ setMessage }) => {
  const [user, setUser] = useState({ nombre: "", email: "" });
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const isValidName = (name) => /^[a-zA-ZÀ-ÿ\s]{5,}$/.test(name);

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (isValidName(user.nombre) && emailRegex.test(user.email)) {
      setShow(true);
      setError(false);
      setMessage("");

      setTimeout(() => {
        setShow(false);
        setUser({ nombre: "", email: "" });
        navigate("/");
      }, 3000);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {show ? (
        <Message nombre={user.nombre} email={user.email} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            value={user.nombre}
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
          />
          <button type="submit">Enviar</button>
          {error && (
            <h4 style={{ color: "red" }}>
              Por favor, verifica que tu nombre tenga al menos 5 caracteres y no
              incluya números, y que el email sea válido.
            </h4>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;
