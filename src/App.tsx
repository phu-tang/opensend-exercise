import { ConfigProvider } from 'antd'
import React from 'react'
import Router from './routes'

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#288364',
        borderRadius: 2,
        fontFamily: 'Darker Grotesque',
        fontWeightStrong: 400
      }
    }}
  >
    <Router />
  </ConfigProvider>
)

export default App
