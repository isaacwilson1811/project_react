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
    checkStorageIsEmpty: () => {
      return get().storageIsEmpty ? true : false
    },
    checkUserExists: (emailCheck) => {
      let found = false;
      console.log('checking for '+emailCheck);
      get().users.forEach(user => {
        console.log('looking at '+user.email);
        if (user.email == emailCheck){
          console.log('user is in the store');
          found = true;
        }else{
          console.log('user not found');
        }
      })
      return (found);
    }
  }),
  {
    name: 'IsaacReactApp-UserStore',
    version: 0.1,
    getStorage: () => localStorage
  }
))