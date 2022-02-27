import React, { useState } from "react";
import "./UserRegister.css";

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
    <form className="register-form col-md-4 offset-md-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <button type="submit" className="btn btn-success" onClick={handleClick}>
        Crear usuario
      </button>
    </form>
  );
};

export default UserRegister;
