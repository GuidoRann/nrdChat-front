import { create } from 'zustand';
import { newFriend } from '../types/FriendTypes';
import { persist } from 'zustand/middleware';

interface FriendsStore {
  storeFriendlist: newFriend[];
  storeAcceptedFriends: newFriend[];
  storePendingFriends: newFriend[];
  setStoreFriendlist: (friends: newFriend[]) => void;
  setStoreAcceptedFriends: (friends: newFriend[]) => void;
  setStorePendingFriends: (friends: newFriend[]) => void;
}

export const useFriendStore = create<FriendsStore>()(
  persist(
    (set) => ({
      storeFriendlist: [],
      storeAcceptedFriends: [],
      storePendingFriends: [],
      setStoreFriendlist: (friends) => set({ storeFriendlist: friends }),
      setStoreAcceptedFriends: (friends) => set({ storeAcceptedFriends: friends }),
      setStorePendingFriends: (friends) => set({ storePendingFriends: friends }),
    }),
    { name: 'friendStore' }
  )
);