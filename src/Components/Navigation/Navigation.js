import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { isLoggedIn } from 'redux/auth/auth-selectors'
import { UserMenu } from 'Components/UserMenu/UserMenu'
import { AuthNavigation } from 'Components/AuthNavigation/AuthNavigation'
import './Navigation.css'

export const Navigation = () => {
  const isAuth = useSelector(isLoggedIn)
  return (
    <div className='nav-wrapper'>
      <ul className='basic-nav-list'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active' : 'link')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contacts'
            className={({ isActive }) => (isActive ? 'active' : 'link')}
          >
            Contacts
          </NavLink>
        </li>
      </ul>

      {isAuth ? <UserMenu /> : <AuthNavigation />}
    </div>
  )
}
