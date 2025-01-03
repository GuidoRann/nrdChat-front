import axios from "axios";

export default class UserService {
  static BASE_URL = "http://localhost:8080";

  static async login(email: string, password: string) {
    try {
      const response = await axios.post(`${this.BASE_URL}/auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async register(userData: any) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/auth/register`,
        userData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getProfile(token: string | null) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/adminuser/get-profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getUser(token: string | null, email: string) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/adminuser/get-user/${email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }

  static isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  static isAdmin() {
    const role = localStorage.getItem("role");
    return role === "ADMIN";
  }

  static isUser() {
    const role = localStorage.getItem("role");
    return role === "USER";
  }
}
