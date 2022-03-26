import { URL, getToken } from "./index.js";

export const createMessage = (newMessage) => {
  const token = getToken();
  return fetch(`${URL}/api/message/`, {
    method: "POST",
    body: JSON.stringify(newMessage),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
};

export const getMessages = (from_user_id) => {
  const token = getToken();
  return fetch(`${URL}/api/message/${from_user_id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUsers = (role) => {
  return fetch(`${URL}/api/user/${role}`, {
    method: "GET",
  });
};
