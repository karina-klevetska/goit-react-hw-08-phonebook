import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import shortid from 'shortid'
import { addContact } from 'redux/contacts/contacts-operations'
import { getContacts } from 'redux/contacts/contacts-selectors'
import { Button } from '@mui/material'
import { Input } from '@mui/material'
import './ContactForm.css'

function ContactForm() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const dispatch = useDispatch()
  const contacts = useSelector(getContacts)

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeNumber = (e) => {
    setNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const contactObj = {
      id: shortid(),
      name,
      number,
    }

    if (contacts.map((contact) => contact.name).includes(contactObj.name)) {
      alert(`${contactObj.name} is already in contacts`)
    } else {
      dispatch(addContact(contactObj))
    }
    resetForm()
  }

  const resetForm = () => {
    setName('')
    setNumber('')
  }

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <Input
        className='input'
        id='input-name'
        type='text'
        name='name'
        value={name}
        onChange={handleChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        placeholder='Enter name'
        required
      />
      <Input
        className='input'
        id='input-tel'
        type='tel'
        name='number'
        value={number}
        onChange={handleChangeNumber}
        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
        title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
        placeholder='Enter number'
        required
      />
      <Button type='submit' variant='contained'>
        Add contact
      </Button>
    </form>
  )
}

export default ContactForm
