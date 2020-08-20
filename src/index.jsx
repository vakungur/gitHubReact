import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.scss';

UIkit.use(Icons);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

serviceWorker.unregister();
