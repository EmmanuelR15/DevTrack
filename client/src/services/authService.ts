import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

// Configurar axios para incluir el token en todas las peticiones
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Interceptor para añadir el token a las peticiones
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth-storage");
  if (token) {
    const authData = JSON.parse(token);
    if (authData.state?.token) {
      config.headers.Authorization = `Bearer ${authData.state.token}`;
    }
  }
  return config;
});

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      createdAt: string;
    };
    token: string;
  };
}

export const authService = {
  async loginUser(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await api.post("/auth/login", credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async registerUser(credentials: RegisterCredentials): Promise<AuthResponse> {
    try {
      const response = await api.post("/auth/register", credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getMe(): Promise<AuthResponse> {
    try {
      const response = await api.get("/auth/me");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
