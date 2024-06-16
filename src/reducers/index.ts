import { combineReducers } from '@reduxjs/toolkit'
import auth from './authReducer'
import userInfo from './userInfoReducer'
import { baseapi } from './api'

const rootReducer = combineReducers({ auth, userInfo, [baseapi.reducerPath]: baseapi.reducer })

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
