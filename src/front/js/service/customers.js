import { URL, getToken } from "./index";

export const getAllCustomers = () => {
  const url = `${URL}/api/user/role/customer`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const getCustomerInfo = (id) => {
  const url = `${URL}/api/user/info/${id}`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};
