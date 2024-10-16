import axios, {AxiosError} from "axios";

export default class FriendshipService {
  static BASE_URL = "http://localhost:8080";

  static async saveFriendship( user: any, friend: any, token: string | null ) {
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

  static async getFriendship(userEmail: string, friendEmail: string, token: string | null) {
    try {
      console.log("Enviando petición getFriendship...");
      const response = await axios.get(`${this.BASE_URL}/auth/get-friendship`, 
        {
          params: {
            userEmail,
            friendEmail,
          },
          headers: {
            Authorization: `Bearer ${token}`
          },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getFriendList(token: string | null) {
    try {
      console.log("Enviando petición getFriendList...");
      const response = await axios.get(`${this.BASE_URL}/auth/get-friendlist`, 
        {
          headers: {
            Authorization: `Bearer ${token}`
         },
        });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async acceptFriend( user: any, friend: any, token: string | null ) {
    try {
      console.log("Enviando peticion acceptFriend...");
      const response = await axios.put(
        `${this.BASE_URL}/auth/accept-friend`,
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

  static async deleteFriend( user: any, friend: any, token: string | null ) {
    try {
      console.log("Enviando petición deleteFriend...");
      const response = await axios.delete(
        `
        ${this.BASE_URL}/auth/delete-friend`,
        {
          data: {
            user,
            friend,
          },
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
}
