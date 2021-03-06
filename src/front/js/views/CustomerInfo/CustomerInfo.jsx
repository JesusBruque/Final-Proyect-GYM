import React, { useEffect, useState } from "react";
import { customerInfo, getGoals, updateCustomerInfo, addCustomerInfo } from "../../service/customerInfo.js";
import { useHistory } from "react-router-dom";
import Spinner from "../../component/Spinner.jsx";
import { ToastContainer, toast, Flip } from 'react-toastify';

import "./customerInfo.css";
import 'react-toastify/dist/ReactToastify.css';

const CustomerInfo = () => {

    const url = new URLSearchParams(window.location.search);
    const id = url.get("id");
    const history = useHistory();
    const initialState = {
        medical_history: ""
    }
    const [info, setInfo] = useState(initialState);
    const [infoCopy, setInfoCopy] = useState(initialState);
    const [goals, setGoals] = useState([]);
    const [disabledData, setDisabledData] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(initialState);
    const [existInfo, setExistInfo] = useState(false)

    useEffect(() => {
        setLoading(true);
        customerInfo(id)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data)
                setInfoCopy(data)
                console.log(data.medical_history)
                if (data.medical_history.length > 0) {
                    setExistInfo(true);
                    console.log(existInfo)
                }

            })
            .catch((error) => console.log(error));

        getGoals(id)
            .then((res) => res.json())
            .then((data) => {
                setGoals(data)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleClickData = () => {
        setDisabledData(!disabledData);
    };

    const cancel = () => {
        setDisabledData(true);
        if (error.medical_history !== "") {
            console.log("aqui")
            setError(initialState)
        }
        setInfo(infoCopy);
        console.log("infoCopy", infoCopy)
    };

    const handleChangeInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo({ ...info, [name]: value });
    };

    const updateInfo = () => {
        setLoading(true);

        const errorHandler = { ...initialState };

        if (info.medical_history.length === 0) {
            errorHandler.medical_history = "Medical history can't be empty";
        }

        if (errorHandler.medical_history === "") {
            updateCustomerInfo(info, id)
                .then((res) => res.json())
                .then((data) => {
                    setInfo(data);
                    setInfoCopy(data);
                })
                .catch((err) => console.log(err))
                .finally(() => {
                    handleClickData();
                    setLoading(false);
                    toast.success('Medical History update succesfully', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,

                    });
                });
        }
        setError(errorHandler);
    };

    const createInfo = () => {
        setLoading(true)
        addCustomerInfo(info, id)
            .then((res) => res.json())
            .then((data) => setInfo(data))
            .catch((err) => console.log(err))
            .finally(() => {
                handleClickData();
                setLoading(false);
                setExistInfo(true);
                toast.success('Medical History create succesfully', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,

                });
            });
    }

    return (
        <div className="container m-auto row justify-content-around">
            <div className="box col-md-6">
                <div className="card card-data d-flex flex-column">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item account-list my-2">
                            <div className="row">
                                <div className="col">
                                    <h5 className="mb-2">Goals</h5>
                                </div>
                                <div className="cont-goals input-group col-sm-9">
                                    <ul className="list-group list-group-flush container px-0">
                                        {goals.map((goal, index) =>
                                            <li key={index} className="list-goal list-group-item d-flex bd-highlight">
                                                {goal.goals}

                                            </li>)}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>



            <div className="box col-md-6">
                <div className="card card-data d-flex flex-column">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item account-list my-2">
                            <div className="row">
                                <div className="col">
                                    <h5 className="mb-2">Medical History</h5>
                                </div>
                                <div className="input-group col-sm-9">
                                    <textarea
                                        type="text"
                                        onChange={handleChangeInfo}
                                        className="med-text form-control"
                                        defaultValue={info.medical_history}
                                        name="medical_history"
                                        disabled={disabledData}
                                    />
                                    {error.medical_history != "" ? (
                                        <p className="text-danger mt-3 w-100">{error.medical_history}</p>
                                    ) : null}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="container-bottom row d-flex flex-row-reverse">
                        {disabledData ? (
                            <button
                                type="button"
                                className="col-3 account-button me-4"
                                onClick={handleClickData}
                            >
                                Edit
                            </button>
                        ) : (
                            <div className="row m-0">
                                <button
                                    type="button"
                                    className="col-3 account-button m-3 float-right"
                                    onClick={cancel}
                                >
                                    Cancel
                                </button>
                                {loading == true ? (
                                    <Spinner />
                                ) : existInfo ? (
                                    <button
                                        type="button"
                                        className="col-3 account-button m-3 float-right"
                                        onClick={updateInfo}
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="col-3 account-button m-3 float-right"
                                        onClick={createInfo}
                                    >
                                        Create
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <ToastContainer transition={Flip} />
            <div className="col-md-3 mt-3">
                <button
                    type="button"
                    className="col-12 btn btn-outline-light my-1 "
                    onClick={() => history.goBack()}
                >
                    Go back
                </button>
            </div>
        </div>


    )
}

export default CustomerInfo;