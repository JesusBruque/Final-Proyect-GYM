import React from "react";

import "./message.css";
import "../../../img/avatar.png";

const Message = () => {
    return (
        <div className="big-container container justify-content-center d-flex">
            <div className="inbox-container">
                <div className="inbox-title">Inbox</div>
                <div className="inbox">
                    <ul className="list-group">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                    </ul>
                </div>
            </div>
            <div className="messages-container">
                <div className="messages-title">Full Name</div>
                <div className="messages">
                    <div className="message-receive container">
                        <img className="avatar-receive" src="avatar.png" />
                        <div className="text">Hola!</div>
                    </div>
                    <div className="message-sent">
                        <img className="avatar-sent" src="avatar.png" />
                        <div className="text">Hola, que tal estas?</div>
                    </div>
                    <div className="message-receive container">
                        <img className="avatar-receive" src="avatar.png" />
                        <div className="text">Muy bien y tu?</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;