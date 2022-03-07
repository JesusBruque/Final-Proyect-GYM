import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Admin-Pannel-Styles/Admin-Pannel-Menu.css";

const AdminPannelMenu = () => {
  return (
    <div>
      <div className="btn-group-vertical col-md-8 offset-md-2">
        <button type="button" className="btn admin-menu-button b1">
          <Link to="/admin/customers">
            <i className="fas fa-user-friends"></i>Clientes
          </Link>
        </button>
        <button type="button" className="btn admin-menu-button b2">
          <Link to="/admin/trainers">
            <i className="fas fa-dumbbell"></i>Entrenadores
          </Link>
        </button>
        <button type="button" className="btn admin-menu-button b3">
          <Link to="/admin/physios">
            <i className="fas fa-spa"></i>Fisioterapéutas
          </Link>
        </button>
        <button type="button" className="btn admin-menu-button b3">
          <Link to="/admin/notifications">
            <i className="far fa-comment"></i>Notificaciones
          </Link>
        </button>
        <button type="button" className="btn admin-menu-button b5">
          <Link to="/admin/timetable">
            <i className="fas fa-calendar-check"></i>Horarios
          </Link>
        </button>
      </div>

      <button type="button" className="btn btn-exit col-md-8 offset-md-2">
        <Link to="/">
          <i className="fas fa-door-open"></i>Salir
        </Link>
      </button>
    </div>
  );
};

export default AdminPannelMenu;
