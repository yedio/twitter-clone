import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import Router from './Router';

import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './configFirebase';
import Loader from './components/Loader';

const container = document.getElementById('root');
const root = createRoot(container!);

const renderLoader = () => <p>Loading</p>;

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Suspense fallback={renderLoader()}>
          <Router />
          <Loader />
        </Suspense>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
