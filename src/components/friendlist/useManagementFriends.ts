import {useState} from "react";
import FriendshipService from "../../service/FriendshipService";
import { newFriend } from '../../types/FriendTypes';

export const useManagementFriends = () => {
  const [friendList, setFriendList] = useState([]);
  const [acceptedFriends, setAcceptedFriends] = useState<newFriend[]>([]);
  const [pendingFriends, setPendingFriends] = useState<newFriend[]>([]);


  const getActualFriendList = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await FriendshipService.getFriendList(token);
      const friendList = response.friendshipList;
      setFriendList(friendList);

      const acceptedFriends: newFriend[] = [];
      const pendingFriends: newFriend[] = [];

      friendList.forEach( ( friend: newFriend ) => {
        if (friend.friendshipState === "ACCEPTED") {
          acceptedFriends.push(friend);
        } else if (friend.friendshipState === "PENDING") {
          pendingFriends.push(friend);
        }
      });

      setAcceptedFriends(acceptedFriends);
      setPendingFriends(pendingFriends);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFriendAcceptance = async (friendId: string) => {
    try {
      // Llamada para aceptar al amigo
      // await FriendshipService.acceptFriend(friendId);
      // Actualizar la lista de amigos después de la aceptación
      getActualFriendList();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    friendList,
    acceptedFriends,
    pendingFriends,
    handleFriendAcceptance,
    getActualFriendList
  };
};
