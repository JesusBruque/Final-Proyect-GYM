import React, { useState } from "react";
import "./WorkerView.css";
import { Link, Redirect } from "react-router-dom";
// import { registerUser } from "../../service/user.js";
import Spinner from "../../component/Spinner.jsx";

const WorkerView = () => {
  const handleClick = () => {
    localStorage.removeItem("token");
  };
  return (
    <div className="container fluid col-5">
      <div className="row">
        <div className="btn worker">
          <i className="far fa-calendar-alt"></i>
          <br />
          Citas
        </div>
        <div className="btn worker">
          <i className="far fa-comment"></i>
          <br />
          Mensajes
        </div>
      </div>
      <div className="row">
        <div className="btn worker">
          <Link to="/account">
            <i className="far fa-file-alt"></i>
            <br />
            Datos Personales
          </Link>
        </div>
        <div className="btn worker">
          <Link to="/account">
            <i className="far fa-file-alt"></i>
            <br />
            Ficha del cliente
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="btn fluid col-5 exit" onClick={handleClick}>
          <Link to="/">
            <i className="fas fa-door-open"></i>
            <br />
            Salir
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WorkerView;
