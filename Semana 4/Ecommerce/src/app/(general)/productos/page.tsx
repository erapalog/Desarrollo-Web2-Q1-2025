'use client'
import BotonAgregar from '@/app/Components/BotonAgregar'
import CardList from '@/app/Components/CardList'
import { Producto } from '@/app/Modelos/Producto'
import { useContextCarrito } from '@/app/Provider/Provider'
import React, { useEffect } from 'react'

export default function page() {

  const { producto, setProducto } = useContextCarrito()


  async function cargarProductos () {
    
    try {

      const res= await fetch('http://localhost:5000/producto');
      const data=await res.json()

      setProducto(data)

    } catch (error) {
      console.log('Ocurrio un error al invocar el servicio de producto')
    }

  }

  useEffect(()=>{
      cargarProductos()
     
  },[])


 /* useEffect(() => {


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
          nombreProducto: "zanahoria",
          precioProducto: 50,
          isvProducto: 12,
          imagenProducto: "https://www.gob.mx/cms/uploads/image/file/318296/zanahoria1.jpg"
        }
      ]

    setProducto(body)

  }, [])*/

  return (
    <>
      <div className='container'>
        <div className='items-center justify-items-center'>
          <img src="https://static.vecteezy.com/system/resources/previews/014/807/338/non_2x/shopping-cart-line-icon-vector.jpg" alt="" style={{ height: '70px' }} />

        </div>
        <div className='row'>
          {

            producto.map((item) => (
              <>
              <div className='col-md-3' key={item.id}>
                  <div className='card'>
                      <CardList {...item}></CardList>
                      <BotonAgregar {...item}></BotonAgregar>
                  </div>
                
              </div>
             
              </>
             
            ))
          }



        </div>
      </div>

    </>

  )
}
