import React from 'react'
import { useContador } from '../Providers/Provider'

export default function ComponentSumarContext3() {

  const {contador}=useContador()
  return (
    <div>Mostrar desde el componente 3 {contador}</div>
  )
}
