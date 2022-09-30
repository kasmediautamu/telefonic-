import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import './styles.scss'

export interface DropdownSelectProps {
  value: string
  items: string[]
  classNameContainer?: string
  onChange: (value: any) => void
}

const DropdownSelect: React.FunctionComponent<DropdownSelectProps> = (
  props: DropdownSelectProps,
) => {
  const { value, items, classNameContainer } = props

  /**
   * On click item
   * @param value the item's value
   */
  const onClickItem = (value: string) => {
    props.onChange(value)
  }

  return (
    <Dropdown className={`dropdown-select ${classNameContainer ? classNameContainer : ''}`}>
      <Dropdown.Toggle variant='outline'>
        <div className='toggle-label'>{value || ''}</div>
        <span />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item
            key={index}
            as='button'
            className={value === item ? 'selected' : ''}
            onClick={() => onClickItem(item)}
          >
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownSelect
/**
 * <DropdownSelect
                value={customer === '' ? 'Select Customer' : customer}
                items={customerOptions}
                classNameContainer={`gray-bg-dropdown ${customer !== '' ? 'has-value' : ''}`}
                onChange={(
                  value: string
                ) => {
                  setCustomer(value)
                }}
              />
 */
