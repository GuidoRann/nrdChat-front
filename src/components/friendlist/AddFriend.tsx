import { useState } from "react";
import UserService from "../../service/UserService";
import FriendshipService from "../../service/FriendshipService";
import { modalProps } from '../../types/FriendTypes';
import { useManagementFriends } from '../hooks/useManagementFriends';


export default function AddFriend({ isOpen, onClose }: modalProps) {
  const [contactIsPresent, setContactIsPresent] = useState<boolean>(false);
  const [contactEmail, setContactEmail] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [profile, setProfile] = useState<String>("");
  const { getActualFriendList } = useManagementFriends();

  const handleContactIsPresent = async () => {
    const token = localStorage.getItem("token");

    try {
      const myUser = await UserService.getProfile(token);
      const friend = await UserService.getUser(token, contactEmail);

      FriendshipService.saveFriendship( myUser.userChat, friend.userChat, token );
    } catch (error) {
      throw error;
    }

    getActualFriendList()
    setIsSearching(false);
  };

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await UserService.getUser(token, contactEmail);

      setProfile(response.userChat.email);
      setContactIsPresent(true);
    } catch (error) {
      setProfile("");
      setContactIsPresent(false);
      console.log(error);
    }
  };

  const handleIsSearching = () => {
    setIsSearching(true);
    getUser();
  };

  const onImputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setContactEmail(e.target.value);
  };

  return (
    <>
      {isOpen && (
        <div className="animate-fade-in animate-duration-300 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <section className="bg-white h-[250px] w-[50%] flex flex-col items-center rounded-2xl">
            <div className="w-full flex flex-col items-center text-gray-500 font-poppins text-xl font-bold ">
              <div className="flex justify-between w-[90%] py-5">
                <h1>AÑADIR AMIGOS</h1>
                <button
                  className="flex justify-end font-semibold hover:text-gray-400"
                  onClick={onClose}
                >
                  X
                </button>
              </div>
              <div className="py-3">
                <h3>Puedes agregar contactos con su email.</h3>
                <label className="flex flex-row gap-2 py-2">
                  <input
                    className="p-2"
                    type="text"
                    name=""
                    id=""
                    placeholder="Buscar contacto"
                    onChange={(e) => onImputChange(e)}
                  />
                  <button
                    className="bg-gray-200 font-medium px-4 py-3 rounded-xl"
                    onClick={handleIsSearching}
                  >
                    Enviar
                  </button>
                </label>
              </div>
              {isSearching ? (
                <>
                  {contactIsPresent ? (
                    <div className="bg-blue-300 p-2 flex justify-between items-center w-[90%]">
                      {profile}
                      <button
                        className="bg-red-300 rounded-xl text-sm font-medium p-2"
                        onClick={handleContactIsPresent}
                      >
                        Agregar
                      </button>
                    </div>
                  ) : (
                    <h3>No se encontró el contacto</h3>
                  )}
                </>
              ) : (
                ""
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
