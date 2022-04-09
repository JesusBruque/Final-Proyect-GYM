import { URL, getToken } from "./index";

export const customerInfo = (id) => {
  const url = `${URL}/api/user/role/customer/info/${id}`;
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getToken()}`,
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

export const addCustomerInfo = (info) => {
  const token = getToken();
  return fetch(`${URL}/api/info`, {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const updateCustomerInfo = (info) => {
  const token = getToken();
  return fetch(`${URL}/api/info`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: info,
  });
};
