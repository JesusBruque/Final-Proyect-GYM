//export const URL = process.env.BACKEND_URL;
export const URL =
  "https://3001-jesusbruque-finalproyec-0kh6ikkt8tr.ws-eu43.gitpod.io";

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
