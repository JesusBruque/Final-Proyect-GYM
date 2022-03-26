export const URL =
  "https://3001-jesusbruque-finalproyect-4j1rt5dhn5f.ws-eu38.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
