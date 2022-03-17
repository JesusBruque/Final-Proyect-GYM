import React from "react";

import "./message.css";
import "../../../img/avatar.png";

const Message = () => {
    return (
        <>
            <div className="inbox-container">
                <div className="inbox-title">Inbox</div>
                <div className="inbox">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>20/07/2022</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>15/07/2022</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry the Bird</td>
                                <td>15/07/2022</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Jacob</td>
                                <td>12/07/2022</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Jacob</td>
                                <td>10/07/2022</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Jacob</td>
                                <td>2/07/2022</td>
                            </tr>
                        </tbody>
                    </table>
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
        </>
    )
}

export default Message;