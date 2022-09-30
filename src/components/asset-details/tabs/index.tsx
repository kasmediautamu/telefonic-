import React, { useState } from 'react'

import './styles.scss'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('capacity')
  return (
    <div className='tabs'>
      <div className='tabs__navigation'>
        <ul className='ul'>
          <li
            onClick={() => setActiveTab('capacity')}
            className={`ul-item ${activeTab === 'capacity' ? 'active' : ''}`}
          >
            CAPACITY
          </li>
          <li
            onClick={() => setActiveTab('dependency')}
            className={`ul-item ${activeTab === 'dependency' ? 'active' : ''}`}
          >
            DEPENDENCY
          </li>
          <li
            onClick={() => setActiveTab('platform')}
            className={`ul-item ${activeTab === 'platform' ? 'active' : ''}`}
          >
            PLATFORM
          </li>
          <li
            onClick={() => setActiveTab('operation')}
            className={`ul-item ${activeTab === 'operation' ? 'active' : ''}`}
          >
            OPERATION
          </li>
          <li
            onClick={() => setActiveTab('connectivity')}
            className={`ul-item ${activeTab === 'connectivity' ? 'active' : ''}`}
          >
            CONNECTIVITY
          </li>
        </ul>
      </div>
      {activeTab === 'capacity' && (
        <div className='tab-content'>
          <div className='tab-content__item'>
            <p className='label'>Node Name</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Node Ephemeral Storage</p>
            <p className='detail'>10</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Node CPU </p>
            <p className='detail'>10</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Node Ephemeral Storage Unit</p>
            <p className='detail'>TB</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Node CPU Unit</p>
            <p className='detail'>10</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Node Type</p>
            <p className='detail'>Worker</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Node Memory</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Number of nodes</p>
            <p className='detail'>5</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Node Memory Unit</p>
            <p className='detail'>12</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>
              Field Name <span>CUSTOM</span>
            </p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
        </div>
      )}
      {activeTab === 'dependency' && (
        <div className='tab-content'>
          <div className='tab-content__item'>
            <p className='label'>Numa Alignment</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>hugepagesz</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>NUMA Binding</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Core Isolation</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Sctp</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Core Isolation</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>VRF</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Kernel Type</p>
            <p className='detail'>Yes</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>DPDK</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Nosoftlockup</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Lxcfs</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Noswap</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Tuned</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Softlockup_panic</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Pci-utils</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Pcie_aspm.policy</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Ptp</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Intel_idle.max_cstate</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Additional config</p>
            <p className='detail'>No</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>mce</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>IsNumaConfigNeeded</p>
            <p className='detail'>No</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>fsck.mode</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>Latency sensitivity</p>
            <p className='detail'>Yes</p>
          </div>
          <div className='tab-content__item'>
            <p className='label'>default_hugepagesz</p>
            <p className='detail'>Lorem Ipsum</p>
          </div>
        </div>
      )}
      {activeTab === 'platform' && <div className='tab-content'>platform</div>}
      {activeTab === 'operation' && <div className='tab-content'>operation</div>}
      {activeTab === 'connectivity' && <div className='tab-content'>connectivity</div>}
    </div>
  )
}
