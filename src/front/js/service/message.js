import { URL, getToken } from "./index.js";

export const createMessage = () => {
  const token = getToken();
  return fetch(`${URL}/api/message/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
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
