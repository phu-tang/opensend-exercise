import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getAccessTokenSelector, getClientSelector } from '../selectors/authenticates'
import { RootState } from '.'

export type LoginRequest = {
  email: string
  password: string
}

// Define a service using a base URL and expected endpoints
export const baseapi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getAccessTokenSelector(getState() as RootState)
      if (token != null) {
        headers.set('authorization', token)
      }
      const client = getClientSelector(getState() as RootState)

      if (client != null) {
        headers.set('client', client)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation<unknown, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials
      })
    }),
    getStoreInfo: builder.query<unknown, string>({
      query: (id) => ({ url: `/store/${id}` })
    })
  })
})

export const { useLoginMutation, useLazyGetStoreInfoQuery } = baseapi
