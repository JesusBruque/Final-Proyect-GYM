export const URL =
  "https://3001-jesusbruque-finalproyect-tyhyi498ts4.ws-eu38.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
