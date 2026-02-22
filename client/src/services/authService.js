import API from "../api/axios";

export const registerUser = (userData) =>
  API.post("/auth/register", userData);

export const loginUser = (userData) =>
  API.post("/auth/login", userData);
