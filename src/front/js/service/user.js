import { URL } from "./index.js";

export const registerUser = (user) => {
  return fetch(`${URL}/api/user/register`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const registerTrainer = (user) => {
  return fetch(`${URL}/api/user/register`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const registerPhysio = (user) => {
  return fetch(`${URL}/api/user/register`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
