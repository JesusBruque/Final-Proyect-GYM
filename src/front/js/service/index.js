export const URL =
  "https://3001-jesusbruque-finalproyect-bpck4p4jerj.ws-eu38.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
