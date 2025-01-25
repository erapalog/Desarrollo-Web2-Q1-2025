import React from 'react'




export default function PersonaComponent({nombre,apellido,edad,correo,telefono,apodo}) {
    /**
     * Nombre persona
     * Apellido
     * Edad
     * Correo
     * Telefono
     * Apodo
     */
  return (
    <div>
        <h1>Mostrar Datos Personales</h1>
        <ul>
            <li>Nombre Persona {nombre}</li>
            <li>APellido Persona {apellido}</li>
            <li>Edad Persona {edad}</li>
            <li>Correo Persona {correo}</li>
            <li>Telefono Persona {telefono}</li>
            <li>Apodo Persona {apodo}</li>
        </ul>
    </div>
  )
}
