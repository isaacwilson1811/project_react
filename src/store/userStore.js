import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(persist(
  (set, get) => ({
    storageIsEmpty: true,
    users: [],
    addUser: (newUser) => {
      set({users: [...get().users, newUser]});
      set({storageIsEmpty: false});
    },
    checkStorageIsEmpty: () => {
      return get().storageIsEmpty ? true : false
    },
    checkUserExists: (emailCheck) => {
      let foundUser = null;
      get().users.forEach(user => {
        if (user.email == emailCheck){
          foundUser = user;
        }
      })
      return (foundUser);
    }
  }),
  {
    name: 'IsaacReactApp-UserStore',
    version: 0.1,
    getStorage: () => localStorage
  }
))