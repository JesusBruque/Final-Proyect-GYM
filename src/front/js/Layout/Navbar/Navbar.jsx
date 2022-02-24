import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <navbar>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link to="/">
                <span className="navbar-brand mb-0 h1">React Boilerplate</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/demo">
                <button className="btn btn-primary">
                  Check the Context in action
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </navbar>
  );
};
