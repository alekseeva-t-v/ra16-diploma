import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import store from './store/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
