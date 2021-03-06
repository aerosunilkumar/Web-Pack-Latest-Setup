import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';

const renderApp = () => {
  render(
    <AppContainer>
      <div>
        <App />
      </div>
    </AppContainer>,
    document.getElementById('root'),
  );
};

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./app', () => renderApp());
}

renderApp();