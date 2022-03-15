import { URL, getToken } from "./index";

export const getAllTrainers = () => {
  const url = `${URL}/api/user/role/trainer`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};
