import React, { Component } from "react";
import "./footer.css";

export const Footer = () => (
  <footer className="footer text-center">
    <div className="container p-4 pb-0 mb-0">
      <section className="mb-2">
        <a className="icons btn btn-primary btn-floating m-1" href="#!" role="button">
          <i className="fab fa-facebook-f" />
        </a>

        <a className="icons btn btn-primary btn-floating m-1" href="#!" role="button">
          <i className="fab fa-twitter" />
        </a>

        <a className="icons btn btn-primary btn-floating m-1" href="#!" role="button">
          <i className="fab fa-instagram" />
        </a>
      </section>
    </div>

    <a className="copyright text-center mb-0">
      © 2022 Copyright: Train in Touch
    </a>

  </footer>
);
