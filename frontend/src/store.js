import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = configureStore({
  reducer: rootReducer
}); 

export default store;