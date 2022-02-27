import React, { useState } from "react";
import "./UserRegister.css";

const UserRegister = () => {
  const [newUser, setNewUser] = useState({
    userName: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
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
  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.lastName);
    console.log(e.target.phone);
    console.log(e.target.email);
    console.log(e.target.password);
    console.log(e.target.value);
  };

  return (
    <form
      onChange={handleChange}
      className="register-form col-md-8 offset-md-2"
    >
      <div className="input-group mb-3">
        <input
          type="text"
          name="Nombre"
          className="form-control"
          placeholder="Nombre"
          aria-label="Nombre"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          name="Apellidos"
          className="form-control"
          placeholder="Apellidos"
          aria-label="Apellidos"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="number"
          name="Teléfono"
          className="form-control"
          placeholder="Teléfono"
          aria-label="Teléfono"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="email"
          name="Correo electrónico"
          className="form-control"
          placeholder="Correo electrónico"
          aria-label="Correo electrónico"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          name="Contraseña"
          className="form-control"
          placeholder="Contraseña"
          aria-label="Password"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-warning col-md-8 offset-md-2"
        onClick={handleClick}
      >
        Crear usuario
      </button>
    </form>
  );
};

export default UserRegister;
