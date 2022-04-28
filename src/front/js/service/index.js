//export const URL = process.env.BACKEND_URL;
export const URL =
  "https://3001-jesusbruque-finalproyec-s5xvgdd37ia.ws-eu42.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
