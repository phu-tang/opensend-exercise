import { eq, flow, path } from 'lodash/fp'

export const isAdminSelector = flow(path('userInfo.view'), eq('ADMIN'))
export const isClientSelector = flow(path('userInfo.view'), eq('CLIENT'))
export const storeIdSelector = path('userInfo.access.store_id')
