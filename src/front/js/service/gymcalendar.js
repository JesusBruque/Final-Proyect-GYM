import { URL } from "./index.js";

export const getUsers = (role) => {
  return fetch(`${URL}/api/user/${role}`, {
    method: "GET",
  });
};

export const getAppointments = () => {
  return fetch(`${URL}/api/appointments/`, {
    method: "GET",
  });
};
