import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './privateRoute'

const Login = React.lazy(() => import('../pages/login'))
const Admin = React.lazy(() => import('../pages/admin'))
const Dashboard = React.lazy(() => import('../pages/dashboard'))
const Onboard = React.lazy(() => import('../pages/onboard'))

const Router = () => (
  <Routes>
    <Route
      path='/'
      element={
        <React.Suspense fallback={<>...</>}>
          <Login />
        </React.Suspense>
      }
    />
    <Route
      path='/admin'
      element={
        <PrivateRoute>
          <React.Suspense fallback={<>...</>}>
            <Admin />
          </React.Suspense>
        </PrivateRoute>
      }
    />
    <Route
      path='/onboard'
      element={
        <PrivateRoute>
          <React.Suspense fallback={<>...</>}>
            <Onboard />
          </React.Suspense>
        </PrivateRoute>
      }
    />
    <Route
      path='/dashboard'
      element={
        <PrivateRoute>
          <React.Suspense fallback={<>...</>}>
            <Dashboard />
          </React.Suspense>
        </PrivateRoute>
      }
    />
  </Routes>
)

export default Router
