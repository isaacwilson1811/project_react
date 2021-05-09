import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useSessionStore = create(persist(
  (set, get) => ({
    currentUser: null,
    loggedIn: false,
    logIn: (input) => {
      set(get().currentUser = input);
      set(get().loggedIn = true)
    },
    logOut: () => {
      set(get().currentUser = null);
      set(get().loggedIn = false);
    }
  }),
  {
    name: 'IsaacReactApp-SessionStore',
    version: 0.01,
    getStorage: () => sessionStorage
  }
))