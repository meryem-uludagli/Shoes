import axios from "axios";
import { AuthResponse, LoginData, RegisterData } from "../types";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});

export const authApi = {
  register: (data: RegisterData) =>
    api.post<AuthResponse>("/auth/register", data),
  login: (data: LoginData) => api.post<AuthResponse>("/auth/login", data),
  logout: () => api.post("/auth/logout"),
};
