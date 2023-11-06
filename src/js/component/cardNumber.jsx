import React from 'react'

const CardNumber = (props) => {
    return (
        <div className="card text-center fw-bold fs-1" style={{width: "9rem"}}>
            <div className="card-body">
                <p className="card-text">{props.digito}</p>
            </div>
        </div>
    )
}

export default CardNumber