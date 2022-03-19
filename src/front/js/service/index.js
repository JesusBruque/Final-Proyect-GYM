export const URL =
  "https://3001-jesusbruque-finalproyect-30knaz9qfa7.ws-eu38.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
