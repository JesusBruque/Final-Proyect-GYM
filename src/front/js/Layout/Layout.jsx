import React from "react";
import PropTypes from "prop-types";

//import { Navbar } from "./Navbar/Navbar.jsx";
//import { Footer } from "./Footer/Footer.jsx";
import { Navbar1 } from "./Navbar/Navbar1.jsx";

const Layout = (props) => {
  return (
    <>
      <div>
        <Navbar1 />
      </div>
      <div>{props.children}</div>
      <div>

      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
