import { UnknownAction } from '@reduxjs/toolkit'
import { path } from 'lodash/fp'
import { baseapi } from './api'

type AuthState = {
  accessToken: string | null
  client: string | null
  refreshToken: string | null
}

export const resetAuthActionType = 'auth/reset'

export const resetAuthAction = () => ({
  type: resetAuthActionType
})

const initalState = {
  accessToken: null,
  client: null,
  refreshToken: null
} as AuthState

const reducer = (state = initalState, action: UnknownAction) => {
  if (baseapi.endpoints.login.matchFulfilled(action)) {
    return {
      accessToken: path('payload.tokens.accessToken', action),
      client: path('payload.tokens.clientToken', action),
      refreshToken: path('payload.tokens.refreshToken', action)
    }
  }

  if (baseapi.endpoints.login.matchRejected(action)) {
    return initalState
  }
  if (baseapi.endpoints.login.matchPending(action)) {
    return initalState
  }

  if (action.type === resetAuthActionType) {
    return initalState
  }
  return state
}

export default reducer
