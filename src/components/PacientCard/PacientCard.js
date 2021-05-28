import React from 'react'
import { useHistory } from 'react-router-dom'

import Status from '../Status/Status'
import Button from '../Button/Button'

import './PacientCard.css'

const PacientCard = ({ dataPacient }) => {
    const history = useHistory()

    const getId = (e) => {
        let id = e.currentTarget.id
        history.push(`/details/${id}`)
    }

    return (
        <div id={dataPacient.id} className="pacientCard" key={dataPacient.id} onClick={getId}>
            <div style={{display: "flex", alignItems: "center", margin: "0 auto", marginBottom: "15px"}}>
                <div style={{width: "40px", height: "40px", borderRadius: "50%", border: "1px solid black", marginRight: "5px"}}>
                    <img width="100%"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvWW4r98sfhEqdK826pwQKwr4iQ2QBFRP6fnDr0gypNwY82nrZdVNulMSWIIXAJj9bRc&usqp=CAU" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvWW4r98sfhEqdK826pwQKwr4iQ2QBFRP6fnDr0gypNwY82nrZdVNulMSWIIXAJj9bRc&usqp=CAU"/>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "15px"}}>
                    <span>{dataPacient.nombre} {dataPacient.apellido}</span>
                    <span style={{fontSize: "smaller", color: "gray"}}>{dataPacient.fecha_nacimiento}</span>
                </div>
            </div>
            <div style={{marginBottom: "15px"}}>
                <span>{dataPacient.clinica}</span>
            </div>
            <div style={{marginBottom: "15px"}}>
                <span>{dataPacient.obj_tratamiento}</span>
            </div>
            <div style={{marginBottom: "15px"}}>
                <Status status={dataPacient.estado}/>
            </div>
            <div style={{display: "flex", marginBottom: "15px"}}>
                <Button text={"Editar"} color={"inherit"} width={"100px"} height={"45px"} border={"1px solid gray"} positionIcon={"none"}/>
                <Button text={"Finalizar"} color={"inherit"} width={"100px"} height={"45px"} border={"1px solid gray"} positionIcon={"none"}/>
                <Button text={"Borrar"} color={"inherit"} width={"100px"} height={"45px"} border={"1px solid gray"} positionIcon={"none"}/>
            </div>
        </div>
    )
}

export default PacientCard