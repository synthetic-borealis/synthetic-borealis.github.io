import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import store from './app/store.ts';
import { Provider } from 'react-redux';

import i18n from './i18n/index.ts';

await i18n.configureI18n('en');

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
);
