import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const Main = React.lazy(() => import('./pages/Main'));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
