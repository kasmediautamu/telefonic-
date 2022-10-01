import React, { Suspense } from 'react'
import AppLoading from '../../components/spinner'
import './styles.scss'

const UserManagement = React.lazy(() => import('../../components/user-management'))
export default function Users() {
  return (
    <div className='users'>
      <Suspense fallback={<>Loading users...</>}>
        <UserManagement />
      </Suspense>
    </div>
  )
}
