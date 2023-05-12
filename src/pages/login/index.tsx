import React from 'react'
import Layout from '../../components/layout'
import { Card, Form, Row, Space, Typography } from 'antd'
import CustomInput from '../../ui/custom-input'
import PasswordInput from '../../ui/password-input'
import CustomButton from '../../ui/custom-button'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'

const Login = () => {
  return (
    <div>
      <Layout>
        <Row align='middle' justify='center'>
          <Card title='Enter' style={{ width: '20rem' }}>
            <Form onFinish={() => null}>
              <CustomInput name='email' type='email' placeholder='Email' />
              <PasswordInput name='password' placeholder='Password' />
              <CustomButton type='primary' htmlType='submit' loading={false}>
                Enter
              </CustomButton>
            </Form>
            <Space direction='vertical' size='large'>
              <Typography.Text>
                Do not have account ?{' '}
                <Link to={Paths.register}>You must register.</Link>
              </Typography.Text>
            </Space>
          </Card>
        </Row>
      </Layout>
    </div>
  )
}

export default Login
