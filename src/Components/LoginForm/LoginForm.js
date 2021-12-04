import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogInOperation } from 'redux/auth/auth-operations'
import { Button } from '@mui/material'
import { Input } from '@mui/material'
import './LoginForm.css'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(userLogInOperation({ email, password }))
    resetForm()
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <Input
        className='input'
        id='login-email'
        type='email'
        name='email'
        onChange={handleChangeEmail}
        placeholder='Enter email'
        required
      />
      <Input
        className='input'
        id='login-pass'
        type='password'
        name='password'
        onChange={handleChangePassword}
        placeholder='Enter password'
        required
      />
      <Button type='submit' variant='contained'>
        Log in
      </Button>
    </form>
  )
}
