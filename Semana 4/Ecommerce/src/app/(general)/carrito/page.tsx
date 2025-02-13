'use client'
import CardList from '@/app/Components/CardList';
import Eliminar from '@/app/Components/Eliminar';
import { useContextCarrito } from '@/app/Provider/Provider'
import React, { useEffect } from 'react'

export default function page() {

    const { productoCarrito, totalPagar, setTotalPagar,calcularTotalPagar } = useContextCarrito();

  

    useEffect(() => {
        calcularTotalPagar()
    },[])

    function pagar(){
        alert('El total a pagar es: '+ totalPagar)
    }
    return (
        <div className='container'>

            <div className='items-center justify-items-center'>
                <img src="https://static.vecteezy.com/system/resources/previews/014/807/338/non_2x/shopping-cart-line-icon-vector.jpg" alt="" style={{ height: '70px' }} />

            </div>
            <div className="row">
                {
                    productoCarrito.map((item) => (
                        <>
                        <div className='col-md-3' key={item.id}>
                            <div className='card'>
                            <CardList {...item} ></CardList>
                            <Eliminar {...item}></Eliminar>
                            </div>

                        </div>
                       
                        </>
                        
                    ))
                }
            </div>
            <br></br>
            <div className="alert alert-light" role="alert">
                Total a Pagar: {totalPagar}
            </div>
            <div className="alert alert-light" role="alert">
                 <button className='btn btn-warning' onClick={pagar}>Pagar</button>
            </div>
        </div>
    )
}
