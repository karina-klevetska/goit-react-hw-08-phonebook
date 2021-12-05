import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const successToast = () => {
  return toast.success('Success!', {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  })
}

export const errorLoginToast = () => {
  return toast.error('Wrong email or password. Please try again', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  })
}

export const registerErrorToast = () => {
  return toast.error('A user with this name is already registered', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  })
}
