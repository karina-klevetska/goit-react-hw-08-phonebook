import { Routes, Route } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Suspense, useEffect } from 'react'
import { Navigation } from 'Components/Navigation/Navigation'
import { PrivateRoute } from 'routes/PrivateRoute'
import { PublicRoute } from 'routes/PublicRoute'
import { refreshCurrentUser } from 'redux/auth/auth-operations'
import { isFetchingCurrentUser } from 'redux/auth/auth-selectors'
import { lazy } from 'react'
import { Loader } from 'Components/Loader/Loader'
import 'App.css'

const HomePage = lazy(() => import('Pages/HomePage/HomePage'))
const LoginPage = lazy(() => import('Pages/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('Pages/RegisterPage/RegisterPage'))
const ContactsPage = lazy(() => import('Pages/ContactsPage/ContactsPage'))

function App() {
  const isFetching = useSelector(isFetchingCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshCurrentUser())
  }, [dispatch])

  return (
    !isFetching && (
      <div className='App'>
        <header>
          <h1 className='logo'>Phonebook</h1>
          <Navigation />
        </header>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<PrivateRoute component={HomePage} />} />
            <Route
              path='/login'
              element={<PublicRoute component={LoginPage} />}
            />
            <Route
              path='/register'
              element={<PublicRoute component={RegisterPage} />}
            />
            <Route
              path='/contacts'
              element={<PrivateRoute component={ContactsPage} />}
            />
          </Routes>
        </Suspense>
      </div>
    )
  )
}

export default App
