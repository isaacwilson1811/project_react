import create from 'zustand';
import { persist } from 'zustand/middleware';
import { getFakeText } from '../api/getFakeText';

export const useBlogStore = create(persist(
  (set, get) => ({
    storageIsEmpty: true,
    posts: [],
    checkStorageIsEmpty: () => {
      return get().storageIsEmpty ? true : false
    },
    fetchPosts: async () => {
      const fakePosts = await getFakeText(10,Math.floor(Math.random()*(800-400)+400));
      set({posts: fakePosts});
      set({storageIsEmpty: false});
    },
    likeDataArr: [],
    addLikeDataObj: (obj) => {
      set({likeDataArr: [...get().likeDataArr, obj]})
    }
  }),
  {
    name: 'IsaacReactApp-BlogStore',
    version: 0.1,
    getStorage: () => localStorage
  }
))