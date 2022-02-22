import React, { useState } from "react";

const UserRegister = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({});

  const handleClick = () => {
    setUsers([...users, newUser]);
    fetch("", {
      method: "POST",
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        setNewUser(newUser);
        console.log(data);
      });
  };

  return (
    <form>
      <div className="input-group mb-3">
        <label className="form-label">Nombre</label>
        <input type="text" placeholder="Nombre" aria-label="Nombre"></input>
        <label className="form-label">Apellidos</label>
        <input
          type="text"
          placeholder="Apellidos"
          aria-label="Apellidos"
        ></input>
        <label className="form-label">Correo electrónico</label>
        <input
          type="email"
          placeholder="Correo electrónico"
          aria-label="Correo Electrónico"
        ></input>
        <label className="form-label">Teléfono</label>
        <input
          type="number"
          placeholder="Teléfono"
          aria-label="Teléfono"
        ></input>
        <label className="form-label">Contraseña</label>
        <input type="password" placeholder="" aria-label="Contraseña"></input>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>
        Crear usuario
      </button>
    </form>
  );
};

export default UserRegister;
