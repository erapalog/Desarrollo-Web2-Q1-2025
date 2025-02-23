'use client'
import { Evento } from '@/modelos/Evento';
import { useEventoContext } from '@/provider/ProviderEvento'
import React, { useEffect } from 'react'
export default function page() {
    const { evento, actualizarEvento, eventoConfirmado,eventosConfirmador } = useEventoContext();

    function confirmar(item: Evento) {

        let body = {
            Id: item.Id,
            nombre: item.nombre,
            direccion: item.direccion,
            fechaInicio: item.fechaInicio,
            fechaFinal: item.fechaFinal,
            estado: 1,
            comentario: 'Confirmado'
        }

        actualizarEvento(body)

    }

    function restaturar(item: Evento) {

        let body = {
            Id: item.Id,
            nombre: item.nombre,
            direccion: item.direccion,
            fechaInicio: item.fechaInicio,
            fechaFinal: item.fechaFinal,
            estado: 0,
            comentario: 'Restaurado'
        }

        actualizarEvento(body)

    }

  
    return (
        <div className='content'>
            <div className='row'>
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
                                evento.map((itam) => (
                                    <tr key={itam.Id}>
                                        <td>{itam.nombre}</td>
                                        <td>{itam.direccion}</td>
                                        <td>{itam.fechaInicio}</td>
                                        <td>{itam.fechaFinal}</td>
                                        <td>
                                            <button type='button' className='btn btn-sm btn-success' onClick={() => confirmar(itam)}> confirnar</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
                <div className='col-md-6'>
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
                                    eventoConfirmado.map((itam) => (
                                        <tr key={itam.Id}>
                                            <td>{itam.nombre}</td>
                                            <td>{itam.direccion}</td>
                                            <td>{itam.fechaInicio}</td>
                                            <td>{itam.fechaFinal}</td>
                                            <td>
                                                <button type='button' className='btn btn-sm btn-info' onClick={() => restaturar(itam)}> restaturar</button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}
