import React, { useState, useEffect, useContext } from "react";
import { getUsers, getMessages, createMessage } from "../../service/message.js";
import { Context } from "../../store/appContext.js";
import Spinner from "../../component/Spinner.jsx";

import "./messageCustomers.css";

const MessageCustomers = () => {

    const { store, actions } = useContext(Context);
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const [idWorker, setIdWorker] = useState("");
    const [nameWorker, setNameWorker] = useState("");
    const [avatarWorker, setAvatarWorker] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [loadingList, setLoadingList] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState(false);

    useEffect(() => {
        getAllWorkers();
    }, [])

    const getAllWorkers = async () => {
        try {
            setLoadingList(true);
            const restrainer = await getUsers("trainer");
            const datatrainer = await restrainer.json();
            const resphysio = await getUsers("physio");
            const dataphysio = await resphysio.json();
            const resadmin = await getUsers("admin");
            const dataadmin = await resadmin.json();
            let workers = datatrainer.concat(dataphysio);
            let workersAdmin = workers.concat(dataadmin);
            actions.setWorkers(workersAdmin);
        } catch (err) {
            console.log(err);
        } finally {
            setLoadingList(false);
        }
    };

    const handleClickDialogue = (worker) => {
        setIsActive(true);
        setLoadingMessage(true);
        setIdWorker(worker.id);
        setNameWorker(`${worker.first_name} ${worker.last_name}`)
        setAvatarWorker(worker.avatar)
        getMessages(worker.id)
            .then((res) => res.json())
            .then((data) => {
                setMessages(data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoadingMessage(false));
    }

    const messageCreate = (e) => {
        if (e.keyCode == '13') {
            const newMessage = {
                text: text,
                user_receive: idWorker
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
                            {store.workers.map((worker) => <li className="list-group-item worker-list" onClick={() => handleClickDialogue(worker)} key={worker.id}>{`${worker.first_name} ${worker.last_name}`}</li>)}
                        </ul>
                    }
                </div>
            </div>
            {
                isActive == true ?
                    <div className="messages-container">
                        <div className="messages-title"><img src={avatarWorker} className="avatar-size rounded-circle me-3" />{nameWorker}</div>
                        <div className="messages">
                            {
                                loadingMessage == true ? <div className="mt-3"> <Spinner /> </div> : null
                            }
                            {
                                messages.length == 0 && loadingMessage == false ? <div className="mt-3">Send a message to {nameWorker}</div> : null
                            }
                            {
                                messages.length > 0 && loadingMessage == false ? messages.map((message) =>
                                    idWorker != message.user_receive ?
                                        <div key={message.id} className="message-receive container">
                                            {message.text}
                                        </div> :
                                        <div key={message.id} className="message-sent container">
                                            {message.text}
                                        </div>
                                ) : null
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

export default MessageCustomers;