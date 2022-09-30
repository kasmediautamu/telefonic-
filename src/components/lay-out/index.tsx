import React, { ReactNode } from 'react'
import AppBar from '../header'
import './styles.scss'

interface ILayOutProps {
  children: ReactNode
  title: string
}

const Layout = ({ children, title }: ILayOutProps) => {
  return (
    <div className='tl-app-layout'>
      <div className='tl-app-layout__app-bar'>
        <AppBar title={title} />
      </div>
      <div className='tl-app-layout__main'>{children}</div>
    </div>
  )
}

export default Layout
