export const URL = process.env.BACKEND_URL;

export const getToken = () => {
  const tokenUser = localStorage.getItem("token");
  return tokenUser;
};
