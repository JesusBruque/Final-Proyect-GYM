import React, { useState, useEffect } from "react";
import { getUser, infoUser, updateUser } from "../../service/account.js";
import { Link } from "react-router-dom";

import "./account.css";

const Account = () => {

    const [user, setUser] = useState({
        email: "",
        first_name: "",
        last_name: "",
        phone: ""
    });
    const [userCopy, setUserCopy] = useState({
        email: "",
        first_name: "",
        last_name: "",
        phone: ""
    });
    const [info, setInfo] = useState({
        goals: ""
    })
    const [infoCopy, setInfoCopy] = useState({
        goals: ""
    })
    const [disabledData, setDisabledData] = useState(true);
    const [disabledGoals, setDisabledGoals] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getUser()
            .then((res) => res.json())
            .then((data) => {
                setUser(data)
                setUserCopy(data)
            })
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        infoUser()
            .then((res) => res.json())
            .then((data) => {
                setInfo(data)
                setInfoCopy(data)
                console.log(info)
            })
            .catch((err) => console.log(err))
    }, [])

    const update = () => {
        if (disabledData === false) {
            setDisabledData(true)
            updateUser(user)
                .then((res) => res.json())
                .then((data) => {
                    setUser(data)
                    setUserCopy(data)
                })
                .catch((err) => {
                })
        } else if (required == true) {

        } else {
            setDisabledData(false)
        }
    }

    const cancel = () => {
        if (disabledData === false) {
            setDisabledData(true)
            getUser()
                .then((res) => res.json())
                .then((data) => userCopy(data))
                .catch((err) => console.log(err))
        } else {
            setDisabledData(false)
        }
    }

    const updateInfo = () => {
        if (disabledGoals === false) {
            setDisabledGoals(true)
            updateInfo(user)
                .then((res) => res.json())
                .then((data) => {
                    setInfo(data)
                    setInfoCopy(data)
                })
                .catch((err) => {
                })
        } else if (required == true) {

        } else {
            setDisabledGoals(false)
        }
    }

    const handleClickData = () => {
        setDisabledData(!disabledData);
    }

    const handleClickGoals = () => {
        setDisabledGoals(!disabledGoals);
    }

    const handleChangeUser = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
        console.log(e.target.name);
        console.log(e.target.value);
    };

    const handleChangeGoals = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo({ ...info, [name]: value });
        console.log(e.target.name);
        console.log(e.target.value);
    };


    console.log(info);

    return (
        <div className="container">
            <div className="main-body container">
                <div className="card card-avatar row">
                    <div className="col-3">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="rounded-circle my-2" width="80" />
                    </div>
                    <div className="col-6">{user.first_name}{" "}{user.last_name}</div>
                </div>

                <div className="row gutters-sm">
                    <div className="col-md-6">
                        <div className="card card-data mb-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="mb-0">First Name</h6>
                                        </div>
                                        <div className="input-group col-sm-9">
                                            <input type="text" className="form-control" onChange={handleChangeUser} defaultValue={user.first_name} name="first_name" disabled={disabledData} required />
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="mb-0">Last Name</h6>
                                        </div>
                                        <div className="input-group col-sm-9">
                                            <input type="text" className="form-control" onChange={handleChangeUser} defaultValue={user.last_name} name="last_name" disabled={disabledData} />
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="input-group col-sm-9">
                                            <input type="text" className="form-control" onChange={handleChangeUser} defaultValue={user.phone} name="phone" disabled={disabledData} />
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="input-group col-sm-9">
                                            <input type="text" className="form-control" onChange={handleChangeUser} defaultValue={user.email} name="email" disabled={disabledData} />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="container p-2 m-2">
                                <div className="btn-holder text-secondary">
                                    <Link id="a" to="">Change Password</Link>
                                </div >
                                <div className="row d-flex">
                                    {
                                        disabledData ?
                                            <button type="button" className="col-md-3 btn btn-secondary float-right" onClick={handleClickData}>Edit</button> :
                                            <div className="row">
                                                <button type="button" className="col-md-3 mx-1 btn btn-secondary float-right" onClick={cancel}>Cancel</button>
                                                <button type="button" className="col-md-3 btn btn-secondary float-right" onClick={update}>Save</button>
                                            </div>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card card-goals mb-3">

                            <h5 className="card-title">Goals</h5>
                            <div className="input-group">
                                <textarea className="form-control" id="textarea" disabled={disabledGoals} onChange={handleChangeGoals} defaultValue={info.goals} rows="3"></textarea>
                            </div>
                            <div className="modal-footer">
                                {
                                    disabledGoals ?
                                        <button type="button" className="col-md-3 btn btn-secondary" onClick={handleClickGoals}>Edit</button> :
                                        <button type="button" className="col-md-3 btn btn-secondary" onClick={handleClickGoals}>Save</button>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;