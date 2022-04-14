import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./login.css";
import { loginUser } from "../../service/login.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState("");
  const [route, setRoute] = useState("/");

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
        const role = data.rol.role.role_name;
        if (role == "admin") {
          setRoute("/admin/menu");
        } else if (role == "customer") {
          setRoute("/dashboard");
        } else {
          setRoute("/workerview");
        }
        setLogged(true);
      } else if (response.status === 404 || response.status === 401) {
        setError("Invalid credentials. Try again");
      } else if (response.status === 500) {
        setError("Internal server error. Try later");
      }
    } catch (err) {
      console.log("Login error: ", err);
    }
  };

  const handleIntro = (e) => {
    if (e.keyCode == "13") {
      userLogin();
    }
  };

  return logged ? (
    <Redirect to={route} />
  ) : (
    <div className="login-box d-flex flex-column mt-3 mb-3 p-3 col-10 col-md-4 col-xs-6">
      <h1>Login</h1>
      <p>Login and start managing your health!</p>
      <label className="d-inline-flex mb-2 fs-5 text">Email</label>
      <input
        type="text"
        className="login-input p-3"
        placeholder="Insert your email"
        onChange={(e) => setEmail(e.target.value.toLowerCase())}
      />
      <label className="d-inline-flex fs-5 text mt-3">Password</label>
      <input
        type="password"
        className="login-input p-3 mb-2 mt-2"
        placeholder="Insert your password"
        onKeyDown={handleIntro}
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
