import FriendshipService from '../../service/FriendshipService';
import { useFriendStore } from '../../stores/Friend.store';
import { modalProps } from '../../types/FriendTypes';
import { useManagementFriends } from '../hooks/useManagementFriends';
import Usertag from './Usertag';

export default function AcceptFriend({ isOpen, onClose }: modalProps) {

  const { storePendingFriends } = useFriendStore();
  const { getActualFriendList } = useManagementFriends();

  const handleFriendAcceptance = async ( user: any, friend: any ) => {
    const token = localStorage.getItem("token");

    try {
      // Llamada para aceptar al amigo
       await FriendshipService.acceptFriend( user, friend, token );
      // Actualizar la lista de amigos después de la aceptación
      getActualFriendList();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteFriend = async ( user: any, friend: any) => {
    const token = localStorage.getItem("token");

    try {
      // // Llamada para eliminar al amigo
       await FriendshipService.deleteFriend( user, friend, token );
      // Actualizar la lista de amigos
      getActualFriendList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="animate-fade-in animate-duration-300 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <section className="bg-white h-[250px] w-[50%] flex flex-col items-center rounded-2xl">
            <div className="w-full flex flex-col items-center text-gray-500 font-poppins text-xl font-bold overflow-y-auto">
              <div className="flex justify-between w-[90%] py-5">
                <h1>Amigos Pendientes</h1>
                <button
                  className="flex justify-end font-semibold hover:text-gray-400"
                  onClick={onClose}
                >
                  X
                </button>
              </div>
              <div className="py-3 ">
              {storePendingFriends.map(({ friendshipId, friend, user }: any) => (
                <div key={friendshipId} className="flex items-center justify-between mb-2">
                <Usertag name={user.name} />
                  <div className="flex p-5">
                    <button className="mr-2" onClick={() => handleFriendAcceptance(user, friend)}>Accept</button>
                    <button onClick={() => handleDeleteFriend(user, friend)}>Cancelar</button>
                  </div>
                </div>
              ))}
              </div>
              
            </div>
          </section>
        </div>
      )}
    </>
  )
}
