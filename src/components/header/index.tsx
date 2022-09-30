import React from 'react'
import AvatarPlaceholder from '../../assets/avatar.svg'
import './styles.scss'
interface IAppBarProps {
  title: string
}
export default function AppBar({ title }: IAppBarProps) {
  return (
    <div className='tl-app-header'>
      <div className='tl-app-header__left'>
        <div className='tl-app-header__left--logo'></div>
        <div className='tl-app-header__left--separator'></div>
        <div className='tl-app-header__left--title'>{title}</div>
      </div>
      <div className='tl-app-header__right'>
        <img src={AvatarPlaceholder} alt='user avatar' className='user-avatar' />
      </div>
    </div>
  )
}
