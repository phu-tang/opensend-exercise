import { configureStore } from '@reduxjs/toolkit'
import rootReducer, { RootState } from './reducers'
import storage from 'redux-persist/lib/storage'

import { baseapi } from './reducers/api'
import { handleUnAuthorizeApiMiddleware } from './middlewares/apiHandlerMiddleware'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig = {
  key: 'openSend',
  storage,
  whitelist: ['auth', 'userInfo']
}
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
      .concat(baseapi.middleware)
      .concat(handleUnAuthorizeApiMiddleware)
})

export default store
