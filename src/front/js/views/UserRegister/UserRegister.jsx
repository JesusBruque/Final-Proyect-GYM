import React, { useState } from "react";
import "./UserRegister.css";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../service/user.js";
import Spinner from "../../component/Spinner.jsx";

const UserRegister = () => {
  const role = window.location.pathname.split("/")[2];
  const [newUser, setNewUser] = useState({
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    role_name: role,
  });

  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleClick = (e) => {
    setLoading(true);
    e.preventDefault();
    registerUser(newUser)
      .then((res) => setRedirect(true))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <form
      onChange={handleChange}
      className="register-form col-md-8 offset-md-2"
    >
      <div className="input-group mb-3">
        <input
          type="text"
          name="first_name"
          className="form-control"
          placeholder="Nombre"
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          name="last_name"
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
          name="phone"
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
          name="email"
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
          name="password"
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
      {loading ? <Spinner /> : null}
      {redirect ? <Redirect to="/login" /> : null}
    </form>
  );
};

export default UserRegister;
