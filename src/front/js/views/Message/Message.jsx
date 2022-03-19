import React, { useState, useEffect, useContext } from "react";
import { getMessages, createMessage } from "../../service/message.js";
import { getUser } from "../../service/user.js";

import "./message.css";

const Message = () => {

    const initialState = {
        id: "",
        text: "",
        user_sent: "",
        user_receive: "",
    }

    const [message, setMessage] = useState(initialState);
    console.log(message)

    useEffect(() => {
        getMessages(9001)
            .then((res) => res.json())
            .then((data) => {
                setMessage(data)
                console.log(data)
            })
            .catch((err) => console.log(err))

    }, [])

    return (
        <div className="big-container container justify-content-center d-flex">
            <div className="inbox-container">
                <div className="inbox-title">Inbox</div>
                <div className="inbox">
                    <ul className="list-group">
                        { }
                    </ul>
                </div>
            </div>
            <div className="messages-container">
                <div className="messages-title">Full Name</div>
                <div className="messages">
                    <div className="message-receive container">
                        <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
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