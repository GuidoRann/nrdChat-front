import { useFriendStore } from '../../stores/Friend.store';
import Usertag from "./Usertag";

export default function FriendList() {
 const { 
  storeAcceptedFriends,
 } = useFriendStore(); ;


  return (
    <>
      {storeAcceptedFriends.map(({ friendshipId, user }: any) => (
        <Usertag key={friendshipId} name={user.name} />
      ))}
    </>
  );
}
