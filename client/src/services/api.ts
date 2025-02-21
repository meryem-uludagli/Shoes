import axios from "axios";
import { AuthResponse, LoginData, RegisterData, User } from "../types";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export const authApi = {
  register: (data: RegisterData) =>
    api.post<AuthResponse>("/auth/register", data),
  login: (data: LoginData) => api.post<AuthResponse>("/auth/login", data),
  logout: () => api.post("/auth/logout"),

  getCurrentUser: () => api.get<{ user: User }>("auth/me"),
};
