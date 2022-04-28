import React from "react";
import PropTypes from "prop-types";
import "./Layout.css";
import { Navbar } from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";

const Layout = (props) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="body-layout">{props.children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
