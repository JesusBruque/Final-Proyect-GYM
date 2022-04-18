import React, { useState, useEffect, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { getUsers, getMessages, createMessage } from "../../service/message.js";
import { Context } from "../../store/appContext.js";
import Spinner from "../../component/Spinner.jsx";

import "./messageWorkers.css";

const MessageWorkers = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [idCustomer, setIdCustomer] = useState("");
  const [nameCustomer, setNameCustomer] = useState("");
  const [avatarCustomer, setAvatarCustomer] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    getAllCustomers();
  }, []);

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
    setIsActive(true);
    setLoadingMessage(true);
    setIdCustomer(customer.id);
    setNameCustomer(`${customer.first_name} ${customer.last_name}`);
    setAvatarCustomer(customer.avatar);
    getMessages(customer.id)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoadingMessage(false);
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({
            block: "end",
            behavior: "smooth",
          });
        }
      });
  };

  const messageCreate = (e) => {
    if (e.keyCode == "13") {
      const newMessage = {
        text: text,
        user_receive: idCustomer,
      };
      createMessage(newMessage)
        .then((res) => res.json())
        .then((data) => {
          setMessages([...messages, data]);
          setText("");
          messagesEndRef.current?.scrollIntoView({
            block: "end",
            behavior: "smooth",
          });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <div className="big-container container justify-content-center d-flex mt-3 mb-3">
        <div className="inbox-container">
          <div className="inbox-title">Inbox</div>
          <div className="inbox">
            {loadingList == true ? (
              <Spinner />
            ) : (
              <ul className="list-group">
                {store.customers.map((customer) => (
                  <li
                    className="list-group-item worker-list"
                    onClick={() => handleClickDialogue(customer)}
                    key={customer.id}
                  >{`${customer.first_name} ${customer.last_name}`}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {isActive == true ? (
          <div className="messages-container">
            <div className="messages-title">
              <img
                src={avatarCustomer}
                className="avatar-size rounded-circle me-3"
              />
              {nameCustomer}
            </div>
            <div className="messages">
              {loadingMessage == true ? (
                <div className="mt-3">
                  {" "}
                  <Spinner />{" "}
                </div>
              ) : null}
              {messages.length == 0 && loadingMessage == false ? (
                <div className="mt-3 text-white">
                  Send a message to {nameCustomer}
                </div>
              ) : null}
              {messages.length > 0 && loadingMessage == false
                ? messages.map((message) =>
                    idCustomer != message.user_receive ? (
                      <div
                        key={message.id}
                        className="message-receive container"
                      >
                        {message.text}
                        <div className="scroll-bottom">
                          scroll
                          <div ref={messagesEndRef} />
                        </div>
                      </div>
                    ) : (
                      <div key={message.id} className="message-sent container">
                        {message.text}
                        <div className="scroll-bottom">
                          scroll
                          <div ref={messagesEndRef} />
                        </div>
                      </div>
                    )
                  )
                : null}
            </div>
            <div className="input-container">
              <input
                type="text"
                value={text}
                placeholder="Message"
                onKeyDown={messageCreate}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                className="form-control input-text"
              />
            </div>
          </div>
        ) : null}
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="col-2 btn btn-outline-light mt-3"
          onClick={() => history.goBack()}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default MessageWorkers;
