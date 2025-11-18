import zustandStorage from '@/utils/zustandStorage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UserStore {
  isGuest: boolean;
  user: any;
  setIsGuest: (isGuest: boolean) => void;
  setUser: (user: any) => any;
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      isGuest: false,
      user: null,
      setIsGuest: (isGuest: boolean) => set({ isGuest }),
      setUser: (user: any) => set({ user }),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useUserStore;
