import { URL } from "./index.js";

export const loginUser = (userCredentials) => {
  return fetch(`${URL}/api/user/login`, {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: {
      "Content-type": "application/json",
    },
  });
};
