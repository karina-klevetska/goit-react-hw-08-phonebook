import { useState } from 'react'
import { useDispatch } from 'react-redux'
import shortid from 'shortid'
import { userRegOperation } from 'redux/auth/auth-operations'
import { Button } from '@mui/material'
import { Input } from '@mui/material'

export const RegisterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const regNameId = shortid()
  const regMailId = shortid()
  const regPassId = shortid()

  const handleChangeUserName = (e) => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(userRegOperation({ name, email, password }))
    resetForm()
  }

  const resetForm = () => {
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <form className='register-form' onSubmit={handleSubmit}>
      <Input
        className='input'
        id={regNameId}
        type='text'
        name='email'
        onChange={handleChangeUserName}
        placeholder='Enter Name'
        required
      />
      <Input
        className='input'
        id={regMailId}
        type='email'
        name='email'
        onChange={handleChangeEmail}
        placeholder='Enter email'
        required
      />
      <Input
        className='input'
        id={regPassId}
        type='password'
        name='password'
        onChange={handleChangePassword}
        placeholder='Enter password'
        required
      />
      <Button type='submit' variant='contained'>
        Register
      </Button>
    </form>
  )
}
