import React from 'react'

const CounterControlButton = (props) => {
  return (
    <div className='p-2'>
      <button type="button" class={props.typeButton}>{props.labelButton}</button>
    </div>
  )
}

export default CounterControlButton
