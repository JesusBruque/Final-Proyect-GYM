import React, { useState } from "react";
import "./WorkerView.css";
import { Link, Redirect } from "react-router-dom";
// import { registerUser } from "../../service/user.js";
import Spinner from "../../component/Spinner.jsx";

const WorkerView = () => {
  return (
    <div className="container col-6 justify-content-md-center">
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
