import React from 'react'
import './styles.scss'

export default function UpdateUserForm() {
  return (
    <div className='update-user-form'>
      <div className='update-user-form__title'>Update Profile</div>
      <form className='update-user-form__form'>
        <div className='form-group row'>
          <label htmlFor='inputPassword' className='col-sm-7 control-label'>
            First Name
          </label>
          <div className='col-sm-5'>
            <input
              type='text'
              className='form-control'
              id='firstname'
              name='firstname'
              placeholder='John'
            />
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='inputPassword' className='col-sm-7 control-label'>
            Last Name
          </label>
          <div className='col-sm-5'>
            <input
              type='text'
              className='form-control'
              name='lastname'
              id='firstname'
              placeholder='John'
            />
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='inputPassword' className='col-sm-7 control-label'>
            Username
          </label>
          <div className='col-sm-5'>
            <input
              type='text'
              className='form-control'
              name='username'
              id='firstname'
              placeholder='John'
            />
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='inputPassword' className='col-sm-7 control-label'>
            Admin
          </label>
          <div className='col-sm-5'>
            <input type='checkbox' name='admin' />
          </div>
        </div>
        <div className='update-user-form__form--section-title'>CHANGE PASSWORD</div>
        <div className='form-group row'>
          <label htmlFor='inputPassword' className='col-sm-7 control-label'>
            Old Password
          </label>
          <div className='col-sm-5'>
            <input
              type='text'
              className='form-control'
              id='firstname'
              name='oldpassword'
              placeholder='John'
            />
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='inputPassword' className='col-sm-7 control-label'>
            New Password
          </label>
          <div className='col-sm-5'>
            <input
              type='text'
              className='form-control'
              id='firstname'
              name='newpassword'
              placeholder='John'
            />
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='inputPassword' className='col-sm-7 control-label'>
            Comfirm Password
          </label>
          <div className='col-sm-5'>
            <input
              type='text'
              className='form-control'
              id='comfirmpassword'
              name='comfirmpassword'
              placeholder='John'
            />
          </div>
        </div>
        <div className='update-user-form__form--action-btns'>
          <button type='reset' className='btn btn-default'>
            CLOSE
          </button>
          <button type='submit' className='btn btn-primary'>
            SAVE
          </button>
        </div>
      </form>
    </div>
  )
}
