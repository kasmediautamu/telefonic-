import React from 'react'
import './styles.scss'

export default function Table() {
  return (
    <div className='tl-app-table'>
      <form className='tl-app-table__table-header'>
        <div className='tl-app-table__table-header--left'>
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
        <div className='tl-app-table__table-header--right'>
          <button type='submit' className='btn btn-primary btn-border-radius'>
            +ADD
          </button>
        </div>
      </form>
      <div className='tl-app-table__table'>
        <div className='tr'>
          <div className='td'>ASSET #</div>
          <div className='td'>NF NAME</div>
          <div className='td'>TYPE</div>
          <div className='td'>VENDOR</div>
          <div className='td'>STATUS</div>
          <div className='td'>CREATED DATE</div>
          <div className='td'>CREATED BY</div>
          <div className='td'>ACTIONS</div>
        </div>
        <div className='tr'>
          <div className='td'>Asset 1</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>CNF</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>Testing</div>
          <div className='td'>10/15/21</div>
          <div className='td'>David Moore</div>
          <div className='td'>
            <div className='tl-table-mgt-actions'>
              <div className='edit-action'></div>
              <div className='del-action'></div>
            </div>
          </div>
        </div>
        <div className='tr'>
          <div className='td'>Asset 1</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>CNF</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>Testing</div>
          <div className='td'>10/15/21</div>
          <div className='td'>David Moore</div>
          <div className='td'>
            <div className='tl-table-mgt-actions'>
              <div className='edit-action'></div>
              <div className='del-action'></div>
            </div>
          </div>
        </div>
        <div className='tr'>
          <div className='td'>Asset 1</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>CNF</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>Testing</div>
          <div className='td'>10/15/21</div>
          <div className='td'>David Moore</div>
          <div className='td'>
            <div className='tl-table-mgt-actions'>
              <div className='edit-action'></div>
              <div className='del-action'></div>
            </div>
          </div>
        </div>
        <div className='tr'>
          <div className='td'>Asset 1</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>CNF</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>Testing</div>
          <div className='td'>10/15/21</div>
          <div className='td'>David Moore</div>
          <div className='td'>
            <div className='tl-table-mgt-actions'>
              <div className='edit-action'></div>
              <div className='del-action'></div>
            </div>
          </div>
        </div>
        <div className='tr'>
          <div className='td'>Asset 1</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>CNF</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>Testing</div>
          <div className='td'>10/15/21</div>
          <div className='td'>David Moore</div>
          <div className='td'><div className='tl-table-mgt-actions'>
              <div className='edit-action'></div>
              <div className='del-action'></div>
            </div></div>
        </div>
        <div className='tr'>
          <div className='td'>Asset 1</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>CNF</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>Testing</div>
          <div className='td'>10/15/21</div>
          <div className='td'>David Moore</div>
          <div className='td'><div className='tl-table-mgt-actions'>
              <div className='edit-action'></div>
              <div className='del-action'></div>
            </div></div>
        </div>
        <div className='tr'>
          <div className='td'>Asset 1</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>CNF</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>Testing</div>
          <div className='td'>10/15/21</div>
          <div className='td'>David Moore</div>
          <div className='td'><div className='tl-table-mgt-actions'>
              <div className='edit-action'></div>
              <div className='del-action'></div>
            </div></div>
        </div>
        <div className='tr'>
          <div className='td'>Asset 1</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>CNF</div>
          <div className='td'>Lorem Ipsum</div>
          <div className='td'>Testing</div>
          <div className='td'>10/15/21</div>
          <div className='td'>David Moore</div>
          <div className='td'><div className='tl-table-mgt-actions'>
              <div className='edit-action'></div>
              <div className='del-action'></div>
            </div></div>
        </div>
      </div>
      <div className='text-left load-more'>Loading more assets...</div>
    </div>
  )
}
