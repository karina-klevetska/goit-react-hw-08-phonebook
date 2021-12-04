import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { isLoggedIn } from 'redux/auth/auth-selectors'

export const PrivateRoute = ({ component: C }) => {
  const isAuth = useSelector(isLoggedIn)
  return <>{isAuth ? <C /> : <Navigate to='/login' />}</>
}
