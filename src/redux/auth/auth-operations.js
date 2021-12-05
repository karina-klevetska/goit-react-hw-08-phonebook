import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  successToast,
  errorLoginToast,
  registerErrorToast,
} from 'toasts/toasts'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

export const userRegOperation = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials)
      token.set(data.token)
      successToast()
      return data
    } catch (error) {
      return rejectWithValue(registerErrorToast(), error.message)
    }
  }
)

export const userLogInOperation = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials)
      token.set(data.token)
      successToast()
      return data
    } catch (error) {
      return rejectWithValue(errorLoginToast(), error.message)
    }
  }
)

export const userLogoutOperation = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout')
      token.unset()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue()
    }

    token.set(persistedToken)
    try {
      const { data } = await axios.get('/users/current')
      return data
    } catch (error) {
      console.log(error.message)
    }
  }
)
