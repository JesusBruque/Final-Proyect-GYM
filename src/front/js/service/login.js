import { URL } from "../index.js";

export const loginUser = (userCredentials) =>
  fetch(`${URL}/api/user/login`, {
    method: "POST",
    body: JSON.stringify(userCredentials),
  });
