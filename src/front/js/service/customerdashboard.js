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

export const getInfoUser = () => {
  const token = getToken();
  return fetch(`${URL}/api/info/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateInfo = (info) => {
  const token = getToken();
  return fetch(`${URL}/api/info/`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(info),
  });
};

export const getClasses = () => {
  const token = getToken();
  return fetch(`${URL}/api/classe/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getGoals = () => {
  const token = getToken();
  return fetch(`${URL}/api/goal/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createGoal = (goal) => {
  const token = getToken();
  return fetch(`${URL}/api/goal/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(goal),
  });
};

export const deleteGoals = (id) => {
  const token = getToken();
  return fetch(`${URL}/api/goal/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });
};
