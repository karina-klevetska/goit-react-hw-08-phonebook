import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const HomePage = () => {
  return (
    <>
      <h1 className='title home-title'>Your best phonebook</h1>
      <p className='home-p'>Keep safe your contacts!</p>
      <Button variant='contained'>
        <Link className='link' to='/contacts'>
          My contacts
        </Link>
      </Button>
    </>
  )
}

export default HomePage
