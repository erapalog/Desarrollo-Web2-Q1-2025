import React, { ReactNode, useContext, useState } from 'react'
import { ContextContador } from '../Context/Context'


interface ViewReact{
    children: ReactNode
}

export default function Provider(props:ViewReact) {

  const [contador,setContador] =useState(0)

  const sumarContador =()=>{
    setContador(contador+1)
  }

  const restarContador = () =>{
    setContador(contador-1)
  }
  return (
    <div>
        <ContextContador.Provider value={{contador,sumarContador,restarContador}}>
                {props.children}
        </ContextContador.Provider>
    </div>
  )
}

export const useContador =()=>{
    return useContext(ContextContador)
}