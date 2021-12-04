import { configureStore } from '@reduxjs/toolkit'
import { contactFilter } from './contacts/contacts-reducers'
import authSlice from './auth/auth-slice'
import contactsReducer from './contacts/contacts-reducers'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    contacts: contactsReducer,
    filter: contactFilter,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  // devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store)
