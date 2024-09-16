import { useEffect, useState } from "react";
import UserService from "../service/UserService";
import AddFriend from "../components/AddFriend";
import FriendList from "../components/FriendList";

export default function Main() {
  const img = "/images/userDef.webp";

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  type profileProps = {
    name: string;
    email: string;
    role: string;
  };

  const [profileInfo, setProfileInfo] = useState<profileProps>({
    name: "",
    email: "",
    role: "",
  });

  const handleLogOut = () => {
    UserService.logout;
    window.location.href = "/login";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const fetchProfileInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await UserService.getProfile(token);

      setProfileInfo(response.userChat);
    } catch (error) {
      console.log("error fetching info: ", error);
    }
  };

  const handleFriendButton = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="w-screen h-screen bg-slate-700 flex justify-center items-center">
      <AddFriend isOpen={isModalOpen} onClose={handleCloseModal} />
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
            <FriendList />
          </div>
        </div>
      </div>
    </div>
  );
}
