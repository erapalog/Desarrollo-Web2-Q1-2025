import React, { useState } from 'react'
import ComponenteSuma from './ComponenteSuma'

export default function ContadorNumeros() {

  const [contador, setContador] =useState(0)

  function sumarContador(){
    setContador(contador+1)
  }

  function restarContador(){
    setContador(contador-1)
  }

  return (
    <>
     <div>El valor del contador es {contador}</div>

        <button onClick={sumarContador}>Sumar 1</button>

        <button onClick={restarContador}>Restar 1</button>

        <ComponenteSuma contador={contador}></ComponenteSuma>
    </>
   
  )
}
