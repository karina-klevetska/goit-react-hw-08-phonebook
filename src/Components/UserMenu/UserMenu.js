import { useSelector, useDispatch } from 'react-redux'
import { userLogoutOperation } from 'redux/auth/auth-operations'
import { userEmail } from 'redux/auth/auth-selectors'
import { userName } from 'redux/auth/auth-selectors'
import { Button } from '@mui/material'
import './UserMenu.css'

export const UserMenu = () => {
  const email = useSelector(userEmail)
  const name = useSelector(userName)
  const dispatch = useDispatch()
  const logout = () => dispatch(userLogoutOperation())

  return (
    <div className='user-menu'>
      <p>
        <span>Welcome, {name}!</span>
      </p>
      <p>
        <span>{email}</span>
      </p>
      <Button type='button' onClick={logout} variant='text' color='secondary'>
        Log Out
      </Button>
    </div>
  )
}
