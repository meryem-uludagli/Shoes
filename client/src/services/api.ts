import axios from "axios";
import {
  AuthResponse,
  LoginData,
  RegisterData,
  Shoe,
  ShoeData,
  User,
} from "../types";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => res,

  async (err) => {
    const originalRequest = err.config;

    if (err?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await api.post<AuthResponse>("/auth/refresh");
        const { accessToken } = res.data;
        localStorage.setItem("accessToken", accessToken);

        return api(originalRequest);
      } catch (error) {
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
  }
);

export const authApi = {
  register: (data: RegisterData) =>
    api.post<AuthResponse>("/auth/register", data),

  login: (data: LoginData) => api.post<AuthResponse>("/auth/login", data),

  logout: () => api.post("/auth/logout"),

  getCurrentUser: () => api.get<{ user: User }>("/auth/me"),
};

export const shoesApi = {
  getAll: () => api.get<Shoe[]>("/shoes"),
  getById: (id: string) => api.get<Shoe>(`/shoes/${id}`),
  create: (data: ShoeData) => api.post<Shoe>("/shoes", data),
  edit: (id: string, data: ShoeData) => api.put<Shoe>(`/shoes/${id}`, data),
  delete: (id: string) => api.delete(`/shoes/${id}`),
};
