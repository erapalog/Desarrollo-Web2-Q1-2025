'use client'
import React, { useEffect } from 'react'
import { Producto } from '../Modelos/Producto'
import { useContextCarrito } from '../Provider/Provider'

export default function Eliminar(item:Producto) {
  const {productoCarrito,setProductoCarrito,calcularTotalPagar} =useContextCarrito();

  async function  eliminarProducto(idProducto:number){
      console.log(idProducto);

      //5
      //1,2,3,4,6

            //setProductoCarrito([...productoCarrito,item])
              try {
          
                     
                const response = await fetch(`http://localhost:5000/carrito/${idProducto}`, {
                  method: 'DELETE',
                  headers: { 'Content-Type': 'application/json' }
                });
          
                if(!response){
                  alert('Ocurrio un error')
                  return
                }
          
                alert('Agregado exitosamente')
          
                
              } catch (error) {
                
              }
           
          

      const nuevoProductos= productoCarrito.filter(producto => producto.id!=idProducto);
      setProductoCarrito(nuevoProductos);
      

  }

  useEffect(()=>{
    calcularTotalPagar()
  },[productoCarrito])

  return (
    <div>
        <button className='btn btn-danger' onClick={()=>eliminarProducto(item.id)}>Eliminar Carrito</button>
    </div>
  )
}
