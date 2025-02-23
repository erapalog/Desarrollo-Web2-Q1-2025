'use client'
import { eventoContext } from '@/context/EventoContext'
import { Evento } from '@/modelos/Evento'
import { useEventoContext } from '@/provider/ProviderEvento'
import React, { useState } from 'react'

export default function page() {

  const {agregarEvento,evento,eliminarEvento,actualizarEvento} = useEventoContext()
 
  const[Id,setId]=useState(0)
  const [nombre,setNombre] =useState('')
  const [direccion,setDireccion] =useState('')
  const [fechaInicio,setFechaInicio] =useState('')
  const [fechaFinal,setFechaFinal] =useState('')

  function agregar(){

    if(fechaInicio>fechaFinal){
        alert('Fecha inicial debe ser menor')
        return
    }
    let body={
        Id:Id,
        nombre:nombre,
        direccion:direccion,
        fechaInicio:fechaInicio,
        fechaFinal:fechaFinal,
        estado:0,
        comentario:''
    }

    agregarEvento(body)
  }

  function editar(item:Evento){

    setId(item.Id)
    setNombre(item.nombre)
    setDireccion(item.direccion)
    setFechaInicio(item.fechaInicio)
    setFechaFinal(item.fechaFinal)
  }

  return (
    <div className='container'>
        <h4>Agrega Evento</h4>

        <div className='row'>
            <div className='col-md-6'>
                <form action="">
                    <input type="text"  className='form-control' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                    <input type="text"  className='form-control' value={direccion} onChange={(e)=>setDireccion(e.target.value)}/>
                    <input type="date"  className='form-control' value={fechaInicio} onChange={(e)=>setFechaInicio(e.target.value)}/>
                    <input type="date"  className='form-control' value={fechaFinal} onChange={(e)=>setFechaFinal(e.target.value)}/>
                    <button type='button' className='btn btn-success' onClick={agregar}>Agregar Evento</button>
                </form>
            </div>
            <div className='col-md-6'>

                <table className='table'>
                    <thead>
                        <th>Nombre</th>
                        <th>Direccuib</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Final</th>
                        <th>Opciones</th>

                    </thead>
                    <tbody>
                    {
                        evento.map((itam)=>(
                            <tr key={itam.Id}>
                                <td>{itam.nombre}</td>
                                <td>{itam.direccion}</td>
                                <td>{itam.fechaInicio}</td>
                                <td>{itam.fechaFinal}</td>
                                <td>
                                    <button type='button' className='btn btn-sm btn-info' onClick={()=>editar(itam)}> Editar</button>
                                    <button type='button' className='btn btn-sm btn-danger'onClick={()=>eliminarEvento(itam.Id)}> Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }

                    </tbody>
                   
                </table>
            </div>
        </div>


    </div>
  )
}
