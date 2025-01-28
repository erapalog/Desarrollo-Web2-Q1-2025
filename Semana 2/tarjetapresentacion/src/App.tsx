
import './App.css'
import TarjetaPresentacion from './Componentes/TarjetaPresentacion'
import { Tarjeta } from './Modelos/Tarjeta'

function App() {

  let generacionTarjeta: Tarjeta[]=[{
    nombre:"Ana",
    ocupacion:"Desarrollador",
    pais:'HN'
  },
  {
    nombre:"Pedro",
    ocupacion:"Desarrollador",
    pais:'CR'
  },
  {
    nombre:"Juan",
    ocupacion:"Desarrollador",
    pais:'ES'
  }]

  return (
    <>
     <h1>Tarjetas de presentacion</h1>
     <TarjetaPresentacion tarjetas={generacionTarjeta}></TarjetaPresentacion>
    </>
  )
}

export default App
