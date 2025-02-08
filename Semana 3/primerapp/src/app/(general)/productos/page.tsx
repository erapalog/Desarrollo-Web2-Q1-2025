'use client'
import CardList from '@/app/Components/CardList'
import { Producto } from '@/app/Modelos/Producto'
import { useContextCarrito } from '@/app/Provider/Provider'
import React, { useEffect } from 'react'

export default function page() {

  const { producto, setProducto } = useContextCarrito()

  useEffect(() => {


    let body: Producto[] =
      [
          {
          IdProducto: producto.length + 1,
          nombreProducto: "Pastas",
          precioProducto: 30,
          isvProducto: 12,
          imagenProducto: "https://cdn7.kiwilimon.com/ss_secreto/4247/640x640/4247.jpg.webp"
        },
        {
          IdProducto: producto.length + 2,
          nombreProducto: "Zabahoras",
          precioProducto: 50,
          isvProducto: 12,
          imagenProducto: "https://www.gob.mx/cms/uploads/image/file/318296/zanahoria1.jpg"
        }
      ]

    setProducto(body)

  }, [])

  return (
    <div className='row'>
      {

        producto.map((item)=>(
          <CardList {...item}></CardList>
        ))
      }

   
  
    </div>
  )
}
