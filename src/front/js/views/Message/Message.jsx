import React, { useState, useEffect, useContext } from "react";
import { getUsers, getMessages, createMessage } from "../../service/message.js";
import { Context } from "../../store/appContext.js";

import "./message.css";

const Message = () => {

    const { store, actions } = useContext(Context)
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("")
    const [idWorker, setIdWorker] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllWorkers();
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
        setIdWorker(store.workers[e.target.value].id);
        console.log(idWorker)
        console.log(e.target.value);
        getMessages(store.workers[e.target.value].id)
            .then((res) => res.json())
            .then((data) => {
                setMessages(data)
            })
            .catch((err) => console.log(err))
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
                    setMessages([...messages, data])
                })
                .catch((err) => console.log(err))
        }
    };

    console.log("messages", messages);
    console.log("text", text);

    return (
        <div className="big-container container justify-content-center d-flex">
            <div className="inbox-container">
                <div className="inbox-title">Inbox</div>
                <div className="inbox">
                    <ul className="list-group"  >
                        {store.workers.map((worker) => <li className="list-group-item" onClick={handleClickDialogue} key={worker.id}>{`${worker.first_name} ${worker.last_name}`}</li>)}
                    </ul>
                </div>
            </div>
            <div className="messages-container">
                <div className="messages-title">Full Name</div>
                <div className="messages">

                    <div className="message-receive container">
                        Hola
                    </div>
                    {/* {
                        messages.map((message) => {
                            idWorker == message.user_receive ?
                                <div key={message.id} className="message-receive container">
                                    {message.text}
                                </div> :
                                <div key={message.id} className="message-sent container">
                                    {message.text}
                                </div>
                        })
                    } */}
                    {/* {
                        messages.map((message) => {
                            <div key={message.id} className="message-receive container">
                                {message.text}
                            </div>
                        })
                    } */}
                    <input type="text" onKeyDown={messageCreate} onChange={(e) => { setText(e.target.value) }} className="form-control input-text" />
                </div>

            </div>
        </div>
    )
}

export default Message;