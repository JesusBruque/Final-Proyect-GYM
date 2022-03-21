export const URL =
  "https://3001-jesusbruque-finalproyect-4gqtr559flv.ws-eu38.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
