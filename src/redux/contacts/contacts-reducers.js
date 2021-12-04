import { createReducer } from '@reduxjs/toolkit'
import { filterValue } from './contacts-actions'
import { fetchContacts, addContact, deleteContact } from './contacts-operations'
import { combineReducers } from 'redux'

export const contactFilter = createReducer('', {
  [filterValue]: (_, { payload }) => payload,
})

export const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
})

export const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
})

const contactsReducer = combineReducers({
  contactFilter,
  contacts,
  isLoading,
})

export default contactsReducer
