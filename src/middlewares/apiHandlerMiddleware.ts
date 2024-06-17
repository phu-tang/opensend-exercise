import { Middleware } from '@reduxjs/toolkit'
import { path } from 'lodash/fp'
import { RootState } from '../reducers'
import { isRejectedWithValue } from '@reduxjs/toolkit/react'
import { message } from 'antd'
import { resetAuthAction } from '../reducers/authReducer'

export const handleUnAuthorizeApiMiddleware: Middleware<unknown, RootState> =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action)) {
      const status = path('payload.status', action)
      const errorMessage = path('payload.data.message', action)
      if (status === 401) {
        dispatch(resetAuthAction())
      }
      if (errorMessage) {
        message.error(errorMessage)
      }
    }
    return next(action)
  }
