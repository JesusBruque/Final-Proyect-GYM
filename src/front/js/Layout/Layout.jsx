import React from "react";
import PropTypes from "prop-types";

import { Navbar } from "./Navbar/Navbar.jsx";
import { Footer } from "./Footer/Footer.jsx";

const Layout = (props) => {

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                {props.children}
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.func
}

export default Layout;