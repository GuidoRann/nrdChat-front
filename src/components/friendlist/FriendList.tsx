import { useFriendStore } from '../../stores/Friend.store';
import Usertag from "./Usertag";

export default function FriendList() {
 const { 
  storeAcceptedFriends,
 } = useFriendStore(); ;


  return (
    <div>
      {storeAcceptedFriends.map(({ friendshipId, friend }: any) => (
        <Usertag key={friendshipId} name={friend.name} />
      ))}
    </div>
  );
}
