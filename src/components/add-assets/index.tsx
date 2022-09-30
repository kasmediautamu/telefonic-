import React, { useState } from 'react'
import DropdownSelect from '../select'
import './styles.scss'

export default function AddAssets() {
  const [type, setType] = useState('')
  const CreatorList = ['Ivan', 'Kabuye']

  return (
    <div className='add-assets'>
      <div className='add-assets__header'>
        <p className='page-title'>Add Asset</p>
        <p className='custom-field'>+Add Custom Field</p>
      </div>
      <div className='add-assets__main'>
        <div className='mb-3 row'>
          <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
            NF Name<span>*</span>
          </label>
          <div className='col-sm-6'>
            <input type='text' name='nfname' className='form-control' id='nfname' />
          </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
            NF Capacity<span>*</span>
          </label>
          <div className='col-sm-6'>
            <input type='text' name='nfcapacity' className='form-control' id='nfname' />
          </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
            Type<span>*</span>
          </label>
          <div className='col-sm-6'>
            <DropdownSelect
              value={type === '' ? 'Select' : type}
              items={CreatorList}
              classNameContainer={`gray-bg-dropdown ${type !== '' ? 'has-value' : ''}`}
              onChange={(value: string) => {
                setType(value)
              }}
            />
          </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
            NF Capacity Unit<span>*</span>
          </label>
          <div className='col-sm-6'>
            <input type='text' name='nfcapacityunit' className='form-control' id='nfcapacityunit' />
          </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
            NF Version<span>*</span>
          </label>
          <div className='col-sm-6'>
            <input type='text' name='nfversion' className='form-control' id='nfname' />
          </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
            From ID<span>*</span>
          </label>
          <div className='col-sm-6'>
            <input type='text' name='fromid' className='form-control' id='fromid' />
          </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
            Vender<span>*</span>
          </label>
          <div className='col-sm-6'>
            <input type='text' name='vender' className='form-control' id='vender' />
          </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
            Form Status<span>*</span>
          </label>
          <div className='col-sm-6'>
            <DropdownSelect
              value={type === '' ? 'Select' : type}
              items={CreatorList}
              classNameContainer={`gray-bg-dropdown ${type !== '' ? 'has-value' : ''}`}
              onChange={(value: string) => {
                setType(value)
              }}
            />
          </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
            Environment<span>*</span>
          </label>
          <div className='col-sm-6'>
            <DropdownSelect
              value={type === '' ? 'Select' : type}
              items={CreatorList}
              classNameContainer={`gray-bg-dropdown ${type !== '' ? 'has-value' : ''}`}
              onChange={(value: string) => {
                setType(value)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
