import React from "react";
import PropTypes from "prop-types";

import { Navbar } from "./Navbar/Navbar.jsx";
import { Footer } from "./Footer/Footer.jsx";
import UserRegister from "../views/UserRegister/UserRegister.jsx";

const Layout = (props) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <UserRegister />
      </div>
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
