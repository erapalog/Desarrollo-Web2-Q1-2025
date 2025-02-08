'use client'
import CardList from '@/app/Components/CardList';
import { useContextCarrito } from '@/app/Provider/Provider'
import React, { useEffect } from 'react'

export default function page() {

    const { productoCarrito, totalPagar, setTotalPagar } = useContextCarrito();

    function calcularTotalPagar() {
        let total = 0;

        for (let x of productoCarrito) {
            let subTotal = x.precioProducto + (x.precioProducto * ( x.isvProducto/100));
            total += subTotal
        }
        setTotalPagar(total)

    }

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
                        <CardList {...item} ></CardList>
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
