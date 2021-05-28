import React, { useState } from 'react'

import SearchBox from '../../components/SearchBox/SearchBox'
import ListOfPacientsInRow from '../../components/ListOfPacientsInRow/ListOfPacientsInRow'
import ListOfPacientsInCard from '../../components/ListOfPacientsInCard/ListOfPacientsInCard'
import Button from '../../components/Button/Button'
import DowloadButton from '../../components/DowloadButton/DowloadButton'
import Form from '../../components/Form/Form'

import { BiIdCard } from 'react-icons/bi'
import { HiMenu } from 'react-icons/hi'
import { CgMenuGridR } from 'react-icons/cg'

import './Pacients.css'

const Pacients = ({ data }) => {
    const [ visibleListRow, setVisibleListRow ] = useState(true)
    const [ visibleListCard, setVisibleListCard ] = useState(false)
    const [ numberOfData, setNumberOfData ] = useState(5)
    const [ showForm, setShowForm ] = useState(false)
    const [ valueFilter, setValueFilter] = useState("")

    const pacientFiltered = data.filter(nameOrLastName => nameOrLastName.nombre === valueFilter || nameOrLastName.apellido === valueFilter)

    const changeModeListPacientRow = () => {
        if (!visibleListRow) {
            setVisibleListRow(true)
            setVisibleListCard(false)
        }
    }

    const changeModeListPacientCard = () => {
        if (!visibleListCard) {
            setVisibleListCard(true)
            setVisibleListRow(false)
        }
    }

    const changeElementsOfDataToFive = () => {
        setNumberOfData(5)
    }

    const changeElementsOfDataToTen = () => {
        setNumberOfData(10)
    }

    const changeElementsOfDataToFifthteen = () => {
        setNumberOfData(15)
    }

    const sendFakeData = () => {
        document.getElementById("form").send();

    }

    const cancelFormData = (e) => {
        e.preventDefault()
        setShowForm(false)
    }

    const resetData = (e) => {
        e.preventDefault()
        document.getElementById("form").reset();
    }

    const showModal = () => {
        setShowForm(true)
    }

    return (
        <section className="ListOfPacients-container">
            <div style={{backgroundColor: "#EDEDED", height: "50px", display:"flex", alignItems:"center"}}>
                <span style={{marginLeft:"40px"}}>Listado de Pacientes</span>
            </div>
            <div style={{display: "flex"}}>
                <div style={{width: "50%", display: "flex", flexDirection: "column", marginTop: "25px"}}>
                    <div style={{display: "flex", marginLeft: "40px", alignItems: "center"}}>
                        <div style={{marginRight: "15px"}}>
                            <BiIdCard style={{fontSize: "x-large"}}/>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                            <span style={{fontWeight: "bold", fontSize: "large"}}>Listado de Pacientes</span>
                            <span style={{color: "#b9b9b9", fontSize: "small"}}>Visualización de pacientes</span>
                        </div>
                    </div>
                    <div style={{display: "flex", marginLeft: "40px", marginTop: "15px"}}>
                        <Button text={"Nuevo Paciente"} color={"blue"} width={"170px"} height={"45px"} border={"1px solid #4a92c7"} positionIcon={"left"} onClickHander={showModal}/>
                        <DowloadButton data={data}/>
                    </div>
                </div>
                <div style={{width: "50%"}}>
                    <SearchBox changeValue={value => setValueFilter(value)} />
                </div>
            </div>
            <div style={{display: "flex", margin: "20px 0px 30px 40px", width: "12%", justifyContent: "space-around"}}>
                <div style={{cursor: "pointer"}} onClick={changeModeListPacientRow}>
                    <HiMenu style={{fontSize: "x-large", fontWeight: "bold"}}/>
                </div>
                <div style={{cursor: "pointer"}} onClick={changeModeListPacientCard}>
                    <CgMenuGridR style={{fontSize: "x-large", fontWeight: "bold"}}/>
                </div>
                <div style={{cursor: "pointer"}} onClick={changeElementsOfDataToFive}>
                    <span style={{fontSize: "large", fontWeight: "bold"}}>5</span>
                </div>
                <div style={{cursor: "pointer"}} onClick={changeElementsOfDataToTen}>
                    <span style={{fontSize: "large", fontWeight: "bold"}}>10</span>
                </div>
                <div style={{cursor: "pointer"}} onClick={changeElementsOfDataToFifthteen}>
                    <span style={{fontSize: "large", fontWeight: "bold"}}>15</span>
                </div>
            </div>
            {
                visibleListRow ?
                    <div style={{display: "flex", marginBottom: "20px", justifyContent: "space-around"}}>
                        <div>Nombre y apellidos</div>
                        <div>Clinica</div>
                        <div>Objetivo de tratamiento</div>
                        <div>Estado</div>
                        <div>Acciones</div>
                    </div> : null
            }
            <div>
                {
                    visibleListRow ? <ListOfPacientsInRow data={valueFilter.length !== 0 ? pacientFiltered : data} numberOfElementInPagination={numberOfData}/> : visibleListCard ? <ListOfPacientsInCard data={valueFilter.length !== 0 ? pacientFiltered : data} numberOfElementInPagination={numberOfData}/> : null
                }
            </div>
            {
                showForm && <Form onClickClean={resetData} onClickSend={sendFakeData} onClickCancel={cancelFormData}/>
            }
        </section>
    )
}

export default Pacients