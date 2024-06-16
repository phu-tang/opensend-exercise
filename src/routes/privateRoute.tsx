import React from 'react'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { isAuthenticatedSelector } from '../selectors/authenticates'

type PrivateRoute = {
  children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRoute) => {
  const isAuthen = useSelector(isAuthenticatedSelector)

  if (isAuthen) {
    return children
  }
  return <Navigate to={'/'} replace />
}

export default PrivateRoute
