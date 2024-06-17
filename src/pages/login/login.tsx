import React, { useEffect } from 'react'
import { Modal } from 'antd'
import { Typography } from 'antd'
import LoginForm from './loginForm'
import { useSelector } from 'react-redux'
import { isAdminSelector, isClientSelector } from '../../selectors/userInfoSelector'
import { useNavigate } from 'react-router-dom'
import SwitchModeButton from '../../components/switchModeButton'

const { Title, Text } = Typography

const Layout = () => {
  const isAdmin = useSelector(isAdminSelector)
  const isClient = useSelector(isClientSelector)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAdmin) {
      navigate('/admin', { replace: true })
    }
    if (isClient) {
      navigate('/dashboard', { replace: true })
    }
  }, [isAdmin, isClient, navigate])

  return (
    <Modal open centered footer={null} style={{ textAlign: 'center' }}>
      <Title>Welcome back!</Title>
      <div style={{ marginBottom: 19 }}>
        <Text style={{ marginBottom: 8, marginTop: 8 }}>
          Don't worry! Fill in the email address associated with your account and we'll send you a link to reset your
          account
        </Text>
      </div>
      <LoginForm />
      <SwitchModeButton />
    </Modal>
  )
}

export default Layout
