const URL =
  "https://3000-jesusbruque-finalproyect-1isr2iopij9.ws-eu34xl.gitpod.io/";

export const getUsers = () => {
  const url = URL + "/account";
  return fetch(url);
};
