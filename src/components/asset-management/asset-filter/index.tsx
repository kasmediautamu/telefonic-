import React, { useState } from 'react'
import DropdownSelect from '../../select'
import Switch from '../../Switch'

import './styles.scss'

export default function AssetFilter() {
  const [creator, setCreator] = useState('')
  const CreatorList = ['Ivan', 'Kabuye']
  return (
    <div className='asset-filter'>
      <div className='asset-filter__header'>
        <div className='asset-filter__header--left'>
          <div className='icon'></div>
          <p className='title'>FILTER</p>
        </div>
        <div className='asset-filter__header--right'>
          <div className='icon'></div>
        </div>
      </div>

      <div className='form-group'>
        <label htmlFor='createdby'>Created By</label>
        <div className='input-area'>
          <DropdownSelect
            value={creator === '' ? 'Select Customer' : creator}
            items={CreatorList}
            classNameContainer={`gray-bg-dropdown ${creator !== '' ? 'has-value' : ''}`}
            onChange={(value: string) => {
              setCreator(value)
            }}
          />
        </div>
      </div>
      <div className='only-by-me'>
        <p className='label'>On created by me</p>
        <div className='switch'>
          <Switch />
        </div>
      </div>
      <p className='created-date-label'>Created Date</p>
      <div className='created-date'>
        <div className='form-group'>
          <input
            type='datetime'
            name='start'
            className='form-control'
            id=''
            placeholder='mm/dd/yy'
          />
        </div>
        <div className='dash'>-</div>
        <div className='form-group'>
          <input type='datetime' className='form-control' name='end' id='' placeholder='mm/dd/yy' />
        </div>
      </div>
      <div className='form-group'>
        <label htmlFor='createdby'>Type</label>
        <div className='input-area'>
          <DropdownSelect
            value={creator === '' ? 'Select Customer' : creator}
            items={CreatorList}
            classNameContainer={`gray-bg-dropdown ${creator !== '' ? 'has-value' : ''}`}
            onChange={(value: string) => {
              setCreator(value)
            }}
          />
        </div>
      </div>
      <div className='form-group'>
        <label htmlFor='vendor'>Vendor</label>
        <input type='text' name='vendor' className='form-control' />
      </div>
      <div className='form-group'>
        <label htmlFor='createdby'>Status</label>
        <div className='input-area'>
          <DropdownSelect
            value={creator === '' ? 'Select Customer' : creator}
            items={CreatorList}
            classNameContainer={`gray-bg-dropdown ${creator !== '' ? 'has-value' : ''}`}
            onChange={(value: string) => {
              setCreator(value)
            }}
          />
        </div>
      </div>
      <div className='only-by-me'>
        <p className='label'>Show selected assets</p>
        <div className='switch'>
          <Switch />
        </div>
      </div>
      <div className='actions'>
        <button className='btn btn-primary apply'>APPLY</button>
        <button type='reset' className='btn btn-transparent'>
          Reset
        </button>
      </div>
    </div>
  )
}
