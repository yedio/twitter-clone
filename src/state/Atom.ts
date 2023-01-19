import { atom } from 'recoil';

export const isLoginedAtom = atom({
  key: 'isLogined',
  default: false,
});

export const isLoadingAtom = atom({
  key: 'isLoading',
  default: false,
});
