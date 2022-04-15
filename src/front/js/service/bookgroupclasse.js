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

export const joinGroupClasse = (data) => {
  const token = getToken();
  return fetch(`${URL}/api/classe`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
