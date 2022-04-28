export const URL = process.env.BACKEND_URL;
//export const URL =
//"https://3001-jesusbruque-finalproyec-ary58ej9up0.ws-eu43.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
