import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../service/navbar.js";
import "./navbar.css";

export const Navbar = () => {
  const [user, setUser] = useState([]);
  const [login, setLoging] = useState(false);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, [logged]);

  const getAllUsers = () => {
    getUser()
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        if (localStorage.length > 0) {
          setLoging(true);
        }
      })
      .catch((err) => console.log(err))
      .finally(setLogged(true));
  };

  const handleClick = () => {
    localStorage.removeItem("token");
    setLoging(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container col-1 align-self-center ps-3">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_nike_principal.jpg"
        />
      </div>
      {login == true ? null : (
        <div className="row col-6 justify-content-start">
          <div className="menu-navbar col">
            <Link
              to="/register/customer"
              className="register col-2 align-self-center ms-3"
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
        {login == true ? (
          <div className="avatar-container dropdown justify-content-end align-self-center row me-3">
            <button
              className="navbar-button justify-content-end col-1 me-3 rounded-circle avatar-size"
              type="button"
              id="dropdownMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                backgroundImage: `url(${user.avatar})`,
              }}
            ></button>
            <ul
              className="dropdown-menu dropdown-menu-end col-3 "
              aria-labelledby="dropdownMenu"
            >
              <p className="text-muted p-2 mb-0">{`Sign in with ${user.first_name} ${user.last_name}`}</p>
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
