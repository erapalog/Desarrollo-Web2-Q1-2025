import React, { useEffect, useState } from 'react'

export default function ComponenteSuma({contador}) {

  const [resultadoSuma, setResultadoSuma]=useState(5);
  useEffect(()=>{
    setResultadoSuma(contador+resultadoSuma)
  },[contador])

  return (
    <div>La suma del contador es : {resultadoSuma}</div>
  )
}
