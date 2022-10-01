import React, { useState } from 'react'
import AppModal from '../modal'
import './styles.scss'

export default function UserManagement() {
  const [show, setShow] = useState(false)
  const [modalId, setModalId] = useState('')
  return (
    <>
      <div className='user-mgt'>
        <form className='user-mgt__table-header'>
          <div className='user-mgt__table-header--left'>
            <div className='input-group'>
              <span className='input-group-text' id='basic-addon1'></span>
              <input
                type='text'
                className='form-control'
                placeholder='search...'
                aria-label='searchkey'
                name='searchkey'
                aria-describedby='basic-addon1'
              />
            </div>
          </div>
          <div className='user-mgt__table-header--right'>
            <button
              type='button'
              className='btn btn-primary btn-border-radius'
              onClick={() => {
                setModalId('adduser'), setShow(true)
              }}
            >
              +ADD
            </button>
          </div>
        </form>
        <div className='user-mgt__table'>
          <div className='tr'>
            <div className='td'>FIRST NAME</div>
            <div className='td'>LAST NAME</div>
            <div className='td'>USER NAME</div>
            <div className='td'>DATE ADDED</div>
            <div className='td'>ADMIN</div>
            <div className='td'>ACTIONS</div>
          </div>
          <div className='tr'>
            <div className='td'>Alyson</div>
            <div className='td'>Wolf</div>
            <div className='td'>User01</div>
            <div className='td'>10/15/21</div>
            <div className='td'>+</div>

            <div className='td'>
              <div className='tl-table-mgt-actions'>
                <div className='edit-action'></div>
                <div className='del-action'></div>
              </div>
            </div>
          </div>
          <div className='tr'>
            <div className='td'>Alyson</div>
            <div className='td'>Wolf</div>
            <div className='td'>User01</div>
            <div className='td'>10/15/21</div>
            <div className='td'>+</div>

            <div className='td'>
              <div className='tl-table-mgt-actions'>
                <div
                  className='edit-action'
                  onClick={() => {
                    setModalId('edituser'), setShow(true)
                  }}
                ></div>
                <div className='del-action'></div>
              </div>
            </div>
          </div>
          <div className='tr'>
            <div className='td'>Alyson</div>
            <div className='td'>Wolf</div>
            <div className='td'>User01</div>
            <div className='td'>10/15/21</div>
            <div className='td'>+</div>

            <div className='td'>
              <div className='tl-table-mgt-actions'>
                <div className='edit-action'></div>
                <div className='del-action'></div>
              </div>
            </div>
          </div>
          <div className='tr'>
            <div className='td'>Alyson</div>
            <div className='td'>Wolf</div>
            <div className='td'>User01</div>
            <div className='td'>10/15/21</div>
            <div className='td'>+</div>

            <div className='td'>
              <div className='tl-table-mgt-actions'>
                <div className='edit-action'></div>
                <div className='del-action'></div>
              </div>
            </div>
          </div>
          <div className='tr'>
            <div className='td'>Alyson</div>
            <div className='td'>Wolf</div>
            <div className='td'>User01</div>
            <div className='td'>10/15/21</div>
            <div className='td'>+</div>

            <div className='td'>
              <div className='tl-table-mgt-actions'>
                <div className='edit-action'></div>
                <div className='del-action'></div>
              </div>
            </div>
          </div>
          <div className='tr'>
            <div className='td'>Alyson</div>
            <div className='td'>Wolf</div>
            <div className='td'>User01</div>
            <div className='td'>10/15/21</div>
            <div className='td'>+</div>

            <div className='td'>
              <div className='tl-table-mgt-actions'>
                <div className='edit-action'></div>
                <div className='del-action'></div>
              </div>
            </div>
          </div>
          <div className='tr'>
            <div className='td'>Alyson</div>
            <div className='td'>Wolf</div>
            <div className='td'>User01</div>
            <div className='td'>10/15/21</div>
            <div className='td'>+</div>

            <div className='td'>
              <div className='tl-table-mgt-actions'>
                <div className='edit-action'></div>
                <div className='del-action'></div>
              </div>
            </div>
          </div>
          <div className='tr'>
            <div className='td'>Alyson</div>
            <div className='td'>Wolf</div>
            <div className='td'>User01</div>
            <div className='td'>10/15/21</div>
            <div className='td'>+</div>

            <div className='td'>
              <div className='tl-table-mgt-actions'>
                <div className='edit-action'></div>
                <div className='del-action'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-left load-more'>Loading more assets...</div>
      </div>

      {modalId === 'adduser' && (
        <AppModal
          title='Add User'
          show={show}
          handleShowModal={() => setShow(true)}
          handleCloseModal={() => setShow(false)}
        >
          <div className='add-user-form'>
            <div className='mb-3 row'>
              <label htmlFor='firstname' className='col-sm-6 col-form-label'>
                First Name
              </label>
              <div className='col-sm-6'>
                <input type='text' name='firstname' className='form-control' id='firstname' />
              </div>
            </div>
            <div className='mb-3 row'>
              <label htmlFor='lastname' className='col-sm-6 col-form-label'>
                Last Name
              </label>
              <div className='col-sm-6'>
                <input type='text' name='lastname' className='form-control' id='lastname' />
              </div>
            </div>
            <div className='mb-3 row'>
              <label htmlFor='username' className='col-sm-6 col-form-label'>
                UserName
              </label>
              <div className='col-sm-6'>
                <input type='text' name='username' className='form-control' id='username' />
              </div>
            </div>
            <div className='mb-3 row'>
              <label htmlFor='password' className='col-sm-6 col-form-label'>
                Password
              </label>
              <div className='col-sm-6'>
                <input type='password' name='password' className='form-control' id='password' />
              </div>
            </div>
            <div className='mb-3 row'>
              <label htmlFor='comfirmpassword' className='col-sm-6 col-form-label'>
                Comfirm Password
              </label>
              <div className='col-sm-6'>
                <input
                  type='text'
                  name='comfirmpassword'
                  className='form-control'
                  id='comfirmpassword'
                />
              </div>
            </div>
            <div className='mb-3 row'>
              <label htmlFor='firstname' className='col-sm-6 col-form-label'>
                Admin
              </label>
              <div className='col-sm-6'>
                <input type='checkbox' name='admin' id='admin' />
              </div>
            </div>
          </div>
        </AppModal>
      )}
      {modalId === 'edituser' && (
        <AppModal
          title='Edit User Profile'
          show={show}
          handleShowModal={() => setShow(true)}
          handleCloseModal={() => setShow(false)}
        >
          <div className='edit-user-form'>
            <div className='mb-3 row'>
              <label htmlFor='firstname' className='col-sm-6 col-form-label'>
                First Name
              </label>
              <div className='col-sm-6'>
                <input type='text' name='firstname' className='form-control' id='firstname' />
              </div>
            </div>
            <div className='mb-3 row'>
              <label htmlFor='lastname' className='col-sm-6 col-form-label'>
                Last Name
              </label>
              <div className='col-sm-6'>
                <input type='text' name='lastname' className='form-control' id='lastname' />
              </div>
            </div>
            <div className='mb-3 row'>
              <label htmlFor='username' className='col-sm-6 col-form-label'>
                UserName
              </label>
              <div className='col-sm-6'>
                <input type='text' name='username' className='form-control' id='username' />
              </div>
            </div>
            <div className='mb-3 row'>
              <label htmlFor='firstname' className='col-sm-6 col-form-label'>
                Admin
              </label>
              <div className='col-sm-6'>
                <input type='checkbox' name='admin' id='admin' />
              </div>
            </div>
            <div className='edit-user-form__section-title'>CHANGE PASSWORD</div>
            <div className='mb-3 row'>
              <label htmlFor='password' className='col-sm-6 col-form-label'>
                Old Password
              </label>
              <div className='col-sm-6'>
                <input
                  type='password'
                  name='oldpassword'
                  className='form-control'
                  id='oldpassword'
                />
              </div>
            </div>
            <div className='mb-3 row'>
              <label htmlFor='newpassword' className='col-sm-6 col-form-label'>
                New Password
              </label>
              <div className='col-sm-6'>
                <input
                  type='password'
                  name='newpassword'
                  className='form-control'
                  id='newpassword'
                />
              </div>
            </div>
            <div className='mb-3 row'>
              <label htmlFor='comfirmpassword' className='col-sm-6 col-form-label'>
                Comfirm Password
              </label>
              <div className='col-sm-6'>
                <input
                  type='text'
                  name='comfirmpassword'
                  className='form-control'
                  id='comfirmpassword'
                />
              </div>
            </div>
          </div>
        </AppModal>
      )}
    </>
  )
}
