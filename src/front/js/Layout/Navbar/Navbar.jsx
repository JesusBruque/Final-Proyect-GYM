import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link } from "react-router-dom";
import { getUser } from "../../service/navbar.js";
import "./navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleClick = () => {
    localStorage.removeItem("token");
    actions.deleteLoggedUser();
    actions.setLogged(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container col-1 align-self-center ps-3">
        <Link to={"/"}><img
          src="https://res.cloudinary.com/duxnadmyt/image/upload/v1650224258/Logo_peque%C3%B1o_lcxlox.png"
          className="logo"
        /></Link>
      </div>
      {store.logged == true ? null : (
        <div className="row col-6 justify-content-start">
          <div className="menu-navbar col">
            <Link
              to="/register/customer"
              className="register col-2 align-self-center"
            >
              Register{" "}
            </Link>
            <Link to="/login" className="login col-4 align-self-center ms-3">
              Login{" "}
            </Link>
          </div>
        </div>
      )}
      <div className="col-11 me-0">
        {store.logged == true ? (
          <div className="avatar-container dropdown justify-content-end align-self-center row me-3">
            <button
              className="navbar-button justify-content-end col-1 me-3 rounded-circle avatar-size"
              type="button"
              id="dropdownMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                backgroundImage: `url(${store.loggedUser.avatar})`,
              }}
            ></button>
            <ul
              className="dropdown-menu dropdown-menu-end col-3 "
              aria-labelledby="dropdownMenu"
            >
              <p className="text-muted p-2 mb-0">{`Sign in with ${store.loggedUser.first_name} ${store.loggedUser.last_name}`}</p>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/" onClick={handleClick}>
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};
