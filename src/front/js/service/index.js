export const URL =
  "https://3001-jesusbruque-finalproyect-k3fzfk7ljtk.ws-eu38.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
