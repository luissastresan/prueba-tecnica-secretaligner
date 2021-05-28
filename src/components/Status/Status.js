import React from 'react'

import './Status.css'

const Status = ({status}) => {
    return (
        <div id="status" className={status === 'planificando' ? "one" : status === 'facturado' ? "two" : status === 'enviado' ? "three" : status === 'solicitado' ? "four": status === 'fabricando' ? "five": "six"}>
            <span>{status}</span>
        </div>
    )
}

export default Status