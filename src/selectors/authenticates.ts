import { path } from 'lodash/fp'
import { RootState } from '../reducers'

export const isAuthenticatedSelector = (state: RootState) => {
  const token = path('auth.authorization', state)
  const client = path('auth.client', state)
  return token && client
}
