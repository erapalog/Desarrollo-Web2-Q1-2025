import React from 'react'
import { Producto } from '../Modelos/Producto'
import { useContextCarrito } from '../Provider/Provider'

export default function CardList(item: Producto) {

  const {agregarCarrito} = useContextCarrito()

  return (
    <>

          <img src={item.img} className="card-img-top" style={{ 'height': '20vh' }} />
          <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">{item.precio}</p>
          </div>
    </>
  )
}
