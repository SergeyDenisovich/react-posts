import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './store/store';

import ErrorBoundary from './components/ErrorBoundary';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
