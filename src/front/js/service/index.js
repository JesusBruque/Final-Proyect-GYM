export const URL =
  "https://3001-jesusbruque-finalproyect-551ajztkuav.ws-eu34.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
