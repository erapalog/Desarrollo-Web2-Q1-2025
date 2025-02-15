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

  /*const agregarCarrito= (item:Producto) =>{
    setProductoCarrito([...productoCarrito,item])
  }*/

    

    const agregarCarrito= (item:Producto) =>{
      setProductoCarrito([...productoCarrito,item])
        try {
    
              const response= fetch('http://localhost:5000/carrito',{
              method:'POST',
              headers:{
                 'Content-Type':'application/json'
              },
              body:JSON.stringify({
                IdProducto:item.id,
                PrecioTotal:item.precio + (item.precio*item.isv) /100,
                Estado:0
              })
            })
    
          if(!response){
            alert('Ocurrio un error')
            return
          }
    
          alert('Agregado exitosamente')
    
          
        } catch (error) {
          
        }
     
    }


    function calcularTotalPagar() {
          let total = 0;
  
          for (let x of productoCarrito) {
              let subTotal = x.precio + (x.precio * ( x.isv/100));
              total += subTotal
          }
          setTotalPagar(total)
  
      }

    

  return (
    
    <ContextCarrito.Provider value={{producto,
                            setProducto,productoCarrito,
                            setProductoCarrito,
                            agregarCarrito,
                            totalPagar,
                            setTotalPagar,
                            calcularTotalPagar
                            }}>
            {children}
    </ContextCarrito.Provider>
  )
}

export function useContextCarrito(){
    return useContext(ContextCarrito)
}