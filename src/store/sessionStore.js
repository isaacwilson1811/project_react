import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useSessionStore = create(persist(
  (set, get) => ({
    currentUser: null,
    loggedIn: false,
    logIn: (user) => {
      set({currentUser: user})
      set({loggedIn: true})
    },
    logOut: () => {
      set({currentUser: null})
      set({loggedIn: false})
    }
  }),
  {
    name: 'IsaacReactApp-SessionStore',
    version: 0.01,
    getStorage: () => sessionStorage
  }
))