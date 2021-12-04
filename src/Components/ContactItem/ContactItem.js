import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from 'redux/contacts/contacts-operations'
import { getFilteredContacts } from 'redux/contacts/contacts-selectors'
import { fetchContacts } from 'redux/contacts/contacts-operations'
import { Loader } from 'Components/Loader/Loader'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@mui/material'
import './ContactItem.css'

const ContactItem = () => {
  const contactsList = useSelector(getFilteredContacts)
  const isLoading = useSelector((state) => state.contacts.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
      {isLoading && <Loader />}
      {contactsList.map(({ id, name, number }) => (
        <li key={id} className='contact-item'>
          <p>
            {name}: {number}
          </p>
          <Button
            type='button'
            variant='outlined'
            startIcon={<DeleteIcon />}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Button>
        </li>
      ))}
    </>
  )
}

export default ContactItem
