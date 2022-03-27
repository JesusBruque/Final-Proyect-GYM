import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-area footer--light">
      <div className="footer-big">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="footer-widget">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Dónde encotrarnos</h4>
                  <ul className="contact-details">
                    <li>Esquina de Narnia con Mordor, Nº2</li>
                    <li>55555 Wisconsin, Massachussets</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu footer-menu--1">
                  <h4 className="footer-widget-title">Privacidad</h4>
                  <ul>
                    <li>
                      <a href="#">Política de cookies</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu">
                  <h4 className="footer-widget-title"></h4>
                  <ul></ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu no-padding">
                  <h4 className="footer-widget-title">Redes Sociales</h4>
                  <ul className="row">
                    <li>
                      <p>
                        <a href="/">
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-google"></i>
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mini-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>
                  © 2022 4Geeks Academy. All rights reserved. Created by Jesús,
                  Luis y Nayra
                </p>
              </div>

              <div className="go_top">
                <span className="icon-arrow-up"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
