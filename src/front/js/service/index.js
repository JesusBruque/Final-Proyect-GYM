//export const URL = process.env.BACKEND_URL;
export const URL =
  "https://3001-jesusbruque-finalproyect-ny8bzs52yv8.ws-eu39.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
