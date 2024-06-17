import { UnknownAction } from '@reduxjs/toolkit'
import { pathOr } from 'lodash/fp'

type configState = {
  isDarkMode: boolean
}

const initialState = {
  isDarkMode: false
} as configState

const updateMode = 'config/updateMode'

export const updateModeAction = (isDarkMode: boolean) => ({
  type: updateMode,
  payload: isDarkMode
})

const reducer = (state = initialState, action: UnknownAction) => {
  if (action.type === updateMode) {
    return {
      isDarkMode: pathOr(false, 'payload', action) as boolean
    }
  }
  return state
}

export default reducer
