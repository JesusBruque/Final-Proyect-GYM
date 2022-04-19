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
    <div className="con d-flex justify-content-center align-items-center">
      <div className="register-view">
        <div className="row">
          <div className="col-6 photo-register"></div>
          <div className="col-6 inputs-register">
            <form
              onChange={handleChange}
              className="register-form col-md-8 offset-md-2"
            >
              <label className="d-inline-flex fs-5 text mt-3">First Name</label>
              <input
                type="text"
                name="first_name"
                className="register-input p-3 mt-2"
                placeholder="Insert your first name"
                onChange={handleChange}
              />
              <label className="d-inline-flex fs-5 text mt-3">Last Name</label>
              <input
                type="text"
                name="last_name"
                className="register-input p-3 mt-2"
                placeholder="Insert your last name"
                aria-label="Last Name"
                aria-describedby="basic-addon1"
                onChange={handleChange}
              />
              <label className="d-inline-flex fs-5 text mt-3">
                Phone number
              </label>
              <input
                type="text"
                name="phone"
                className="register-input p-3 mt-2"
                placeholder="Insert your phone number"
                aria-label="Phone number"
                aria-describedby="basic-addon1"
                onChange={handleChange}
              />
              <label className="d-inline-flex fs-5 text mt-3">Email</label>
              <input
                type="text"
                name="email"
                className="register-input p-3 mt-2"
                placeholder="Insert your email"
                aria-label="email"
                aria-describedby="basic-addon1"
                onChange={handleChange}
              />
              <div className="d-flex me-0">
                <div className="d-flex flex-column">
                  <label className="d-inline-flex fs-5 text mt-3">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="register-input p-3 mt-2 me-2"
                    placeholder="Insert your password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column ">
                  <label className="d-inline-flex fs-5 text mt-3 ms-2">
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="register-input p-3 mt-2 ms-2"
                    placeholder="Confirm password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="register-button mt-4"
                onClick={handleClick}
              >
                Sign up!
                {loading ? <Spinner /> : null}
                {redirect ? <Redirect to="/login" /> : null}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
