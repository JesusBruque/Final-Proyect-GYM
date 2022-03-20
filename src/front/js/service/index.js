export const URL =
  "https://3001-jesusbruque-finalproyect-jno9c4bex7g.ws-eu38.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
