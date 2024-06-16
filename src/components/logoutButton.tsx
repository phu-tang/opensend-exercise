import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { resetAuthAction } from '../reducers/authReducer'

const Layout = () => {
  const dispatch = useDispatch()

  return (
    <Button type='default' onClick={() => dispatch(resetAuthAction())}>
      Logout
    </Button>
  )
}

export default Layout
