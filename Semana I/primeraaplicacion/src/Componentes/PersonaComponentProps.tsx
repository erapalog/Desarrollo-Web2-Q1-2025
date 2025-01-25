import React from 'react'
import { Persona } from '../Modelos/Persona'

export default function PersonaComponentProps(props:Persona) {
  return (
    <div>
           <h1>Mostrar Datos Personales Con props Tipado</h1>
        <ul>
            <li>Nombre Persona {props.nombre}</li>
            <li>APellido Persona {props.apellido}</li>
            <li>Edad Persona {props.edad}</li>
            <li>Correo Persona {props.correo}</li>
            <li>Telefono Persona {props.telefono}</li>
            <li>Apodo Persona {props.apodo}</li>
        </ul>
    </div>
  )
}
