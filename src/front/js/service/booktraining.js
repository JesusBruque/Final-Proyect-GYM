import { URL, getToken } from "./index.js";

export const getTrainers = () => {
  const token = getToken();
  return fetch(`${URL}/api/user/role/trainer`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAppointments = (id) => {
  const token = getToken();
  return fetch(`${URL}/api/appointments/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addAppointment = (data) => {
  const token = getToken();
  return fetch(`${URL}/api/appointments/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
