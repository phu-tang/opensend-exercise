import { useEffect } from 'react'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { isAuthenticatedSelector } from '../selectors/authenticates'

type PrivateRoute = {
  children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRoute) => {
  const isAuthen = useSelector(isAuthenticatedSelector)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthen) {
      navigate('/', { replace: true })
    }
  }, [isAuthen, navigate])
  if (isAuthen) {
    return children
  }
  return null
}

export default PrivateRoute
