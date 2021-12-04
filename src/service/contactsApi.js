import axios from 'axios'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const fetchContacts = async () => {
  let { data } = await axios.get('/contacts')
  return data
}

export const addContact = async (contact) => {
  let { data } = await axios.post('/contacts', contact)
  return data
}

export const deleteContact = async (id) => {
  await axios.delete(`/contacts/${id}`)
  return id
}
