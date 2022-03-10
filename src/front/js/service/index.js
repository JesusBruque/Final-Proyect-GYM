export const URL =
  "https://3001-jesusbruque-finalproyect-4splxcl27ti.ws-eu34.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
