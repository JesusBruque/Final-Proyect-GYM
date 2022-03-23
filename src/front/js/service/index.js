export const URL =
  "https://3001-jesusbruque-finalproyect-bxg7hr2d28g.ws-eu38.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
