'use client'
import { useContextCarrito } from '@/app/Provider/Provider'
import React from 'react'

export default function page() {

  console.log('Componente de producto cargado')
  const {producto} = useContextCarrito()
  
  return (
    <div>El listado de productos tiene  {producto.length} producto</div>
  )
}
