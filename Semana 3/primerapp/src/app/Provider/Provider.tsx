import React, { ReactNode, useContext, useState } from 'react'
import { ContextCarrito } from '../Contex/ContexCarrito'
import { Producto } from '../Modelos/Producto'


interface Node{
    children:ReactNode
}

export default function Provider({children}: Node) {

  const [producto, setProducto] = useState<Producto[]> ([]);
  const [productoCarrito, setProductoCarrito] = useState<Producto[]> ([]);
  const [totalPagar,setTotalPagar]= useState(0)

  const agregarCarrito= (item:Producto) =>{
    setProductoCarrito([...productoCarrito,item])
  }


  return (
    
    <ContextCarrito.Provider value={{producto,setProducto,productoCarrito,setProductoCarrito,agregarCarrito,totalPagar,setTotalPagar}}>
            {children}
    </ContextCarrito.Provider>
  )
}

export function useContextCarrito(){
    return useContext(ContextCarrito)
}