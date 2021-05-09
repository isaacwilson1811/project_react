import create from 'zustand';
import { persist } from 'zustand/middleware';
import { getFakeText } from '../api/getFakeText';

export const useBlogStore = create(persist(
  (set, get) => ({
    storageIsEmpty: true,
    arr: [],
    pushToArr: () => {
      get().arr.push('post');
      set({ arr: [...get().arr, 'post2'] });
    },
    resetArr: () => set({ arr: [] }),
    checkStorageIsEmpty: () => {
      return get().storageIsEmpty ? true : false
    },
    initArr: async () => {
      const fakeBlog = await getFakeText(10,Math.floor(Math.random()*(800-400)+400));
      set({arr: fakeBlog});
      set({storageIsEmpty: false});
    }
  }),
  {
    name: 'zustand-store',
    version: 0.1,
    getStorage: () => localStorage
  }
))