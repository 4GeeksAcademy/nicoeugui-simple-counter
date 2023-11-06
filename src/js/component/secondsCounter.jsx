import React from 'react'
import CardNumber from './cardNumber'

let listCounters = [{ digito: "uno" }
]

const SecondsCounter = (props) => {

    
    return (
        <div className='d-flex'>
            <div>
                <i></i>
            </div>

            {props.listDigits.map((value)=>{
                return <CardNumber digito={value[1]} key={value[0]}/>
            })}

        </div>
    )
}

export default SecondsCounter
