export const URL =
  "https://3001-jesusbruque-finalproyect-33v9ag31d78.ws-eu34.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
