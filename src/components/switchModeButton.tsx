import { Switch } from 'antd'
import React from 'react'
import { isDarkModeSelector } from '../selectors/configSelector'
import { useDispatch, useSelector } from 'react-redux'
import { updateModeAction } from '../reducers/configReducer'

const Layout = () => {
  const isDarkMode = useSelector(isDarkModeSelector)
  const dispatch = useDispatch()
  return (
    <Switch
      style={{ margin: 16 }}
      checkedChildren='Dark'
      unCheckedChildren='Light'
      value={isDarkMode}
      onChange={(isDark) => dispatch(updateModeAction(isDark))}
    />
  )
}

export default Layout
