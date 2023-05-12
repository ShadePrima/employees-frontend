import React from 'react'
import Layout from '../../components/layout'
import { Card, Form, Row, Space, Typography } from 'antd'
import CustomInput from '../../ui/custom-input'
import PasswordInput from '../../ui/password-input'
import CustomButton from '../../ui/custom-button'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'

const Register = () => {
  return (
    <div>
      <Layout>
        <Row align='middle' justify='center'>
          <Card title='Register' style={{ width: '20rem' }}>
            <Form onFinish={() => null}>
              <CustomInput name='name' placeholder='Name' />
              <CustomInput name='email' type='email' placeholder='Email' />
              <PasswordInput name='password' placeholder='Password' />
              <PasswordInput
                name='confirmPassword'
                placeholder='Password again'
              />
              <CustomButton type='primary' htmlType='submit' loading={false}>
                Register
              </CustomButton>
            </Form>
            <Space direction='vertical' size='large'>
              <Typography.Text>
                Do you have account?
                <Link to={Paths.login}> Enter.</Link>
              </Typography.Text>
            </Space>
          </Card>
        </Row>
      </Layout>
    </div>
  )
}

export default Register
