import { Button, ConfigProvider, Space } from 'antd'
import React from 'react'

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
    <Space>
      <Button type='primary'>Primary</Button>
      <Button>Default</Button>
    </Space>
  </ConfigProvider>
)

export default App
