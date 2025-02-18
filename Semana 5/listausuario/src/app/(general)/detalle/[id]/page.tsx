'use client'
import { useUsuaarioContext } from '@/app/Provider/ProviderUsuario'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

  const {id} = useParams()
  const {usuario}= useUsuaarioContext()

  const usuarioDetalle= usuario.find((user)=> user.id==Number(id))

  return (
    <div>
        <h4>Detalle de Usuario</h4>
        <p>Id: {usuarioDetalle?.id}</p>
        <p>Nombre: {usuarioDetalle?.nombre}</p>
        <p>Email: {usuarioDetalle?.email}</p>
    </div>
  )
}
