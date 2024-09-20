import { useManagementFriends } from './friendlist/useManagementFriends';

export const Profile = () => {

  const handleClick = () => {
    // Lógica para abrir modal y mostrar lista de amigos pendientes
  }

  const pendingFriends = useManagementFriends().pendingFriends;

  return (
    <div>
      <div onClick={handleClick}>
         amigos pendientes { pendingFriends.length > 9 ? '9+' : pendingFriends.length } 
      </div>
    </div>
  )
}
