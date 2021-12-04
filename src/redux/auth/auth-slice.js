import { createSlice } from '@reduxjs/toolkit'
import {
  userRegOperation,
  userLogInOperation,
  userLogoutOperation,
  refreshCurrentUser,
} from './auth-operations'

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [userRegOperation.fulfilled]: (state, { payload }) => {
      state.user = payload.user
      state.token = payload.token
      state.isLoggedIn = true
    },
    [userLogInOperation.fulfilled]: (state, { payload }) => {
      state.user = payload.user
      state.token = payload.token
      state.isLoggedIn = true
    },
    [userLogoutOperation.fulfilled]: (state, _) => {
      state.user = { name: null, email: null }
      state.token = null
      state.isLoggedIn = false
    },
    [refreshCurrentUser.pending]: (state, _) => {
      state.isFetchingCurrentUser = true
    },
    [refreshCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.isLoggedIn = true
      state.isFetchingCurrentUser = false
    },
    [refreshCurrentUser.rejected]: (state, _) => {
      state.isFetchingCurrentUser = false
    },
  },
})

export default authSlice.reducer
