import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./login.css";
import { loginUser } from "../../service/login.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState("");

  const userLogin = async () => {
    try {
      const userCredentials = {
        email: email,
        password: password,
      };
      const response = await loginUser(userCredentials);
      const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        setLogged(true);
      } else if (response.status === 404) {
        setError("Invalid credentials. Try again");
      } else if (response.status === 500) {
        setError("Internal server error. Try later");
      }
    } catch (err) {
      console.log("Login error: ", err);
    }
  };

  return logged ? (
    <Redirect to="/" />
  ) : (
    <div className="login-box d-flex flex-column mt-3 mb-3 p-3 col-10 col-md-4 col-xs-6">
      <h1>Login</h1>
      <p>Login and start managing your health!</p>
      <input
        type="text"
        className="login-input p-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value.toLowerCase())}
      />
      <input
        type="password"
        className="login-input p-3 mb-2 mt-3"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="d-flex justify-content-between mt-2">
        <div className="d-flex">
          <input
            type="checkbox"
            className="login-checkbox form-check-input ms-2"
          />
          <label className="ms-2">Remember me</label>
        </div>
        <Link to="/" className="login-link">
          Forgot password?
        </Link>
      </div>
      <button
        type="submit"
        className="login-button mb-2 mt-3"
        onClick={() => {
          userLogin();
        }}
      >
        LET'S GO!
      </button>
      <div className={`text-danger m-2 mt-3 w-100 ${!error ? "d-none" : ""}`}>
        {error}
      </div>
    </div>
  );
};

export default Login;
