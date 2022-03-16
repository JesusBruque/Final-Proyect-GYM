import React, { useState, useEffect } from "react";
import { getUser, updateUser } from "../../service/account.js";

import "./account.css";

const Account = () => {

    const initialState = {
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
        role_id: "",
        avatar: ""
    }

    const [user, setUser] = useState(initialState);
    const [userCopy, setUserCopy] = useState(initialState);
    const [disabledData, setDisabledData] = useState(true);
    const [error, setError] = useState(initialState);
    const [file, setFile] = useState("");

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
        const errorHandler = { ...initialState };
        if (user.first_name.length === 0) {
            errorHandler.first_name = "First Name can't be empty";
        }

        if (user.last_name.length === 0) {
            errorHandler.last_name = "Last Name can't be empty";
        }

        if (user.phone.length !== 9) {
            errorHandler.phone = "Invalid Phone Number";
        }

        const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(user.email)) {
            errorHandler.email = "Invalid Format Email";
        } else if (user.email.length === 0) {
            errorHandler.email = "Email can't be empty";
        }

        if (errorHandler.email === "" && errorHandler.first_name === "" && errorHandler.last_name === "" && errorHandler.phone === "") {
            const form = new FormData();
            if (file !== "") {
                form.append("avatar", file)
            }

            form.append("first_name", user.first_name)
            form.append("last_name", user.last_name)
            form.append("phone", user.phone)
            form.append("email", user.email)

            updateUser(form)
                .then((res) => res.json())
                .then((data) => {
                    setUser(data)
                    setUserCopy(data)
                })
                .catch((err) => console.log(err))
                .finally(setDisabledData(false))
        }
        setError(errorHandler);
    }

    const cancel = () => {
        setDisabledData(true);
        setUser(userCopy);
    }

    const handleClickData = () => {
        setDisabledData(!disabledData);
    }

    const handleChangeUser = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const handleChangeFiles = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setUser({ ...user, avatar: reader.result })
                };
            }
            reader.readAsDataURL(e.target.files[0]);
        };
    }

    return (
        <div className="container">
            <div className="main-body">
                <div className="row ">
                    <div className="col-md-6 m-auto p-auto">
                        <div className="card card-data">
                            <div className="col-3 m-auto p-auto">
                                <img src={user.avatar} className="rounded-circle my-2" />
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="mb-0">First Name</h6>
                                        </div>
                                        <div className="input-group col-sm-9">
                                            <input type="text" className="form-control" onChange={handleChangeUser} defaultValue={user.first_name} name="first_name" disabled={disabledData} />
                                            {error.first_name != "" ? <p className="text-danger m-2 mt-3 w-100">{error.first_name}</p> : null}
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
                                            {error.last_name != "" ? <p className="text-danger m-2 mt-3 w-100">{error.last_name}</p> : null}
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
                                            {error.phone != "" ? <p className="text-danger m-2 mt-3 w-100">{error.phone}</p> : null}
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
                                            {error.email != "" ? <p className="text-danger m-2 mt-3 w-100">{error.email}</p> : null}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="container p-2 mx-2 mb-2">
                                <div className="btn-holder text-secondary m-auto p-auto">
                                    {disabledData ? <span></span> :
                                        <div id="div_file">
                                            <p id="texto">Change Profile Picture</p>
                                            <input type="file" id="btn_enviar" onChange={handleChangeFiles} accept="image/png, image/gif, image/jpeg" />
                                        </div>
                                    }
                                </div >
                                <div className="row d-flex">
                                    {
                                        disabledData ?
                                            <button type="button" className="col-3 btn btn-secondary ml-3 " onClick={handleClickData}>Edit</button> :
                                            <div className="row">
                                                <button type="button" className="col-3 btn btn-secondary float-right" onClick={cancel}>Cancel</button>
                                                <button type="button" className="col-3 btn btn-secondary float-right" onClick={update}>Save</button>
                                            </div>
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