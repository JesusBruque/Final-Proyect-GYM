export const URL =
  "https://3001-jesusbruque-finalproyect-y84ix17lapr.ws-eu34.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};