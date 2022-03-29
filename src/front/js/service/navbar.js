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
