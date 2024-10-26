import { useEffect } from 'react';
import { Profile } from '../components/profile/Profile';
import { useManagementFriends } from '../components/hooks/useManagementFriends';

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
        <h1>Main</h1>
      </div>
    </div>
  );
}
