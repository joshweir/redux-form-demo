import React from 'react'
// import ReactDOM from 'react-dom'
import { render } from 'react-snapshot'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import rootSaga from './sagas/index'
import './index.css'
import App from './App'
// import registerServiceWorker from './registerServiceWorker';

const initialState = window.__INITIAL_STATE__ || {}
const store = configureStore(initialState)
store.runSaga(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker();
