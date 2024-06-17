import { ConfigProvider, Layout, theme } from 'antd'
import React from 'react'
import Router from './routes'
import { useSelector } from 'react-redux'
import { isDarkModeSelector } from './selectors/configSelector'

const App: React.FC = () => {
  const isDarkMode = useSelector(isDarkModeSelector)
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#288364',
          borderRadius: 2,
          fontFamily: 'Darker Grotesque',
          fontWeightStrong: 400
        }
      }}
    >
      <Layout style={{ height: '100vh', overflow: 'auto', padding: 24 }}>
        <Layout.Content>
          <Router />
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
