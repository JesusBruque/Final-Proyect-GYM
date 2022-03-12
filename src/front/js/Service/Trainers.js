import { URL, getToken } from "./url.js";

export const getAllTrainers = () => {
  const url = `${URL}/api/user/role/trainer`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};
