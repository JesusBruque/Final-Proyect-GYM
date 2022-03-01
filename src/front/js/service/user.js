import { URL } from "./index.js";

export const getUsers = () => {
  const url = URL + "/account";
  return fetch(url);
};
