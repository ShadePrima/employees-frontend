import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Paths } from './paths'
import Login from './pages/login'
import Register from './pages/register'

import './App.css'
import { ConfigProvider, theme } from 'antd'

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <h1>Home</h1>,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
])

function App() {
  return (
    <div className='App'>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  )
}

export default App
