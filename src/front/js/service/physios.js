import { URL, getToken } from "./index";

export const getAllPhysios = () => {
  const url = `${URL}/api/user/role/physio`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};
