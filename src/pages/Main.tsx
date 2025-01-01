import { useEffect } from 'react';
import { Profile } from '../components/profile/Profile';
import { useManagementFriends } from '../components/hooks/useManagementFriends';
import MessageMain from '../components/messages/MessageMain';

export default function Main() {
  const getActualFriendList = useManagementFriends(); 

  useEffect(() => {
    getActualFriendList;
  }, [ getActualFriendList ]);
  
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/6 justify-center items-center">
        <Profile />
      </div>
      
      <div className="w-5/6 bg-slate-500">
      <MessageMain />
      </div>
    </div>
  );
}
