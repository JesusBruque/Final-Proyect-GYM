import React, { useState, useEffect } from "react";
import { getUser, updateUser } from "../../service/account.js";

import "./account.css";

const Account = () => {

    const [user, setUser] = useState({
        email: "",
        first_name: "",
        last_name: "",
        phone: ""
    })
    const [userCopy, setUserCopy] = useState({
        email: "",
        first_name: "",
        last_name: "",
        phone: ""
    })
    const [disabledData, setDisabledData] = useState(true)
    const [disabledGoals, setDisabledGoals] = useState(true)
    const [error, setError] = useState("");

    const loremIpsun = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam felis a lectus fringilla, id consectetur metus consectetur. Ut posuere pharetra eros, ut sollicitudin magna vestibulum sit amet. Phasellus maximus vel turpis vitae facilisis."

    useEffect(() => {
        getUser()
            .then((res) => res.json())
            .then((data) => {
                setUser(data)
                setUserCopy(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const update = () => {
        if (key) {
            updateUser(user)
                .then((res) => res.json())
                .then((data) => {
                    setUser(data)
                    setUserCopy(data)
                })
                .catch((err) => {
                })
        } else {
            setError("")
        }
    }

    const handleClickData = () => {
        setDisabledData(!disabledData);
    }

    const handleClickGoals = () => {
        if (disabledGoals === true) {
            setDisabledGoals(false);
        } else {
            setDisabledGoals(true)
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
        console.log(e.target.name);
        console.log(e.target.value);
    };

    console.log(user);

    return (
        <div className="container">
            <div className="main-body">
                <div className="col-md mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="50" />
                                <div className="mt-3">
                                    <div className="h5">{user.first_name}{" "}{user.last_name}</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gutters-sm">
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="mb-0">First Name</h6>
                                        </div>
                                        <div className="input-group col-sm-9">
                                            <input type="text" className="form-control" onChange={handleChange} defaultValue={user.first_name} name="first_name" disabled={disabledData} />
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="mb-0">Last Name</h6>
                                        </div>
                                        <div className="input-group col-sm-9">
                                            <input type="text" className="form-control" onChange={handleChange} defaultValue={user.last_name} name="last_name" disabled={disabledData} />
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="input-group col-sm-9">
                                            <input type="text" className="form-control" onChange={handleChange} defaultValue={user.phone} name="phone" disabled={disabledData} />
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="input-group col-sm-9">
                                            <input type="text" className="form-control" onChange={handleChange} defaultValue={user.email} name="email" disabled={disabledData} />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="modal-footer">
                                <div className="btn-holder text-secondary">
                                    Change Password
                                </div >
                                {
                                    disabledData ?
                                        <button type="button" className="col-md-3 btn btn-secondary" onClick={handleClickData}>Edit</button> :
                                        <button type="button" className="col-md-3 btn btn-secondary" onClick={update}>Save</button>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Goals</h5>
                                <div className="input-group">
                                    <textarea className="form-control" id="textarea" disabled={disabledGoals} placeholder={loremIpsun} rows="3"></textarea>
                                </div>
                                <div className="modal-footer">
                                    {
                                        disabledGoals ?
                                            <button type="button" className="col-md-3 btn btn-secondary" onClick={handleClickGoals} data-bs-dismiss="modal">Edit</button> :
                                            <button type="button" className="col-md-3 btn btn-secondary" onClick={handleClickGoals} data-bs-dismiss="modal">Save</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;