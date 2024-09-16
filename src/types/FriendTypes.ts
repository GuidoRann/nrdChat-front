export interface newFriend {
  friendId: string;
  friendshipState: string;
  friend: {
    name: string;
  };
}

export interface modalProps {
  isOpen: boolean;
  onClose: () => void;
}