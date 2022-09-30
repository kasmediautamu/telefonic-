import React from 'react'
import AssetFilter from '../../components/asset-management/asset-filter'
import Table from '../../components/table'
import './styles.scss'

export default function AssetManagement() {
  return (
    <div className='asset-mgt'>
      <div className='asset-mgt__left'>
        <AssetFilter />
      </div>
      <div className='asset-mgt__right'>
        <Table />
      </div>
    </div>
  )
}
