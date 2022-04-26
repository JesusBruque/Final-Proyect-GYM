import React, { useState } from "react";
import "./UserRegister.css";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../service/user.js";
import Spinner from "../../component/Spinner.jsx";
import { ToastContainer, toast, Flip } from 'react-toastify';

const UserRegister = () => {

  const role = window.location.pathname.split("/")[2];
  const initialState = {
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    role_name: role,
  }
  const [newUser, setNewUser] = useState(initialState);
  const [error, setError] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");

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

    if (newUser.password !== repeatPassword) {
      errorHandler.password = "Passwords must be the same";
    }

    if (
      errorHandler.email === "" &&
      errorHandler.first_name === "" &&
      errorHandler.last_name === "" &&
      errorHandler.phone === ""
    ) {
      registerUser(newUser)
        .catch((error) => console.log(error))
        .finally(() => {

          toast.success('User register succesfully', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            setRedirect(true);
            setLoading(false)
          }, 4000)

        });
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
              <div className="d-flex justify-content-between">
                <label className="d-inline-flex fs-5 text mt-3">First Name </label>
                {error.first_name != "" ? (
                  <div className="text-danger error-message mt-1 align-self-end">
                    {error.first_name}
                  </div>
                ) : null}
              </div>
              <input
                type="text"
                name="first_name"
                className="register-input p-3 mt-2"
                placeholder="Insert your first name"
                onChange={handleChange}
              />
              <div className="d-flex justify-content-between">
                <label className="d-inline-flex fs-5 text mt-3">Last Name </label>
                {error.last_name != "" ? (
                  <div className="text-danger error-message mt-1 align-self-end">
                    {error.last_name}
                  </div>
                ) : null}
              </div>
              <input
                type="text"
                name="last_name"
                className="register-input p-3 mt-2"
                placeholder="Insert your last name"
                aria-label="Last Name"
                aria-describedby="basic-addon1"
                onChange={handleChange}
              />
              <div className="d-flex justify-content-between">
                <label className="d-inline-flex fs-5 text mt-3"> Phone number </label>
                {error.phone != "" ? (
                  <div className="text-danger error-message mt-1 align-self-end">
                    {error.phone}
                  </div>
                ) : null}
              </div>
              <input
                type="text"
                name="phone"
                className="register-input p-3 mt-2"
                placeholder="Insert your phone number"
                aria-label="Phone number"
                aria-describedby="basic-addon1"
                onChange={handleChange}
              />
              <div className="d-flex justify-content-between">
                <label className="d-inline-flex fs-5 text mt-3">Email </label>
                {error.email != "" ? (
                  <div className="text-danger error-message mt-1 align-self-end">
                    {error.email}
                  </div>
                ) : null}
              </div>
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
                    onChange={(e) => { setRepeatPassword(e.target.value) }}
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
              <ToastContainer transition={Flip} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
