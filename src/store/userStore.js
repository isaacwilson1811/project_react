import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(persist(
  (set, get) => ({
    storageIsEmpty: true,
    users: [],
    addUser: () => {
      set({ users: [...get().users, 'newUser'] });
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