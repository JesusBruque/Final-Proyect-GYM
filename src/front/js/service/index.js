export const URL =
  "https://3001-jesusbruque-finalproyect-6v0xb6sltjr.ws-eu38.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
