import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './root-reducer'
import { rootSaga } from './root-saga'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const sagaMiddware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const middleWares = [logger]
const middleWares = [process.env.NODE_ENV === 'development' && logger, sagaMiddware].filter(Boolean)

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// const composedEnhancers = compose(applyMiddleware(...middleWares))
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddware.run(rootSaga)

export const persistor = persistStore(store)