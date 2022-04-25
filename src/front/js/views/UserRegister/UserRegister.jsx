import React, { useState } from "react";
import "./UserRegister.css";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../service/user.js";
import Spinner from "../../component/Spinner.jsx";

const UserRegister = () => {
  const initialState = {
    password: "",
    repeat_password: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    role_name: role,
  }

  const role = window.location.pathname.split("/")[2];
  const [newUser, setNewUser] = useState(initialState);
  const [error, setError] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleClick = (e) => {
    setLoading(true);
    e.preventDefault();

    const errorHandler = { ...initialState };

    if (newUser.first_name.length === 0) {
      errorHandler.first_name = "Can't be empty";
    }

    if (newUser.last_name.length === 0) {
      errorHandler.last_name = "Can't be empty";
    }

    if (newUser.phone.length === 0) {
      errorHandler.phone = "Can't be empty";
    } else if (newUser.phone.length !== 9) {
      errorHandler.phone = "Invalid Phone Number";
    }

    const regex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (newUser.email.length === 0) {
      errorHandler.email = "Can't be empty";
    } else if (!regex.test(newUser.email)) {
      errorHandler.email = "Invalid Format Email";
    }

    if (newUser.password.length === 0) {
      errorHandler.password = "Password can't be empty";
    }

    if (newUser.password !== newUser.repeat_password) {
      errorHandler.password = "Passwords must be the same";
    }

    if (
      errorHandler.email === "" &&
      errorHandler.first_name === "" &&
      errorHandler.last_name === "" &&
      errorHandler.phone === ""
    ) {
      registerUser(newUser)
        .then((res) => setRedirect(true))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      setError(errorHandler);
    }
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
              <label className="d-inline-flex fs-5 text mt-3">First Name {error.first_name != "" ? (
                <p className="text-danger error-message mb-0">
                  {error.first_name}
                </p>
              ) : null}</label>
              <input
                type="text"
                name="first_name"
                className="register-input p-3 mt-2"
                placeholder="Insert your first name"
                onChange={handleChange}
              />

              <label className="d-inline-flex fs-5 text mt-3">Last Name {error.last_name != "" ? (
                <p className="text-danger error-message mb-0">
                  {error.last_name}
                </p>
              ) : null}</label>
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
                Phone number {error.phone != "" ? (
                  <p className="text-danger error-message mb-0">
                    {error.phone}
                  </p>
                ) : null}
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

              <label className="d-inline-flex fs-5 text mt-3">Email {error.email != "" ? (
                <p className="text-danger error-message mb-0">
                  {error.email}
                </p>
              ) : null}</label>
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
                    name="repeat_password"
                    className="register-input p-3 mt-2 ms-2"
                    placeholder="Confirm password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                  />

                </div>
              </div>
              {error.password != "" ? (
                <p className="text-danger error-message mb-0">
                  {error.password}
                </p>
              ) : null}
              <button
                type="submit"
                className="register-button mt-4"
                onClick={handleClick}
              >
                Sign up!
                {loading ? <Spinner /> : null}
                {redirect === true ? <Redirect to="/login" /> : null}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
