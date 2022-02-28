import { URL } from "./index.js";

export const registerUser = (user) => {
  return fetch(`${URL}/api/user/register`, {
    method: "POST",
    body: user,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
