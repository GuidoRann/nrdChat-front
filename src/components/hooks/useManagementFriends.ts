import FriendshipService from "../../service/FriendshipService";
import { newFriend } from '../../types/FriendTypes';
import { useFriendStore } from '../../stores/Friend.store';

export const useManagementFriends = () => {
  const { 
    setStoreFriendlist, 
    setStoreAcceptedFriends, 
    setStorePendingFriends 
  } = useFriendStore();

  const getActualFriendList = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await FriendshipService.getFriendList(token);
      const friendList = response.friendshipList;
      setStoreFriendlist(friendList);

      const acceptedFriends: newFriend[] = [];
      const pendingFriends: newFriend[] = [];

      friendList.forEach((friend: newFriend) => {
        if (friend.friendshipState === 'ACCEPTED') {
          acceptedFriends.push(friend);
        } else if (friend.friendshipState === 'PENDING') {
          pendingFriends.push(friend);
        }
      });

      setStoreAcceptedFriends(acceptedFriends);
      setStorePendingFriends(pendingFriends);
    } catch (error) {
      console.log(error);
    }
  };


  return {
    getActualFriendList
  };
};
