import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useDrawingStore = create(persist(
  (set, get) => ({
    dataURL: '',
    saveDataURL: (url) => {
      set({dataURL: url.toString()})
    },
    loadDataURL: () => {
      return get().dataURL
    }
  }),
  {
    name: 'IsaacReactApp-DrawingStore',
    version: 0.1,
    getStorage: () => localStorage
  }
))