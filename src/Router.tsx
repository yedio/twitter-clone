import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import EventTracker from './components/EventTracker';
import Footer from './components/Footer';
import Header from './components/Header';
import { isLoginedAtom } from './state/Atom';

const Main = React.lazy(() => import('./pages/Main'));
const Auth = React.lazy(() => import('./pages/Auth'));

export default function Router() {
  const isLogined = useRecoilValue(isLoginedAtom);

  return (
    <BrowserRouter>
      <EventTracker />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
