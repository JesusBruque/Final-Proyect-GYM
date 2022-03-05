import React, { useState, useEffect } from "react";
import { URL } from "../../service/index.js";

//Components
import ModalUser from "../../component/Modal/Modal.jsx";

import "./account.css";

const Account = () => {

    const [user, setUser] = useState([])
    const [disabledData, setDisabledData] = useState(true)
    const [disabledGoals, setDisabledGoals] = useState(true)

    const tokenUser = localStorage.getItem("token");

    const url = URL + "/api/user/";

    const loremIpsun = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam felis a lectus fringilla, id consectetur metus consectetur. Ut posuere pharetra eros, ut sollicitudin magna vestibulum sit amet. Phasellus maximus vel turpis vitae facilisis."

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

    const handleClickData = () => {

        if (disabledData === true) {
            setDisabledData(false);
        } else {
            const changes = "";
            setDisabledData(true)
        }
    }

    const handleClickGoals = () => {

        if (disabledGoals === true) {
            setDisabledGoals(false);
        } else {
            const changes = "";
            setDisabledGoals(true)
        }
    }

    return (
        <div className="container">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-2 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                    <div className="mt-3">
                                        <div className="h5">{user.first_name}{" "}{user.last_name}</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card mb-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="mb-0">First Name</h6>
                                        </div>
                                        <div className="input-group col-sm-9">
                                            <input type="text" className="form-control" placeholder={user.first_name} disabled={disabledData} />
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="mb-0">Last Name</h6>
                                        </div>
                                        <div className="input-group col-sm-9">
                                            <input type="text" className="form-control" placeholder={user.last_name} disabled={disabledData} />
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="input-group col-sm-9">
                                            <input type="text" className="form-control" placeholder={user.phone} disabled={disabledData} />
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="input-group col-sm-9">
                                            <input type="text" className="form-control" placeholder={user.email} disabled={disabledData} />
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
                                        <button type="button" className="col-md-3 btn btn-secondary" onClick={handleClickData} data-bs-dismiss="modal">Edit</button> :
                                        <button type="button" className="col-md-3 btn btn-secondary" onClick={handleClickData} data-bs-dismiss="modal">Save</button>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Goals</h5>
                                <div class="input-group">
                                    <textarea class="form-control" id="textarea" disabled={disabledGoals} placeholder={loremIpsun} rows="3"></textarea>
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