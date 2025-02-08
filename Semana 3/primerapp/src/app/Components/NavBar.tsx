import Link from 'next/link'
import React from 'react'
import { useContextCarrito } from '../Provider/Provider'

export default function NavBar() {

    const {productoCarrito}= useContextCarrito()
    return (

        <main>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/" >Ecommerce</ Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link href='/informacion' className="nav-link active">Informacion</Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/contacto' className="nav-link active">Contacto</Link>

                        </li>
                        <li className="nav-item"><Link href="/productos" className="nav-link"> Productos</Link></li>
                        <li className="nav-item">

                            <button type="button" className="btn btn-primary position-relative">
                                Carrito
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {productoCarrito.length}
                                </span>
                            </button>
                        </li>
                    </ul>

                </div>
            </nav>


        </main>

    )
}
