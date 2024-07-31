import axios from "axios";

export default class MessegeService {
  static BASE_URL = "http://localhost:8080/messages";

  static async getMesseges() {
    try {
      const response = await axios.get(`${this.BASE_URL}/auth/getMessages`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
