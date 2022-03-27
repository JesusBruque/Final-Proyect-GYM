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

export const getAppointments = () => {
  const token = getToken();
  return fetch(`${URL}/api/appointments/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
    },
    body: JSON.stringify(user),
  });
};
