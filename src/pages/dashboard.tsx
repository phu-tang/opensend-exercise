import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { storeIdSelector } from '../selectors/userInfoSelector'
import { useLazyGetStoreInfoQuery } from '../reducers/api'
import { Spin } from 'antd'

const Dashboard = () => {
  const storeId = useSelector(storeIdSelector)
  const [getStore, { data, isLoading }] = useLazyGetStoreInfoQuery()
  useEffect(() => {
    if (storeId) {
      getStore(storeId)
    }
  }, [storeId, getStore])

  useEffect(() => {}, [data])
  if (isLoading) {
    return <Spin />
  }
  return <div>Dashboard</div>
}

export default Dashboard
