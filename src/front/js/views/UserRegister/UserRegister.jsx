import React, { useState } from "react";
import "./UserRegister.css";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../service/user.js";
import Spinner from "../../component/Spinner.jsx";

const UserRegister = () => {
  const role = window.location.pathname.split("/")[2];
  const [newUser, setNewUser] = useState({
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    role_name: role,
  });

  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleClick = (e) => {
    setLoading(true);
    e.preventDefault();
    registerUser(newUser)
      .then((res) => setRedirect(true))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div>
      <form
        onChange={handleChange}
        className="register-form col-md-8 offset-md-2"
      >
        <div className="input-group mb-3">
          <input
            type="text"
            name="first_name"
            className="form-control"
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            name="last_name"
            className="form-control"
            placeholder="Last Name"
            aria-label="Last Name"
            aria-describedby="basic-addon1"
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="number"
            name="phone"
            className="form-control"
            placeholder="Phone number"
            aria-label="Phone number"
            aria-describedby="basic-addon1"
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="email"
            aria-label="email"
            aria-describedby="basic-addon1"
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-register align-self-center align-items-center col-md-8 offset-md-2 mb-3"
          onClick={handleClick}
        >
          Create User
          {loading ? <Spinner /> : null}
          {redirect ? <Redirect to="/login" /> : null}
        </button>
      </form>
    </div>
  );
};

export default UserRegister;
