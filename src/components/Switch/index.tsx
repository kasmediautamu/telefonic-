import React, { useState } from 'react'
import './styles.scss'
export default function Switch() {
  const [active, setActive] = useState(false)
  return (
    <div className='toggle'>
      {active ? (
        <div className='active-icon' onClick={() => setActive(!active)}></div>
      ) : (
        <div className='inactive-icon' onClick={() => setActive(!active)}></div>
      )}
    </div>
  )
}
