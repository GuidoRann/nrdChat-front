import { useEffect } from "react";
import Usertag from "./Usertag";
import { useManagementFriends } from './friendlist/useManagementFriends';

export default function FriendList() {
 const { 
    acceptedFriends,
    pendingFriends,
    handleFriendAcceptance,
    getActualFriendList
 } = useManagementFriends();

  useEffect(() => {
    getActualFriendList();
  }, []);

  return (
    <div>
      {acceptedFriends.map(({ friendId, friend }: any) => (
        <Usertag key={friendId} name={friend.name} />
      ))}
    </div>
  );
}
