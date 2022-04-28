import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-area footer--light">
        <div className="footer-big">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="footer-widget">
                  <div className="footer-widget">
                    <h4 className="footer-widget-title">
                      Where you can find us
                    </h4>
                    <ul className="contact-details">
                      <li>10 Rockefeller Plaza, New York, NY 10020</li>
                      <li>(On 48th Street between 5th and 6th Avenues)</li>
                      <li>Via Subway B, D, F, M to 47-50 Sts</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu footer-menu--1">
                    <h4 className="footer-widget-title">Privacy Policy</h4>
                    <ul>
                      <li>
                        <a href="#">About cookies</a>
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
                    <h4 className="footer-widget-title">Social Media</h4>
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
                    © 2022 4Geeks Academy. All rights reserved. Created by
                    Jesús, Luis and Nayra
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
    </footer>
  );
};
export default Footer;
