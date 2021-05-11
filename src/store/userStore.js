import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(persist(
  (set, get) => ({
    storageIsEmpty: true,
    users: [],
    addUser: (newUser) => {
      set({ users: [...get().users, newUser] });
      set(get().storageIsEmpty = false);
    },
    clearUsers: () => set({ users: [] }),
    checkStorageIsEmpty: () => {
      return get().storageIsEmpty ? true : false
    }
  }),
  {
    name: 'IsaacReactApp-UserStore',
    version: 0.1,
    getStorage: () => localStorage
  }
))