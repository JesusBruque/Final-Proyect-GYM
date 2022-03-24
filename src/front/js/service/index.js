export const URL =
  "https://3001-jesusbruque-finalproyect-9qz9393ee62.ws-eu38.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
