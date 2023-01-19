import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { authService } from '../configFirebase';
import { isLoadingAtom, isLoginedAtom } from '../state/Atom';

export default function EventTracker() {
  const setIsLogined = useSetRecoilState(isLoginedAtom);
  const setIsLoading = useSetRecoilState(isLoadingAtom);
  const isLoading = useRecoilState(isLoadingAtom);

  useEffect(() => {
    setIsLoading(true);
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLogined(true);
      } else {
        setIsLogined(false);
      }
      setIsLoading(false);
    });
  }, []);
  return <div />;
}
