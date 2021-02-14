import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducers from './reducers'
export const store=createStore(rootReducers,applyMiddleware(logger));