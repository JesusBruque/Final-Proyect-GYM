import { URL, getToken } from "./index.js";

export const getAppointments = () => {
  const token = getToken();
  return fetch(`${URL}/api/appointments/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
