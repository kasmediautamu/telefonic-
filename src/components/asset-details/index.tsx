import React from 'react'

import './styles.scss'
import Tabs from './tabs'

export default function AssetDetail() {
  return (
    <div className='asset-dtl'>
      <div className='asset-dtl__header'>
        <div className='asset-dtl__header--left'>
          <h1 className='asset-name'>Asset 2</h1>
          <p className='asset-summary'>
            Created<span className='date'>12/30/21</span>
            <span className='time'>10:30:24 AM</span>
            by
            <span className='author'>John Snow</span>
          </p>
        </div>
        <div className='asset-dtl__header--right'>
          <div className='edit-btn'></div>
          <div className='del-btn'></div>
        </div>
      </div>
      <div className='asset-dtl__section1'>
        <div className='asset-dtl__section1--item'>
          <p className='label'>NF Name</p>
          <p className='detail'>Lorem Ipsum</p>
        </div>
        <div className='asset-dtl__section1--item'>
          <p className='label'>NF Capacity</p>
          <p className='detail'>100</p>
        </div>
        <div className='asset-dtl__section1--item'>
          <p className='label'>Type</p>
          <p className='detail'>CNF</p>
        </div>
        <div className='asset-dtl__section1--item'>
          <p className='label'>NF Capacity Unit</p>
          <p className='detail'>Lorem Ipsum</p>
        </div>
        <div className='asset-dtl__section1--item'>
          <p className='label'>NF Version</p>
          <p className='detail'>Lorem Ipsum</p>
        </div>
        <div className='asset-dtl__section1--item'>
          <p className='label'>From ID</p>
          <p className='detail'>Lorem Ipsum</p>
        </div>
        <div className='asset-dtl__section1--item'>
          <p className='label'>Vendor</p>
          <p className='detail'>Lorem</p>
        </div>
        <div className='asset-dtl__section1--item'>
          <p className='label'>Form Status</p>
          <p className='detail'>Testing</p>
        </div>
        <div className='asset-dtl__section1--item'>
          <p className='label'>Environment</p>
          <p className='detail'>R&D</p>
        </div>
        <div className='asset-dtl__section1--item'>
          <p className='label'>Version</p>
          <p className='detail'>Lorem Ipsum</p>
        </div>
        <div className='asset-dtl__section1--item'>
          <p className='label'>
            Field Name <span>CUSTOM</span>
          </p>
          <p className='detail'>Lorem ipsum</p>
        </div>
      </div>
      <div className='asset-dtl__tabs-section'>
        <Tabs />
      </div>
    </div>
  )
}
