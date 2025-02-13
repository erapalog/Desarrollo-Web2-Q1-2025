import React from 'react'
import { Producto } from '../Modelos/Producto'
import { useContextCarrito } from '../Provider/Provider'

export default function BotonAgregar(item:Producto) {

 const {agregarCarrito} = useContextCarrito()

  return (
    <div>
        <button className='btn btn-primary' onClick={()=>agregarCarrito(item)}> Agregar Producto</button>
    </div>
  )
}
