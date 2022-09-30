import React from 'react'
import { SpinnerCircularSplit } from 'spinners-react'
import './styles.scss'
const AppLoading = () => {
  return (
    <div className='tl-app-loading'>
      <div className='tl-circular-split'>
        <SpinnerCircularSplit size={100} thickness={180} speed={131} />
      </div>
    </div>
  )
}

export default AppLoading
