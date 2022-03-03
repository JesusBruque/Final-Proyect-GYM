import React, { useState, useEffect } from "react";
import { URL } from "../../service/index.js";

//Components
import ModalUser from "../../component/Modal/Modal.jsx";

import "./account.css";

const Account = () => {

    const [user, setUser] = useState([])

    const tokenUser = localStorage.getItem("token");
    console.log(tokenUser);

    const url = URL + "/api/user/";
    console.log(url);

    useEffect(() => {
        fetch(url,
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${tokenUser}`,
                },
            })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setUser(data);
            })
            .catch(err => console.log(err))
    }, [])

    const handelClickEditData = () => {
        return;
    }

    return (
        <div className="container">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="200" />
                                    <div className="mt-3">
                                        <div className="h5">{user.first_name}{" "}{user.last_name}</div>
                                        <ModalUser />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">First Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {user.first_name}
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Last Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {user.last_name}
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {user.phone}
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {user.email}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="modal-footer">
                                <div className="btn-holder text-secondary">
                                    Change Password
                                </div >
                                <button type="button" className="col-md-3 btn btn-secondary" onClick={handelClickEditData()} data-bs-dismiss="modal">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;