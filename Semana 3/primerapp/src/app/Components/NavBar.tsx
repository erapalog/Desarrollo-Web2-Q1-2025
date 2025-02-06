import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (

        <main>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/" >Navbar</ Link>
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
                        <li className="nav-item"><a href="#" className="nav-link">Page 3</a></li>
                    </ul>

                </div>
            </nav>


        </main>

    )
}
