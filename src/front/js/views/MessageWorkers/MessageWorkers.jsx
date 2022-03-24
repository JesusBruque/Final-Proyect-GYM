import React, { useState, useEffect, useContext } from "react";
import { getUsers, getMessages, createMessage } from "../../service/message.js";
import { Context } from "../../store/appContext.js";
import Spinner from "../../component/Spinner.jsx";

import "./messageWorkers.css";

const MessageWorkers = () => {

    const { store, actions } = useContext(Context);
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const [idCustomer, setIdCustomer] = useState("");
    const [nameCustomer, setNameCustomer] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [loadingList, setLoadingList] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState(true);

    useEffect(() => {
        getAllCustomers();
    }, [])

    const getAllCustomers = () => {
        setLoadingList(true);
        getUsers("customer")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                actions.setCustomers(data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoadingList(false);
            });
    };

    const handleClickDialogue = (customer) => {
        try {
            setIsActive(true);
            setLoadingMessage(true);
            setIdCustomer(customer.id);
            setNameCustomer(`${customer.first_name} ${customer.last_name}`);
            getMessages(customer.id)
                .then((res) => res.json())
                .then((data) => {
                    setMessages(data);
                })
        } catch (err) {
            console.log(err);
        } finally {
            setLoadingMessage(false);
        }
    }

    const messageCreate = (e) => {
        if (e.keyCode == '13') {
            const newMessage = {
                text: text,
                user_receive: idCustomer
            };
            createMessage(newMessage)
                .then((res) => res.json())
                .then((data) => {
                    setMessages([...messages, data]);
                    setText("");
                })
                .catch((err) => console.log(err));

        }
    };

    return (
        <div className="big-container container justify-content-center d-flex">
            <div className="inbox-container">
                <div className="inbox-title">Inbox</div>
                <div className="inbox">
                    {loadingList == true ? <Spinner /> :
                        <ul className="list-group">
                            {store.customers.map((customer) => <li className="list-group-item worker-list" onClick={() => handleClickDialogue(customer)} key={customer.id}>{`${customer.first_name} ${customer.last_name}`}</li>)}
                        </ul>
                    }
                </div>
            </div>
            {
                isActive == true ?
                    <div className="messages-container">
                        <div className="messages-title">{nameCustomer}</div>
                        <div className="messages">
                            {loadingMessage == true ? <div className="spinner"><Spinner /></div> :
                                messages.map((message) =>
                                    idCustomer != message.user_receive ?
                                        <div key={message.id} className="message-receive container">
                                            {message.text}
                                        </div> :
                                        <div key={message.id} className="message-sent container">
                                            {message.text}
                                        </div>
                                )
                            }
                        </div>
                        <div className="input-container">
                            <input type="text" value={text} placeholder="Message" onKeyDown={messageCreate} onChange={(e) => { setText(e.target.value) }} className="form-control input-text" />
                        </div>
                    </div> : null
            }
        </div>
    )
}

export default MessageWorkers;