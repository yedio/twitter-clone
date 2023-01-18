import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import Router from './Router';

import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Suspense>
        <Router />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
