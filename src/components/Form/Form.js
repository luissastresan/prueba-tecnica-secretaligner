import React from 'react'

import Button from '../Button/Button'

import './Form.css'

const Form = ({ onClickSend, onClickClean, onClickCancel }) => {
    return (
        <div className="container">
            <form id="form">
                <div className="row">
                    <div className="col-25">
                        <label>Apellidos</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="Nombre"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Apellidos</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="Apellidos"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Fecha de Nacimiento</label>
                    </div>
                    <div className="col-75">
                        <input type="date"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Sexo</label>
                    </div>
                    <div className="col-75">
                        <select>
                            <option value="F">F</option>
                            <option value="M">M</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Clinica</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="Clinica"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="lname">Recorte Alineadores</label>
                    </div>
                    <div className="col-25">
                        <label>Recortar dejando 1-3 mm de encía</label>
                        <input type="checkbox" />
                    </div>
                    <div className="col-25">
                        <label>Recortar a nivel de los cuellos</label>
                        <input type="checkbox"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>¿SecretRetainer?</label>
                    </div>
                    <div className="col-25">
                        <label>Si</label>
                        <input type="checkbox"/>
                    </div>
                    <div className="col-25">
                        <label>No</label>
                        <input type="checkbox"/>
                    </div>
                </div>
                <div className="row button-container">
                    <Button text={"Guardar"} color={"blue"} width={"170px"} height={"45px"} border={"1px solid #4a92c7"} positionIcon={"none"} onClickHander={onClickSend}/>
                    <Button text={"Cancelar"} color={"blue"} width={"170px"} height={"45px"} border={"1px solid #4a92c7"} positionIcon={"none"} onClickHander={onClickCancel}/>
                    <Button text={"Borrar"} color={"blue"} width={"170px"} height={"45px"} border={"1px solid #4a92c7"} positionIcon={"none"} onClickHander={onClickClean}/>
                </div>
            </form>
        </div>
    )
}

export default Form

