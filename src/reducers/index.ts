import { combineReducers } from '@reduxjs/toolkit'
import auth from './authReducer'

const rootReducer = combineReducers({ auth })

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
