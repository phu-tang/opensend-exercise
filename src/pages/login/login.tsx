import React from 'react'
import { Modal } from 'antd'
import { Typography } from 'antd'
import LoginForm from './loginForm'

const { Title, Text } = Typography

const Layout = () => (
  <Modal open centered footer={null} style={{ textAlign: 'center' }}>
    <Title>Welcome back!</Title>
    <Text>
      Don't worry! Fill in the email address associated with your account and we'll send you a link to reset your
      account
    </Text>
    <LoginForm />
  </Modal>
)

export default Layout
