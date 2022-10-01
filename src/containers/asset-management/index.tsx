import React, { Suspense } from 'react'
import AssetFilter from '../../components/asset-management/asset-filter'
import AppLoading from '../../components/spinner'
const AssetTable = React.lazy(() => import('../../components/asset-management/assets-table'))

import './styles.scss'

export default function AssetManagement() {
  return (
    <div className='asset-mgt'>
      <div className='asset-mgt__left'>
        <AssetFilter />
      </div>
      <div className='asset-mgt__right'>
        <Suspense fallback={<AppLoading />}>
          <AssetTable />
        </Suspense>
      </div>
    </div>
  )
}
