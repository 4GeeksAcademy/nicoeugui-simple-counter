import React from 'react'
import CounterControlButton from './counterControlButton'

const CounterControl = () => {
    let listButtonControl = [
        {typeButton: "btn btn-danger", labelButton: "Stop"},
        {typeButton: "btn btn-warning", labelButton: "Reset"},
        {typeButton: "btn btn-success", labelButton: "Resume"}
    ]

    

  return (
    <div className='d-flex m-4'>
        {listButtonControl.map((value)=>{
            return <CounterControlButton typeButton={value.typeButton} labelButton={value.labelButton} />
        })}
    </div>
  )
}

export default CounterControl
