import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link } from "react-router-dom";
import { getUser } from "../../service/adminpannelmenu.js";
import "./Admin-Pannel-Styles/Admin-Pannel-Menu.css";

const AdminPannelMenu = () => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUser()
      .then((res) => res.json())
      .then((data) => {
        actions.setLoggedUser(data);
        actions.setLogged(true);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleClick = (e) => {
    localStorage.removeItem("token");
    actions.deleteLoggedUser();
    actions.setLogged(false);
  };

  return (
    <div className="container-fluid col-md-12">
      <div className="row justify-content-center align-items-center">
        <Link
          className="customer-dashboard-button d-flex flex-column m-3 p-3"
          to="/admin/customers"
        >
          <i className="fas fa-user-friends button-icon"></i>
          <span className="button-text mt-3">Customers</span>
        </Link>
        <Link
          className="customer-dashboard-button d-flex flex-column m-3 p-3"
          to="/admin/trainers"
        >
          <i className="fas fa-dumbbell button-icon"></i>
          <span className="button-text mt-3">Trainers</span>
        </Link>
        <Link
          className="customer-dashboard-button d-flex flex-column m-3 p-3"
          to="/admin/physios"
        >
          <i className="fas fa-spa button-icon"></i>
          <span className="button-text mt-3">Physios</span>
        </Link>
      </div>
      <div className="row justify-content-center align-items-center">

        <Link
          className="customer-dashboard-button d-flex flex-column m-3 p-3"
          to="/admin/register"
        >
          <i className="fas fa-user-edit button-icon"></i>
          <span className="button-text mt-3">Worker Register</span>
        </Link>

        <Link
          className="customer-dashboard-button d-flex flex-column m-3 p-3"
          to="/message/worker"
        >
          <i className="far fa-comment button-icon"></i>
          <span className="button-text mt-3">Messages</span>
        </Link>
        <Link
          className="customer-dashboard-button d-flex flex-column m-3 p-3"
          to="/appointments"
        >
          <i className="fas fa-calendar-check button-icon"></i>
          <span className="button-text mt-3">Appointments</span>
        </Link>
      </div>
      <div className="row justify-content-center align-items-center">
        <Link
          className="customer-dashboard-button d-flex flex-column m-3 p-3"
          to="/"
        >
          <i className="fas fa-users button-icon"></i>
          <span className="button-text mt-3">Group Classes</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminPannelMenu;
