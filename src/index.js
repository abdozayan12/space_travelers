import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './App';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
=======
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
>>>>>>> origin/feature/fetch_mission_data
  </React.StrictMode>,
);
