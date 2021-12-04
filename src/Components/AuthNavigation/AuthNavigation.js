import { NavLink } from 'react-router-dom'

export const AuthNavigation = () => {
  return (
    <ul className='basic-nav-list'>
      <li>
        <NavLink
          to='/login'
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/register'
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          Register
        </NavLink>
      </li>
    </ul>
  )
}
