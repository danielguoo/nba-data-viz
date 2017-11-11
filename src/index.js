import thunkMiddleware from 'redux-thunk'
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { fetchNBAData } from './actions'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
)

store
  .dispatch(fetchNBAData())
  .then(() => console.log(store.getState()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();