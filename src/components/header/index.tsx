import React from 'react'
import { Link } from 'react-router-dom'

import { Layout, Space, Typography } from 'antd'
import CustomButton from '../../ui/custom-button'
import { Paths } from '../../paths'

import { TeamOutlined } from '@ant-design/icons'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div>
      <Layout.Header className={styles.header}>
        <Space>
          <TeamOutlined className={styles.teamIcon} />
          <Link to={Paths.home}>
            <CustomButton type='ghost'>
              <Typography.Title level={1}>Empoyees</Typography.Title>
            </CustomButton>
          </Link>
        </Space>

        <Space>
          <Link to={Paths.register}>
            <CustomButton type='ghost'>Register</CustomButton>
          </Link>
          <Link to={Paths.login}>
            <CustomButton type='ghost'>Enter</CustomButton>
          </Link>
        </Space>
      </Layout.Header>
    </div>
  )
}

export default Header
