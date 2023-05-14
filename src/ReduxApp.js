import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import App from './App';

const store = createStore(rootReducer);

function ReduxApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default ReduxApp;
