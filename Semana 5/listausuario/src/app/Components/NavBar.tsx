import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    
    <main>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" href="/" >Usuario</ Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link href='/listausuario' className="nav-link active">Lista Usuario</Link>
                </li>
                <li className="nav-item">
                    <Link href='/agregarusuario' className="nav-link active">Crear Usuario</Link>
                </li>
               
            </ul>

        </div>
    </nav>


</main>
  )
}
