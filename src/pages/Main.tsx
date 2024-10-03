import { useEffect } from 'react';
import { Profile } from '../components/profile/Profile';
import { useManagementFriends } from '../components/hooks/useManagementFriends';

export default function Main() {
  const getActualFriendList = useManagementFriends(); 

  useEffect(() => {
    getActualFriendList;
  }, [ getActualFriendList ]);
  
  return (
    <Profile />
  );
}
