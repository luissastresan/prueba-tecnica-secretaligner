import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Status from '../Status/Status'
import Button from '../Button/Button'

const PacientRow = ({ dataPacient }) => {
    const [ show, SetShow ] = useState(false)
    
    const history = useHistory()

    const onClickButtonActions = (e) => {
        if (e.currentTarget) SetShow(!show)
    }

    const getId = (e) => {
        let id = e.currentTarget.id
        history.push(`/details/${id}`)
    }
    
    return (
        <div className="pacientRow" key={dataPacient.id}>
            <div id={dataPacient.id} style={{display: "flex", alignItems: "center", width: "20%", justifyContent: "space-between"}} onClick={getId}>
                <div style={{width: "40px", height: "40px", borderRadius: "50%", border: "1px solid black"}}>
                    <img width="100%"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvWW4r98sfhEqdK826pwQKwr4iQ2QBFRP6fnDr0gypNwY82nrZdVNulMSWIIXAJj9bRc&usqp=CAU" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvWW4r98sfhEqdK826pwQKwr4iQ2QBFRP6fnDr0gypNwY82nrZdVNulMSWIIXAJj9bRc&usqp=CAU"/>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", width: "80%"}}>
                    <span>{dataPacient.nombre} {dataPacient.apellido}</span>
                    <span style={{fontSize: "smaller", color: "gray"}}>{dataPacient.fecha_nacimiento}</span>
                </div>
            </div>
            <div style={{width: "15%", display: "flex", justifyContent: "flex-start"}}>
                <span>{dataPacient.clinica}</span>
            </div>
            <div style={{width: "17%", display: "flex", justifyContent: "flex-start"}}>
                <span>{dataPacient.obj_tratamiento}</span>
            </div>
            <div>
                <Status status={dataPacient.estado}/>
            </div>
            <div>
                <Button text={"Acciones"} color={"inherit"} width={"140px"} height={"45px"} border={"1px solid gray"} positionIcon={"right"} onClickHander={onClickButtonActions}/>
                {
                    show === true && 
                        <div className="options-row">
                            <span>Editar</span>
                            <span>Finalizar</span>
                            <span id="delete-row">Borrar</span>
                        </div>
                }
            </div>
        </div>
    )
}

export default PacientRow