export const URL =
  "https://3001-jesusbruque-finalproyect-pht6k7jr8cn.ws-eu38.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
