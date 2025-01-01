import axios from "axios";

import { messageProps } from '../types/MessageTypes';

export default class MessegeService {
  static BASE_URL = "http://localhost:8080/messages";

  static async getMesseges( senderEmail: String, receiverEmail: String) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/adminuser/get-messages`,
        {
          params:{
            senderEmail, receiverEmail
          }
        }
      );
      
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async saveMessege(messege: messageProps) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/adminuser/save-message`,
         messege
        );

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async deleteMessege(messegeId: number) {
    try {
      const response = await axios.delete(
        `${this.BASE_URL}/adminuser/delete-message${messegeId}`,
      );      
      return response.data;
    } catch (error) {      
      throw error;
    }
  }


}
