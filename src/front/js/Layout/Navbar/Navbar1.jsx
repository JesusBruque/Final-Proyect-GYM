import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../service/navbar.js";
import "./navbar1.css";

export const Navbar1 = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        getUser()
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <nav className="navbar row justify-content-between" >
            <div className="logo-container col-4 align-self-center">
                <img className="logo" src="" />
            </div>
            <div className="col-4 row me-0 justify-content-end">

                < Link to="/register/customer" className="register col align-self-center">Register </Link>
                <Link to="/login" className="login col align-self-center">Login </Link>
                <div className="avatar-container col-5 align-self-center row justify-content-end">
                    <img src={user.avatar} className="avatar-size rounded-circle pb-1 px-0" />
                </div>


            </div>

        </nav >
    )
}

