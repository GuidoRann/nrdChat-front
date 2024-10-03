import { useState } from 'react';
import UserService from '../../service/UserService';
import { profileProps } from '../../types/UserTypes';

export const useManagementProfile = () => {
  
  const [profileInfo, setProfileInfo] = useState<profileProps>({
    name: "",
    email: "",
    role: "",
  });
  
  const fetchProfileInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await UserService.getProfile(token);
      
      setProfileInfo(response.userChat);
    } catch (error) {
      console.log("error fetching info: ", error);
    }
  };

  return {
    profileInfo,
    setProfileInfo,
    fetchProfileInfo,
  }

}
