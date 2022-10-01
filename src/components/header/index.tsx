import React from 'react'

import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import AvatarPlaceholder from '../../assets/avatar.svg'
import './styles.scss'
interface IAppBarProps {
  title: string
}
export default function AppBar({ title }: IAppBarProps) {
  return (
    <div className='tl-app-header'>
      <div className='tl-app-header__left'>
        <Link to='/'>
          <div className='tl-app-header__left--logo'></div>
        </Link>
        <div className='tl-app-header__left--separator'></div>
        <div className='tl-app-header__left--title'>{title}</div>
      </div>
      <div className='tl-app-header__right'>
        <NavDropdown
          title={<img src={AvatarPlaceholder} alt='user avatar' className='user-avatar' />}
          id='navbarScrollingDropdown'
        >
          <NavDropdown.Item href='update-user'>
            <div className='update-icon'></div>Update Profile
          </NavDropdown.Item>
          <NavDropdown.Item href='user-management'>
            <div className='mgt-icon'></div> User Management
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='log-out'>
            <div className='logout-icon'></div> Log out
          </NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
  )
}
