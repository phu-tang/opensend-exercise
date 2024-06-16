import { UnknownAction } from '@reduxjs/toolkit'

type AuthState = {
  authorization: string | null
  client: string | null
}

const resetAuthActionType = 'auth/reset'

export const resetAuthAction = () => ({
  type: resetAuthActionType
})

const initalState = {
  authorization: null,
  client: null
} as AuthState

const reducer = (state = initalState, action: UnknownAction) => {
  if (action.type === resetAuthActionType) {
    return initalState
  }
  return state
}

export default reducer
