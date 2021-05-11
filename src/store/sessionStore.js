import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useSessionStore = create(persist(
  (set, get) => ({
    currentUser: null,
    loggedIn: false,
    logIn: (obj) => {
      set(get().currentUser = obj);
      set(get().loggedIn = true)
      set(get().email = null);
      set(get().password = null);
    },
    logOut: () => {
      set(get().currentUser = null);
      set(get().loggedIn = false);
      set(get().email = null);
      set(get().password = null);
    }
  }),
  {
    name: 'IsaacReactApp-SessionStore',
    version: 0.01,
    getStorage: () => sessionStorage
  }
))