import React, { Suspense, useState, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/authentication/private'
import Layout from './components/lay-out'
import AppLoading from './components/spinner'

const Login = React.lazy(() => import('./containers/login'))
const AssetManagement = React.lazy(() => import('./containers/asset-management'))
const UpdateUser = React.lazy(() => import('./containers/update-user'))
const AssetDetails = React.lazy(() => import('./containers/asset-details'))
const AddAsset = React.lazy(() => import('./containers/add-assets'))
const UserManagement = React.lazy(() => import('./containers/user-management'))
function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<AppLoading />}>
              <Login />
            </Suspense>
          }
        />

        <Route
          path='/asset-management'
          element={
            <PrivateRoute>
              <Suspense fallback={<AppLoading />}>
                <Layout title='Asset Management'>
                  <AssetManagement />
                </Layout>
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path='/update-user'
          element={
            <PrivateRoute>
              <Suspense fallback={<AppLoading />}>
                <Layout title='Update Profile'>
                  <UpdateUser />
                </Layout>
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path='/asset-details'
          element={
            <PrivateRoute>
              <Suspense fallback={<AppLoading />}>
                <Layout title='Asset Details'>
                  <AssetDetails />
                </Layout>
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path='/add-asset'
          element={
            <PrivateRoute>
              <Suspense fallback={<AppLoading />}>
                <Layout title='Add Asset'>
                  <AddAsset />
                </Layout>
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path='/user-management'
          element={
            <PrivateRoute>
              <Suspense fallback={<AppLoading />}>
                <Layout title='User Management'>
                  <UserManagement />
                </Layout>
              </Suspense>
            </PrivateRoute>
          }
        />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
