import { Form, Input } from 'antd'
import { NamePath } from 'antd/es/form/interface'
import React from 'react'

type Props = {
  name: string
  placeholder: string
  dependencies?: NamePath[]
}

const PasswordInput = ({ name, placeholder, dependencies }: Props) => {
  return (
    <Form.Item
      name={name}
      dependencies={dependencies}
      hasFeedback={true}
      rules={[
        {
          required: true,
          message: 'Required field',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value) {
              return Promise.resolve()
            }

            if (name === 'confirmPassword') {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              } else {
                return Promise.reject(new Error('Password must mutch'))
              }
            } else {
              if (value.length < 5) {
                return Promise.reject(
                  new Error('Passwor must be longer than 6 characters')
                )
              }
              return Promise.resolve()
            }
          },
        }),
      ]}
    >
      <Input.Password placeholder={placeholder} size='large' />
    </Form.Item>
  )
}

export default PasswordInput
