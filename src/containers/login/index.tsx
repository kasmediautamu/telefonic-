import React from 'react'
import LoginForm from '../../components/authentication/login'
import './styles.scss'
export default function Login() {
  return (
    <div className='login-page-under'>
      <div className='login-page-under__page-wrapper'>
        <div className='login-page'>
          <div className='login-page__section'>
            <div className='app-logo text-center'></div>
          </div>
          <div className='login-page__section center-section'>
            <div className='wrapper'>
              <LoginForm />
            </div>
          </div>
          <div className='login-page__section'></div>
        </div>
      </div>
    </div>
  )
}
