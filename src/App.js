import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Pacients from './pages/Pacients/Pacients'
import PatientChart from './components/PatientChart/PatientChart'

function App() {
  const [ pacientData, setPacientData ] = useState([])

  useEffect(() => {
    fetch('pacientes.json',
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      const data = []
      Object.entries(res).forEach((entry) => {
          const [key, value] = entry;
          data.push({
              id: key,
              nombre: value.datos_paciente.nombre,
              apellido: value.datos_paciente.apellidos,
              fecha_nacimiento: value.datos_paciente.fecha_nacimiento,
              sexo: value.datos_paciente.sexo,
              clinica: value.ficha_dental.clinica,
              obj_tratamiento: value.ficha_dental.objetivo_tratamiento,
              estado: value.ficha_dental.estado,
              dientes_no_mover: value.ficha_dental.dientes_no_mover,
              recorte_alineadores: value.ficha_dental.otros_datos.recorte_alineadores,
              secretretainer: value.ficha_dental.otros_datos.secretretainer,
              alineadores_pasivos: value.ficha_dental.otros_datos.alineadores_pasivos

          })
      });

      setPacientData(data)
    })
  }, [])

  return (
    <Router>
        <div className="App">
          <Header />
          <main className="main-container">
            <Switch>
              <Route path="/" exact>
                <SideBar />
                <Pacients data={pacientData}/>
              </Route>
              <Route path="/details/:id">
                <PatientChart data={pacientData}/>
              </Route>
            </Switch>
          </main>
        </div>
    </Router>
  );
}

export default App;
