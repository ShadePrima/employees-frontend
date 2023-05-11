import { Button, Form } from 'antd'
import React from 'react'

type Props = {
  children: React.ReactNode
  htmlType?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  type?:
    | 'link'
    | 'text'
    | 'ghost'
    | 'default'
    | 'primary'
    | 'dashed'
    | undefined
  danger?: boolean | undefined
  loading?: boolean
  shape?: 'default' | 'circle' | 'round' | undefined
  icon?: React.ReactNode
}

const CustomButton = ({
  children,
  htmlType = 'button',
  onClick,
  type,
  danger,
  loading,
  shape,
  icon,
}: Props) => {
  return (
    <Form.Item>
      <Button
        htmlType={htmlType}
        onClick={onClick}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
      >
        {children}
      </Button>
    </Form.Item>
  )
}

export default CustomButton
