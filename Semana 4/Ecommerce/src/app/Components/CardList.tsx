import React from 'react'
import { Producto } from '../Modelos/Producto'

export default function CardList(item: Producto) {


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
