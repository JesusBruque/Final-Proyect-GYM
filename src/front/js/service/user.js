import { URL } from "./index.js";
import tokenUser from "../views/Account/Account.jsx";

export const getUsers = () => {
  const url = URL + "/account";
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `${tokenUser}`,
    },
  });
};
