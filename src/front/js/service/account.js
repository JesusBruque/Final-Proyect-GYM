import { URL, getToken } from "./index.js";

export const getUser = () => {
  const token = getToken();
  return fetch(`${URL}/api/user/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUser = (user) => {
  const token = getToken();
  return fetch(`${URL}/api/user/update`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: user,
  });
};

export const infoUser = () => {
  const token = getToken();
  return fetch(`${URL}/api/user/info`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const updateInfo = (user) => {
  const token = getToken();
  return fetch(`${URL}/api/user/info`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};
