import React from 'react'
import { CSVLink } from "react-csv";

import { FaFileCsv } from 'react-icons/fa'

import './DowloadButton.css'

const DowloadButton = ({ data }) => {

    const headers = [
        {label: 'ID', key: 'id'},
        {label: 'NOMBRE', key: 'nombre'},
        {label: 'APELLIDOS', key: 'apellidos'},
        {label: 'SEXO', key: 'sexo'},
        {label: 'CLINICA', key: 'clinica'},
        {label: 'OBJ_TRATAMIENTO', key: 'obj_tratamiento'},
        {label: 'ESTADO', key: 'estado'},
        {label: 'DIENTES_NO_MOVER', key: 'dientes_no_mover'},
        {label: 'RECORTES_ALINEADORES', key: 'recorte_alineadores'}
    ]
    
    const csvReport = {
        filename: 'Report.csv',
        headers: headers,
        data: data
    }

    return (
        <CSVLink {...csvReport} className="dowloadButton">
            <FaFileCsv />
            Exportar Lista
        </CSVLink>
    )
}

export default DowloadButton