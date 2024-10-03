import { useState, useEffect } from 'react';
import UserService from '../../service/UserService';
import AddFriend from '../friendlist/AddFriend';
import FriendList from '../friendlist/FriendList';
import { useManagementFriends } from '../hooks/useManagementFriends';
import { useManagementProfile } from '../hooks/useManagementProfile';
import { useFriendStore } from '../../stores/Friend.store';
import AcceptFriend from '../friendlist/AcceptFriend';

export const Profile = () => {

  const handleClick = () => {
    // Lógica para abrir modal y mostrar lista de amigos pendientes
  }

  const img = "/images/userDef.webp";

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPendingModalOpen, setIsPendingModalOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const { profileInfo, fetchProfileInfo } = useManagementProfile();
  const { getActualFriendList } = useManagementFriends();
  const { storeFriendlist, storeAcceptedFriends, storePendingFriends } = useFriendStore();

  useEffect(() => {
    fetchProfileInfo();
    getActualFriendList();
  }, []);

  const handleLogOut = () => {
    UserService.logout;
    window.location.href = "/login";
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFriendButton = () => {
    setIsModalOpen(true);
  };

  const handlePendingButton = () => {
    setIsPendingModalOpen(true);
  }

  return (
      <div className="w-screen h-screen bg-slate-700 flex justify-center items-center">
      
      <AddFriend isOpen={isModalOpen} onClose={handleCloseModal} />
      <AcceptFriend isOpen={isPendingModalOpen} onClose={() => setIsPendingModalOpen(false)} />
      <div className="bg-gray-300 w-1/4 h-5/6 flex flex-col items-center pt-6 gap-4 rounded-lg">
        <div className="w-[90%] h-32 bg-white rounded-md flex items-center p-2">
          <div className="w-28 h-28 bg-blue-300 rounded-full">
            <img src={img} alt="" />
          </div>
          <div className="flex flex-col w-[70%] h-full gap-4">
            <div className="text-center h-4/5 flex flex-row items-center justify-between px-4">
              <p>{profileInfo?.name}</p>
              <button
                className="hover:text-red-500 font-black"
                onClick={handleLogOut}
              >
                X
              </button>
            </div>
            {/* TODO: darle utilidad y estilo a los botones */}
            <div className="h-1/5 flex flex-row gap-4 justify-center">
              <button onClick={handleFriendButton}>Agregar contacto</button>
            </div>
            <div onClick={handlePendingButton} className="hover: cursor-pointer">
              amigos pendientes { storePendingFriends.length > 9 ? '9+' : storePendingFriends.length } 
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[75%] bg-white p-2 rounded-md flex flex-col gap-2">
          <label>
            <input
              type="text"
              placeholder="Buscar un contacto"
              className="bg-gray-100 w-full rounded-xl text-center p-1" // TODO: Cambiar el color del borde al hacer click
            />
          </label>
          <div className="flex flex-col gap-1 bg-blue-500 h-[93%] rounded-md text-center text-white p-1 overflow-y-auto">
            Contactos
            <div></div>
            <FriendList />
          </div>
        </div>
      </div>
    </div>
  )
}
