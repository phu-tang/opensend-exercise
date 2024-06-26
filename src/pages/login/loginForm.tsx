import React, { useCallback, useState } from 'react'

import { Button, Form, Input } from 'antd'
import { find, isEmpty } from 'lodash/fp'
import { FieldData } from 'rc-field-form/lib/interface'

import eyeLogo from '../../assets/eye.svg'
import eyeClose from '../../assets/eye-close-line.svg'
import mail from '../../assets/mail.svg'
import lock from '../../assets/lock.svg'

import { LoginRequest, useLoginMutation } from '../../reducers/api'

const validateMessages = {
  required: '${name} is required!',
  types: {
    email: '${name} is not a valid email!'
  }
}

const Login = () => {
  const [isEnableSubmitButton, setEnableSubmitButton] = useState(false)
  const [login, { isLoading }] = useLoginMutation()

  const onFinish = (values: LoginRequest) => {
    login(values)
  }

  const checkEnableSubmitbutton = useCallback((fileds: FieldData[]) => {
    const unTouch = find({ touched: false }, fileds)
    if (unTouch) {
      return setEnableSubmitButton(false)
    }
    const hasErrors = find(({ errors }) => !isEmpty(errors), fileds)
    if (hasErrors) {
      return setEnableSubmitButton(false)
    }
    return setEnableSubmitButton(true)
  }, [])
  return (
    <Form
      requiredMark={false}
      name='login'
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
      clearOnDestroy
      onFieldsChange={(_, allFields) => {
        checkEnableSubmitbutton(allFields)
      }}
    >
      <Form.Item name={'email'} rules={[{ required: true, message: 'email incorrect', type: 'email' }]}>
        <Input
          style={{ fontFamily: 'Inter' }}
          prefix={<img src={mail} width={16} height={16} />}
          placeholder='Email address'
        />
      </Form.Item>
      <Form.Item name={'password'} rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password
          style={{ fontFamily: 'Inter' }}
          placeholder='Password'
          iconRender={(visible) => <img src={visible ? eyeLogo : eyeClose} width={16} height={16} />}
          prefix={<img src={lock} width={16} height={16} />}
        />
      </Form.Item>
      <Form.Item>
        <Button block type='primary' htmlType='submit' disabled={!isEnableSubmitButton} loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
      <Button block type='default'>
        Forgot your password?
      </Button>
    </Form>
  )
}

export default Login
