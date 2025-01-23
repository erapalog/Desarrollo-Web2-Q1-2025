import React from 'react'

export default function Saludos2(props) {

  var nombre: string= 'Erick';

  function suma(a:number ,b:number ){
    return a+b;
  }
  return (
    <div>
      Suma del componente {suma(4,4)}
      <p>EL nombre recibido como propiedad es: {props.nombre}</p>
    
    </div>


  )
}
