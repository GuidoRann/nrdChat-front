import { useState, useEffect } from 'react';
import UserService from '../../service/UserService';
import AddFriend from '../friendlist/AddFriend';
import FriendList from '../friendlist/FriendList';
import { useManagementFriends } from '../hooks/useManagementFriends';
import { useManagementProfile } from '../hooks/useManagementProfile';
import { useFriendStore } from '../../stores/Friend.store';
import AcceptFriend from '../friendlist/AcceptFriend';

export const Profile = () => {

  const img = "/images/userDef.webp";

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPendingModalOpen, setIsPendingModalOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const { profileInfo, fetchProfileInfo } = useManagementProfile();
  const { getActualFriendList } = useManagementFriends();
  const { storePendingFriends } = useFriendStore();

  useEffect(() => {
    fetchProfileInfo();
    getActualFriendList();
  }, []);

  const handleLogOut = () => {
    UserService.logout;
    localStorage.clear();
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
    <div className="w-full h-full bg-slate-700 flex justify-center items-center">
     
     <AcceptFriend isOpen={isPendingModalOpen} onClose={() => setIsPendingModalOpen(false)} />
     <AddFriend isOpen={isModalOpen} onClose={handleCloseModal} />
      
      <div className="bg-gray-300 w-full h-full flex flex-col items-center py-2 gap-3 rounded-lg">
        <div>
            <button
              className="hover:text-red-500 font-black"
              onClick={handleLogOut}
            >
              Cerrar sesión
            </button>
        </div>

        <div className="flex justify-center items-center bg-white rounded-md w-[90%] p-2">
          <div className="w-24 bg-blue-300 rounded-full">
            <img src={img} alt="" />
          </div>
          <div className="flex flex-col w-full h-full gap-4">
            <div className="w-[90%] h-full flex items-center px-4">
              <p>{profileInfo?.name}</p>
            </div>
          </div>
        </div>

        {/* BOTONES DE AMISTAD */}
        <div className="bg-white w-[90%] h-full rounded-md flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-row justify-center bg-blue-300 w-[90%] rounded-lg p-1">
            <button onClick={handleFriendButton}>Agregar contacto</button>
          </div>
          <div onClick={handlePendingButton} className="flex flex-row gap-4 justify-center bg-green-300 rounded-lg w-[90%] p-1 hover: cursor-pointer">
            amigos pendientes { storePendingFriends.length > 9 ? '9+' : storePendingFriends.length } 
          </div>
        </div>
          
        {/* FRIENDLIST */}
        <div className="w-[90%] h-[65%] bg-white p-2 rounded-md flex flex-col gap-2">
          <label>
            <input
              type="text"
              placeholder="Buscar un contacto"
              className="bg-gray-100 w-full rounded-xl text-center p-1 focus:outline-blue-300" // TODO: Cambiar el color del borde al hacer click
            />
          </label>
          <div className="flex flex-col gap-2 h-full rounded-md text-center text-white p-1 overflow-y-scroll scrollbar-none">
            <FriendList />
          </div>
        </div>

      </div>
    </div>
  )
}
