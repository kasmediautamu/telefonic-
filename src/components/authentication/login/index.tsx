import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../../common/hooks/useForm'
import './styles.scss'
export default function LoginForm() {
  const [loginFail, setLoginFail] = React.useState<boolean>(false)
  const [isRemember, setIsRemembered] = React.useState<boolean>(false)

  const formLogin = () => {
    console.log({ ...values, isRemember })
  }
  const { handleChange, values, errors, handleSubmit } = useForm(formLogin)
  return (
    <div className='login-form-wrapper'>
      <div className='login-form'>
        <h1 className='text-left app-name'>Asset Management</h1>
        <div className='login-form__form-label'>
          <div className='icon'></div>
          <p className='label'>Login</p>
        </div>
        <div className='login-form__separator'></div>
        <form id='login' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              onChange={handleChange}
            />
            {errors?.email && <p className='text-danger error'>{errors.email}</p>}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              onChange={handleChange}
            />

            {errors?.password && <p className='text-danger error'>{errors.password}</p>}
          </div>
          <div className='login-form__btns'>
            <div className='checkbox'>
              <label>
                <input type='checkbox' name='rememberme' /> Remember me
              </label>
            </div>
            <button type='submit'>LOGIN</button>
          </div>
        </form>
      </div>
      <div className='text-center forgot-pass'>
        <Link to='/forgot-password'>Forgot password?</Link>
      </div>
    </div>
  )
}
