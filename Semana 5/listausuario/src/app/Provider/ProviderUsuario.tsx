'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Usuario } from '../Models/Usuario'
import {usuarioContext} from '../Context/UsuarioContext'


interface VistaReact{
    children:ReactNode
}
export default function ProviderUsuario({children}:VistaReact) {

  const [usuario,setUsuario] =useState<Usuario[]>([]);

  useEffect(()=>{

    let Newusuario: Usuario[]=[
        {id:1, nombre:'ANa', email:'ana@gmail.com'},
        {id:2, nombre:'Pedro', email:'pedro@gmail.com'},
    ]

    setUsuario(Newusuario)

  },[])

  function agregarUsuario(usuario:Usuario){

  }

  function actualizarUsuario (id:number,nombre:string, email:string){

  }

  function eliminarUsuario(id:number){

  }


  return (
    <usuarioContext.Provider value={{usuario,setUsuario,agregarUsuario,actualizarUsuario,eliminarUsuario}}>
        {children}
    </usuarioContext.Provider>
  )
}

export function useUsuaarioContext(){
        return useContext(usuarioContext)
}
