import React, { useState } from 'react'
import DropdownSelect from '../select'
import './styles.scss'

export default function AddAssets() {
  const [type, setType] = useState('')
  const CreatorList = ['Ivan', 'Kabuye']
  const [visible, setVisible] = useState('capacity')

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

      <div className='add-assets__tabbed'>
        <ul className='ul'>
          <li
            onClick={() => setVisible('capacity')}
            className={`ul-item ${visible === 'capacity' ? 'active' : ''}`}
          >
            CAPACITY
          </li>
          <li
            onClick={() => setVisible('dependency')}
            className={`ul-item ${visible === 'dependency' ? 'active' : ''}`}
          >
            DEPENDENCY
          </li>
          <li
            onClick={() => setVisible('platform')}
            className={`ul-item ${visible === 'platform' ? 'active' : ''}`}
          >
            PLATFORM
          </li>
          <li
            onClick={() => setVisible('operation')}
            className={`ul-item ${visible === 'operation' ? 'active' : ''}`}
          >
            OPERATION
          </li>
          <li
            onClick={() => setVisible('connectivity')}
            className={`ul-item ${visible === 'connectivity' ? 'active' : ''}`}
          >
            CONNECTIVITY
          </li>
        </ul>
      </div>
      {visible === 'capacity' && (
        <div className='add-assets__tabbed-fields'>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              Node Name<span>*</span>
            </label>
            <div className='col-sm-6'>
              <input type='text' name='nodename' className='form-control' id='nodename' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              Node Ephemeral Storage<span>*</span>
            </label>
            <div className='col-sm-6'>
              <input
                type='text'
                name='nodeephemeralstorage'
                className='form-control'
                id='nodeephemeralstorage'
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              Node Ephemeral Storage Unit<span>*</span>
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
              Node CPU Unit<span>*</span>
            </label>
            <div className='col-sm-6'>
              <input type='text' name='nodecpuunit' className='form-control' id='nodecpuunit' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              Node Type<span>*</span>
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
              Node Memory<span>*</span>
            </label>
            <div className='col-sm-6'>
              <input type='text' name='nodememory' className='form-control' id='nodememory' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              Number of nodes<span>*</span>
            </label>
            <div className='col-sm-6'>
              <input type='text' name='numberofnodes' className='form-control' id='numberofnodes' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              Node Memory Unit<span>*</span>
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
      )}
      {visible === 'dependency' && (
        <div className='add-assets__tabbed-fields'>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              Numa Alignment<span>*</span>
            </label>
            <div className='col-sm-6'>
              <input type='text' name='numaalignment' className='form-control' id='numaalignment' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              hugepagesz<span>*</span>
            </label>
            <div className='col-sm-6'>
              <input type='text' name='hugepagesz' className='form-control' id='hugepagesz' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              Numa Binding<span>*</span>
            </label>
            <div className='col-sm-6'>
              <input type='text' name='numabinding' className='form-control' id='numabinding' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              Hugepages<span>*</span>
            </label>
            <div className='col-sm-6'>
              <input type='text' name='hugepages' className='form-control' id='hugepages' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              Core Isolation<span>*</span>
            </label>
            <div className='col-sm-6'>
              <input type='text' name='coreisolation' className='form-control' id='coreisolation' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              sctp<span>*</span>
            </label>
            <div className='col-sm-6'>
              <input type='text' name='sctp' className='form-control' id='sctp' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              Core reservation<span>*</span>
            </label>
            <div className='col-sm-6'>
              <input
                type='text'
                name='corereservation'
                className='form-control'
                id='corereservation'
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              VFR<span>*</span>
            </label>
            <div className='col-sm-6'>
              <input type='text' name='vfr' className='form-control' id='vfr' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              Kernel Type<span>*</span>
            </label>
            <div className='col-sm-6'>
              <input type='checkbox' name='kerneltype' id='kerneltype' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              DPDK
            </label>
            <div className='col-sm-6'>
              <input type='checkbox' name='dpdk' id='dpdk' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              nosoftlockup
            </label>
            <div className='col-sm-6'>
              <input type='text' name='nosoftlockup' className='form-control' id='nosoftlockup' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              lxcf
            </label>
            <div className='col-sm-6'>
              <input type='text' name='lxcf' className='form-control' id='lxcf' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              noswap
            </label>
            <div className='col-sm-6'>
              <input type='text' name='noswap' className='form-control' id='noswap' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              tuned
            </label>
            <div className='col-sm-6'>
              <input type='text' name='tuned' className='form-control' id='tuned' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='softlockup_panic' className='col-sm-6 col-form-label'>
              Softlockup_panic
            </label>
            <div className='col-sm-6'>
              <input
                type='text'
                name='softlockup_panic'
                className='form-control'
                id='softlockup_panic'
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              pci-utils
            </label>
            <div className='col-sm-6'>
              <input type='text' name='pci-utils' className='form-control' id='pci-utils' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='pcie_asm.policy' className='col-sm-6 col-form-label'>
              Pcie_aspm.policy
            </label>
            <div className='col-sm-6'>
              <input
                type='text'
                name='pcie_aspm_policy'
                className='form-control'
                id='pcie_asm_policy'
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              ptp
            </label>
            <div className='col-sm-6'>
              <input type='text' name='ptp' className='form-control' id='ptp' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              Intel_idle.max_cstate
            </label>
            <div className='col-sm-6'>
              <input
                type='text'
                name='intel_idle_max_cstate'
                className='form-control'
                id='intel_idle_max_cstate'
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='additional config' className='col-sm-6 col-form-label'>
              Additional config <span>*</span>
            </label>
            <div className='col-sm-6'>
              <input
                type='text'
                name='additional_config'
                className='form-control'
                id='additional_config'
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              mce
            </label>
            <div className='col-sm-6'>
              <input type='text' name='mce' className='form-control' id='mce' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='file_injection' className='col-sm-6 col-form-label'>
              file_injection <span>*</span>
            </label>
            <div className='col-sm-6'>
              <input type='checkbox' name='file_injection' id='file_injection' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              fsck.mode
            </label>
            <div className='col-sm-6'>
              <input type='text' name='fsck_mode' className='form-control' id='fsck.mode' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              IsNumaConfigNeeded
            </label>
            <div className='col-sm-6'>
              <input type='checkbox' name='is_numa_config_needed' id='is_numa_config_needed' />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='default_hugepagesz' className='col-sm-6 col-form-label'>
              default_hugepagesz
            </label>
            <div className='col-sm-6'>
              <input
                type='text'
                name='default_hugepagesz'
                className='form-control'
                id='default_hugepagesz'
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='inputPassword' className='col-sm-6 col-form-label'>
              latency_sensitivity
            </label>
            <div className='col-sm-6'>
              <input
                type='text'
                name='latency_sensitvity'
                className='form-control'
                id='latency_sensitivity'
              />
            </div>
          </div>
        </div>
      )}
      <div className='add-assets__btns'>
        <button type='reset' className='btn btn-default'>
          CANCEL
        </button>
        <button type='submit' className='btn btn-primary'>
          SAVE
        </button>
      </div>
    </div>
  )
}
