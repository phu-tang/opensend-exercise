import React, { useEffect } from 'react'
import { path } from 'lodash/fp'
import { useSelector } from 'react-redux'
import { storeIdSelector } from '../selectors/userInfoSelector'
import { useLazyGetStoreInfoQuery } from '../reducers/api'
import { Spin } from 'antd'
import LogoutButton from '../components/logoutButton'
import { useNavigate } from 'react-router-dom'

const Onboard = () => {
  const storeId = useSelector(storeIdSelector)
  const navigate = useNavigate()
  const [getStore, { data, isLoading }] = useLazyGetStoreInfoQuery()
  useEffect(() => {
    if (storeId) {
      getStore(storeId)
    }
  }, [storeId, getStore])

  useEffect(() => {
    const status = path('store.onboarding_procedure.onboarding_status', data)
    if (data && status === 'DONE') {
      navigate('/dashboard', { replace: true })
    }
  }, [data, navigate])
  if (isLoading) {
    return <Spin />
  }
  return (
    <div>
      <div>Onboard</div>
      <LogoutButton />
    </div>
  )
}

export default Onboard
