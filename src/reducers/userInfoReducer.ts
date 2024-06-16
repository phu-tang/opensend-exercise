import { UnknownAction } from '@reduxjs/toolkit'
import { path } from 'lodash/fp'
import { resetAuthActionType } from './authReducer'
import { baseapi } from './api'

type useInfoState = {
  user: unknown | null
  view: string | null // we can defint enum if there is a fit of view type
  access: unknown | null
}

const initalState = {
  user: null,
  view: null,
  access: null
} as useInfoState

const reducer = (state = initalState, action: UnknownAction) => {
  if (baseapi.endpoints.login.matchFulfilled(action)) {
    return {
      user: path('payload.user', action),
      view: path('payload.view.type', action),
      access: path('payload.view.access', action)
    }
  }

  if (baseapi.endpoints.login.matchRejected(action)) {
    return initalState
  }
  if (baseapi.endpoints.login.matchPending(action)) {
    return initalState
  }
  if (path('type', action) === resetAuthActionType) {
    return initalState
  }
  return state
}

export default reducer
