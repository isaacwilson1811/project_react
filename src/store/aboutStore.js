import create from 'zustand';
import { persist } from 'zustand/middleware';
import { getFakeCompany } from '../api/getFakeCompany';

export const useAboutStore = create(persist(
  (set, get) => ({
    loading: true,
    hasData: false,
    checkHasData: () => {
      return get().hasData == true ? true : false
    },
    checkLoading: () => {
      return get().loading ? true : false
    },
    companyData: [],
    fetchData: async () => {
      const data = await getFakeCompany();
      set({companyData: data});
      set({loading: false});
      set({hasData: true});
    },
    loadDataFromStorage: () => {
      return get().companyData;
    }
  }),
  {
    name: 'IsaacReactApp-AboutStore',
    version: 0.1,
    getStorage: () => localStorage
  }
))