import axios from "axios";

export default class UserService {
  static BASE_URL = "http://localhost:8080";

  static async saveFriendship(user: any, friend: any, token: string | null) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/adminuser/add-friend`,
        {
          user,
          friend,
        },
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

  static async getFriendList(token: string | null) {
    try {
      console.log('Enviando petición...');
      const response = await axios.get(`${this.BASE_URL}/auth/get-friendlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Cache-Control": "no-cache",
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static getFriends() {}
}
