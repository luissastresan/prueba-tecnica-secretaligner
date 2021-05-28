import React, {useRef} from 'react'
import { useParams } from 'react-router-dom'

import { PDFExport } from '@progress/kendo-react-pdf'

import Button from '../Button/Button'
import maxilar from './foto_maxilar.jpg'

import './PatientChart.css'

const PatientChart = ({ data }) => {
    const pdfExportComponent = useRef(null)
    let { id } = useParams();

    const handleExportWithComponent = (e) => {
        pdfExportComponent.current.save()
    }

    const detailPacient = data.filter(detail => detail.id === id)
    
    return (
        <>
            {
                detailPacient.map((del, index) => (
                    <PDFExport ref={pdfExportComponent} paperSize="A4" key={index}>
                        <section className="patientChart">
                            <div style={{border: "1px solid black", display: "flex", height: "250px", marginBottom: "30px"}}>
                                <div style={{borderRight: "1px solid black", width: "30%"}}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvWW4r98sfhEqdK826pwQKwr4iQ2QBFRP6fnDr0gypNwY82nrZdVNulMSWIIXAJj9bRc&usqp=CAU" alt="logo" style={{width: "100%"}}/>
                                </div>
                                <div style={{width: "70%", display: "flex", flexDirection: "column"}}>
                                    <div style={{height: "62.5px", borderBottom: "1px solid black", paddingTop: "20px"}}>
                                        <span>{del.clinica}</span>
                                    </div>
                                    <div style={{height: "62.5px", borderBottom: "1px solid black", paddingTop: "20px"}}>
                                        <span>{del.nombre}</span>
                                    </div>
                                    <div style={{height: "62.5px", borderBottom: "1px solid black", paddingTop: "20px"}}>
                                        <span>{del.apellido}</span>
                                    </div>
                                    <div style={{display: "flex"}}>
                                        <div style={{height: "62.5px", width: "50%", borderRight: "1px solid black", paddingTop: "20px"}}>
                                            <span>{del.sexo}</span>
                                        </div>
                                        <div style={{height: "62.5px", width: "50%", paddingTop: "20px"}}>
                                            <span>{del.fecha_nacimiento}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{border: "1px solid black", display: "flex", height: "430px"}}>
                                <div style={{borderRight: "1px solid black", width: "27%"}}>
                                    <div style={{height: "30px", paddingTop: "5px", borderBottom: "1px solid black"}}>
                                        {
                                            del.dientes_no_mover.map((diente, index) => (
                                                <span style={{marginRight: "10px"}} key={index}>{diente}</span>
                                            ))
                                        }
                                    </div>
                                    <div style={{width: "90px"}}>
                                        <img src={maxilar} alt={maxilar} style={{width: "100%"}}/>
                                    </div>
                                </div>
                                <div style={{width: "73%", display: "flex", flexDirection: "column"}}>
                                    <div style={{height: "100px", borderBottom: "1px solid black", paddingTop: "20px"}}>
                                        <span>{del.estado}</span>
                                    </div>
                                    <div style={{height: "100px", borderBottom: "1px solid black", paddingTop: "20px"}}>
                                        <span>{del.obj_tratamiento}</span>
                                    </div>
                                    <div style={{height: "450px", borderBottom: "1px solid black", paddingTop: "20px"}}>
                                        <div>
                                            <h4>Recortes Alineadores</h4>
                                            <span>{del.recorte_alineadores}</span>
                                        </div>
                                        <div>
                                            <h4>¿Desea Alineadores Pasivos?</h4>
                                            <span>{del.alineadores_pasivos ? "Si" : "No"}</span>
                                        </div>
                                        <div>
                                            <h4>¿Desea SecretRetainer al finalizar?</h4>
                                            <span>{del.secretretainer ? "Si" : "No"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <Button text={"Descargar PDF"} color={"blue"} width={"170px"} height={"45px"} border={"1px solid #4a92c7"} positionIcon={"left"} onClickHander={handleExportWithComponent}/>
                    </PDFExport>
                ))
            }
        </>
    )
}

export default PatientChart