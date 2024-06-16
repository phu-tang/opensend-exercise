import { path, pathOr } from 'lodash/fp'
import { RootState } from '../reducers'

export const isAuthenticatedSelector = (state: RootState) => {
  const token = path('auth.accessToken', state)
  const client = path('auth.client', state)
  return token && client
}

export const getAccessTokenSelector = (state: RootState) => {
  const token = path('auth.accessToken', state)
  if (token) {
    return `Bearer ${token}`
  }
  return null
}

export const getClientSelector = (state: RootState) => {
  return pathOr(null, 'auth.client', state)
}
