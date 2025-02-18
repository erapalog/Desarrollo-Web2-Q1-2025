import React from 'react'
import { Usuario } from '../Models/Usuario'
import Link from 'next/link'


interface UsuarioLista{
    usuarios: Usuario[]
}

export default function ListaUsuarioComponent({usuarios}:UsuarioLista) {
  return (
    <div>
        <ul>
        {
          usuarios.map((user:Usuario) => (
            <li key={user.id}>
              <Link href={`/detalle/${user.id}`}>
                {user.nombre} - {user.email}

              </Link>
            </li>

          ))
        }
      </ul>
    </div>
  )
}
