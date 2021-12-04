import { useSelector, useDispatch } from 'react-redux'
import { getFilter } from 'redux/contacts/contacts-selectors'
import { filterValue } from 'redux/contacts/contacts-actions'
import { Input } from '@mui/material'
import './Filter.css'

const Filter = () => {
  const value = useSelector(getFilter)
  const dispatch = useDispatch()

  return (
    <div className='filter-container'>
      <Input
        className='input'
        id='filter'
        type='text'
        name='filter'
        value={value}
        onChange={(e) => dispatch(filterValue(e.target.value))}
        placeholder='Find contacts by name'
      />
    </div>
  )
}

export default Filter
