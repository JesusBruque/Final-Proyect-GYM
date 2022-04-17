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
  console.log(window.location.host);
  return (
    <div className="container fluid justify-content-center col-md-6 offset-md-3">
      <div className="row align-self-center align-items-center">
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
      </div>
      <div className="row align-self-center align-items-center">
        <Link
          className="customer-dashboard-button d-flex flex-column m-3 p-3"
          to="/admin/physios"
        >
          <i className="fas fa-spa button-icon"></i>
          <span className="button-text mt-3">Physios</span>
        </Link>
        <Link
          className="customer-dashboard-button d-flex flex-column m-3 p-3"
          to="/admin/register"
        >
          <i className="fas fa-user-edit button-icon"></i>
          <span className="button-text mt-3">Worker Register</span>
        </Link>
      </div>
      <div className="row align-self-center align-items-center">
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
      <div className="row align-self-center align-items-center">
        <Link
          className="customer-dashboard-button d-flex flex-column m-3 p-3"
          to="/"
        >
          <i className="far fa-people-group button-icon"></i>
          <span className="button-text mt-3">Group Classes</span>
        </Link>
      </div>
    </div>
    // <div>
    //   <div className="btn-group-vertical col-md-8 offset-md-2">
    //     <button
    //       href="/admin/customers"
    //       className="btn admin-menu-button b1 mt-3"
    //     >
    //       <Link to="/admin/customers">
    //         <i className="fas fa-user-friends"></i>Customers
    //       </Link>
    //     </button>
    //     <button type="button" className="btn admin-menu-button b2 mt-3">
    //       <Link to="/admin/trainers">
    //         <i className="fas fa-dumbbell"></i>Trainers
    //       </Link>
    //     </button>
    //     <button type="button" className="btn admin-menu-button b3 mt-3">
    //       <Link to="/admin/physios">
    //         <i className="fas fa-spa"></i>Physios
    //       </Link>
    //     </button>
    //     <button type="button" className="btn admin-menu-button b4 mt-3">
    //       <Link to="/admin/register">
    //         <i className="fas fa-user-edit"></i>Worker Register
    //       </Link>
    //     </button>
    //     <button type="button" className="btn admin-menu-button b4 mt-3">
    //       <Link to="/message/worker">
    //         <i className="far fa-comment"></i>Messages
    //       </Link>
    //     </button>
    //     <button type="button" className="btn admin-menu-button b5 mt-3">
    //       <Link to="/appointments">
    //         <i className="fas fa-calendar-check"></i>Appointments
    //       </Link>
    //     </button>
    //   </div>

    //   <button
    //     type="button"
    //     className="btn btn-exit col-md-8 offset-md-2 mt-3"
    //     onClick={handleClick}
    //   >
    //     <Link to="/">
    //       <i className="fas fa-door-open"></i>Log out
    //     </Link>
    //   </button>
    // </div>
  );
};

export default AdminPannelMenu;
