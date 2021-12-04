import { createAsyncThunk } from '@reduxjs/toolkit'
import * as contactsApi from 'service/contactsApi'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await contactsApi.fetchContacts()
    return contacts
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    const contacts = await contactsApi.addContact(contact)
    return contacts
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await contactsApi.deleteContact(id)
    } catch (error) {
      rejectWithValue(error)
    }
  }
)
