import { URL, getToken } from "./index.js";

export const getAllCustomers = () => {
  const url = `${URL}/api/user/role/customer`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const getCustomerInfo = (id) => {
  const url = `${URL}/api/info/${id}`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};
