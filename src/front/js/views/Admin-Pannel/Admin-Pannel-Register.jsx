import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Admin-Pannel-Styles/Admin-Pannel-Register.css";

const AdminPannelRegister = () => {
  console.log(window.location.host);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <i className="fas fa-user-edit"></i>
            </th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <i className="fas fa-dumbbell"></i>
              Entrenadores
            </th>
            <td>{`${window.location}/register/trainer`}</td>
          </tr>
          <tr>
            <th scope="row">
              <i className="fas fa-spa"></i>
              Fisios
            </th>
            <td>{`${window.location}/register/physio`}</td>
          </tr>
        </tbody>
      </table>
      <div
        className="btn-group col-md-8 offset-md-2"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" className="btn admin-menu-button mt-3">
          <Link to="/register/trainer">
            <i className="fas fa-dumbbell"></i>Entrenadores
          </Link>
        </button>
        <button type="button" className="btn admin-menu-button mt-3">
          <Link to="/register/physio">
            <i className="fas fa-spa"></i>Fisioterapéutas
          </Link>
        </button>
      </div>
      <button type="button" className="btn btn-exit col-md-8 offset-md-2 mt-3">
        <Link to="/admin/menu">
          <i className="fas fa-arrow-alt-circle-left"></i>Atrás
        </Link>
      </button>
    </div>
  );
};

export default AdminPannelRegister;
