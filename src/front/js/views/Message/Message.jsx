import React, { useState, useEffect, useContext } from "react";
import { getUsers, getMessages, createMessage } from "../../service/message.js";
import { Context } from "../../store/appContext.js";

import "./message.css";

const Message = () => {

    const { store, actions } = useContext(Context)
    const [message, setMessage] = useState("");
    const [dialogue, setDialogue] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllWorkers();
        getMessages(9001)
            .then((res) => res.json())
            .then((data) => {
                const { result } = data;
                setMessage({ message: result })
                console.log(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const getAllWorkers = async () => {
        try {
            setLoading(true);
            const restrainer = await getUsers("trainer");
            const datatrainer = await restrainer.json();
            const resphysio = await getUsers("physio");
            const dataphysio = await resphysio.json();
            let workers = datatrainer.concat(dataphysio);
            actions.setWorkers(workers);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };


    const handleClickDialogue = (e) => {
        e.target.value
        const idMessage = store.workers[e.target.value].id
        console.log(idMessage)
        console.log(e.target.value);

    }

    return (
        <div className="big-container container justify-content-center d-flex">
            <div className="inbox-container">
                <div className="inbox-title">Inbox</div>
                <div className="inbox">
                    <ul className="list-group">
                        {store.workers.map((worker) => <li className="list-group-item" onClick={handleClickDialogue} key={worker.id}>{`${worker.first_name} ${worker.last_name}`}</li>)}
                    </ul>
                </div>
            </div>
            <div className="messages-container">
                <div className="messages-title">Full Name</div>
                <div className="messages">
                    <div className="message-receive container">
                        <div>{message.text}</div>
                    </div>
                    <div className="message-sent container">
                        <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                    </div>
                    <div className="message-receive container">
                        <div>Muy bien y tu?</div>
                    </div>
                    <input type="text" className="form-control input-text" />
                </div>

            </div>
        </div>
    )
}

export default Message;