import { URL, getToken } from "./index";

export const getCustomerInfo = (id) => {
  const url = `${URL}/api/user/role/customer/info/${id}`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};
