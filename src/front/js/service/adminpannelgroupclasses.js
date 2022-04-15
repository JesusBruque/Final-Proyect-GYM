import { URL, getToken } from "./index.js";

export const getGroupClasses = () => {
  const token = getToken();
  return fetch(`${URL}/api/classe/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addGroupClasse = (data) => {
  const token = getToken();
  return fetch(`${URL}/api/classe/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const getUsers = (role) => {
  const token = getToken();
  return fetch(`${URL}/api/user/role/${role}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getEnrolledsOf = (classe_id) => {
  const token = getToken();
  return fetch(`${URL}/api/enrolled/${classe_id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
