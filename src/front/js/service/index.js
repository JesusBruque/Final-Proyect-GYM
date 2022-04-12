//export const URL = process.env.BACKEND_URL;
export const URL =
  "https://3001-jesusbruque-finalproyect-crgyr22t4k0.ws-eu39b.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
