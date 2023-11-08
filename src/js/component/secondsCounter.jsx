import React from 'react'
import CardNumber from './cardNumber'
import Title from './title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import CounterControl from './counterControl';

const SecondsCounter = (props) => {


    return (
        <div>
            
            <Title/>

            <div className='d-flex position-absolute top-50 start-50 translate-middle bg-dark w-auto p-3 rounded-1'>

                <div className="card text-center fw-bold fs-1 m-2 rounded-1" style={{ width: "9rem" }}>
                    <div className="card-body">
                        <p className="card-text">
                            <FontAwesomeIcon icon={faClock} />
                        </p>
                    </div>
                </div>

                {props.listDigits.map((value) => {
                    return <CardNumber digito={value[1]} key={value[0]} />
                })}

                <CounterControl/>
            </div>

        </div>
    )
}

export default SecondsCounter
