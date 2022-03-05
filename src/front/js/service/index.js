export const URL =
  "https://3001-jesusbruque-finalproyect-j9u2hmeifqf.ws-eu34xl.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
